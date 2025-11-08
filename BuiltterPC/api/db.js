import admin from "firebase-admin"
import serviceAccountKey from './serviceAccountKey.json' with { type: 'json' }

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

const db = admin.firestore();
export { firebaseApp, db };
