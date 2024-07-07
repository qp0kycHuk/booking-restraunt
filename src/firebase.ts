import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDqGDSP2hhCZJPt4otEqmKtEeSbbwVoO80",
  authDomain: "booking-restraunt.firebaseapp.com",
  projectId: "booking-restraunt",
  storageBucket: "booking-restraunt.appspot.com",
  messagingSenderId: "645159972691",
  appId: "1:645159972691:web:53e27c057fecd36d6cbba6",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
