import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyBz7FvTK3kMc6OuDNRVqfsS6qDAIs6DIVM",
authDomain: "flashcard-8703e.firebaseapp.com",
projectId: "flashcard-8703e",
storageBucket: "flashcard-8703e.appspot.com",
messagingSenderId: "382564467863",
appId: "1:382564467863:web:94e1e857ab298f269dd5d2",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;