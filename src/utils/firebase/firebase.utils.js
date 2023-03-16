import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRederect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC6PTpM3kQrwODPmG72m3bgzCtxBhqBKKM',
  authDomain: 'sneaker-shopping.firebaseapp.com',
  projectId: 'sneaker-shopping',
  storageBucket: 'sneaker-shopping.appspot.com',
  messagingSenderId: '541217982768',
  appId: '1:541217982768:web:34ce7f840064f758bba0f5',
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRederect = () =>
  signInWithGoogleRederect(auth, googleProvider)

export const db = getFirestore() //Initialize Firestore

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        userName: displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const logOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
