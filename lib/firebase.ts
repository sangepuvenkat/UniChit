import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword as firebaseSignIn,
  createUserWithEmailAndPassword as firebaseSignUp,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth"
import {
  getFirestore,
  collection as firestoreCollection,
  doc as firestoreDoc,
  addDoc as firestoreAddDoc,
  setDoc as firestoreSetDoc,
  getDoc as firestoreGetDoc,
  getDocs as firestoreGetDocs,
} from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics"

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId?: string
}

// Real Firebase configuration for Uni Chit
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCTsWqlE1dFxvUP6IDweITpSTbOENVNaGM",
  authDomain: "unichit-1d6a7.firebaseapp.com",
  projectId: "unichit-1d6a7",
  storageBucket: "unichit-1d6a7.firebasestorage.app",
  messagingSenderId: "114642179864",
  appId: "1:114642179864:web:bb920e92a2d4ab5626b06d",
  measurementId: "G-YD60FS1EF7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

// Initialize Analytics (only in browser environment)
let analytics: any = null
if (typeof window !== "undefined") {
  analytics = getAnalytics(app)
}

// Export Firebase auth functions
export const signInWithEmailAndPassword = firebaseSignIn
export const createUserWithEmailAndPassword = firebaseSignUp
export const signOut = firebaseSignOut
export const onAuthStateChanged = firebaseOnAuthStateChanged

// Export Firestore functions
export const collection = firestoreCollection
export const doc = firestoreDoc
export const addDoc = firestoreAddDoc
export const setDoc = firestoreSetDoc
export const getDoc = firestoreGetDoc
export const getDocs = firestoreGetDocs

// Export Firebase instances
export { auth, db, storage, analytics }
export default app
