import { auth } from "@/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { LoginPayload } from "../types"

export const api = {
  async login({ email, password }: LoginPayload) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    return userCredential.user
  },
  async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    return userCredential.user
  },
  async logout() {
    return await signOut(auth)
  },
}
