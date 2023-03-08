import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRederect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore() //Initialize Firestore

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())
  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { userName: displayName, email, createdAt })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  //if user data exists

  //return userDocref

  return userDocRef
}
