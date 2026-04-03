(function () {
  const cacheKey = "dulcebebe.customers.v1";

  const normalizePhone = (value) => {
    let digits = String(value || "").replace(/\D/g, "");

    while (digits.startsWith("0")) {
      digits = digits.slice(1);
    }

    if (!digits) {
      return "";
    }

    if (digits.startsWith("549")) {
      return digits;
    }

    if (digits.startsWith("54")) {
      return `549${digits.slice(2)}`;
    }

    if (digits.startsWith("9")) {
      return `54${digits}`;
    }

    return `549${digits}`;
  };

  const loadCache = () => {
    try {
      const raw = localStorage.getItem(cacheKey);

      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_error) {
      return [];
    }
  };

  const saveCache = (customers) => {
    localStorage.setItem(cacheKey, JSON.stringify(customers));
  };

  const canUseFirebase = () => {
    if (!window.firebase || !window.firebase.apps) {
      return false;
    }

    const cfg = window.FIREBASE_CONFIG || {};
    return Boolean(
      cfg.apiKey &&
        cfg.authDomain &&
        cfg.projectId &&
        cfg.storageBucket &&
        cfg.messagingSenderId &&
        cfg.appId &&
        cfg.apiKey !== "REEMPLAZAR_API_KEY",
    );
  };

  let firestore = null;

  const ensureFirestore = () => {
    if (!canUseFirebase()) {
      return null;
    }

    if (firestore) {
      return firestore;
    }

    if (window.firebase.apps.length === 0) {
      window.firebase.initializeApp(window.FIREBASE_CONFIG);
    }

    firestore = window.firebase.firestore();
    return firestore;
  };

  const collectionName = "clientes";

  const upsertClient = async (profile) => {
    const normalizedEmail = String(profile.email || "").trim().toLowerCase();

    if (!normalizedEmail) {
      return;
    }

    const payload = {
      ...profile,
      email: normalizedEmail,
      phone: normalizePhone(profile.phone),
      updatedAt: new Date().toISOString(),
    };

    const local = loadCache();
    const idx = local.findIndex((entry) => String(entry.email || "").trim().toLowerCase() === normalizedEmail);

    if (idx >= 0) {
      local[idx] = { ...local[idx], ...payload };
    } else {
      local.unshift({ ...payload, createdAt: payload.updatedAt });
    }

    saveCache(local);

    const db = ensureFirestore();

    if (!db) {
      return;
    }

    await db.collection(collectionName).doc(normalizedEmail).set(
      {
        ...payload,
        createdAt: db.FieldValue ? db.FieldValue.serverTimestamp() : null,
      },
      { merge: true },
    );
  };

  const findByCredentials = async (email, password) => {
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const normalizedPassword = String(password || "").trim();

    if (!normalizedEmail || !normalizedPassword) {
      return null;
    }

    const local = loadCache();
    const localMatch = local.find(
      (entry) =>
        String(entry.email || "").trim().toLowerCase() === normalizedEmail &&
        String(entry.password || "").trim() === normalizedPassword,
    );

    if (localMatch) {
      return localMatch;
    }

    const db = ensureFirestore();

    if (!db) {
      return null;
    }

    const snap = await db.collection(collectionName).doc(normalizedEmail).get();

    if (!snap.exists) {
      return null;
    }

    const data = snap.data() || {};

    if (String(data.password || "").trim() !== normalizedPassword) {
      return null;
    }

    return data;
  };

  const subscribeClients = (onData) => {
    const local = loadCache();
    onData(local);

    const db = ensureFirestore();

    if (!db) {
      return () => {};
    }

    return db
      .collection(collectionName)
      .onSnapshot((snapshot) => {
        const customers = [];

        snapshot.forEach((doc) => {
          customers.push(doc.data() || {});
        });

        customers.sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
        saveCache(customers);
        onData(customers);
      });
  };

  window.ClientsStore = {
    upsertClient,
    findByCredentials,
    subscribeClients,
    loadCache,
  };
})();
