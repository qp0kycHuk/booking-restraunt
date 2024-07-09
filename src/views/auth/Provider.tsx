import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"
import { COOKIE_TOKEN_NAME } from "./const"
import { api } from "./service/api"
import { LoginPayload, RegisterPayload, User } from "./types"
import { useToggle } from "@/hooks"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import { toast } from "@/libs"
import { FirebaseError } from "firebase/app"

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = useState(Cookies.get(COOKIE_TOKEN_NAME) || "")
  const [user, setUser] = useState<User>()
  const [isLoading, , loadingStart, loadingEnd] = useToggle(true)

  const isLoggedIn = !!user

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user)

        setUser(user)
        const token = await user.getIdToken()

        setToken(token)
        Cookies.set(COOKIE_TOKEN_NAME, token, {
          expires: 7,
        })
      } else {
        setUser(undefined)
        setToken("")
        Cookies.remove(COOKIE_TOKEN_NAME)
      }
      loadingEnd()
    })
  }, [])

  async function register(payload: RegisterPayload) {
    try {
      return await api.register(payload)
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(
          <>
            <div className="font-semibold">{error.message}</div>
            <div className="opacity-60">{error.code}</div>
          </>
        )
      }
      return null
    }
  }

  async function login(payload: LoginPayload) {
    try {
      return await api.login(payload)
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(
          <>
            <div className="font-semibold">{error.message}</div>
            <div className="opacity-60">{error.code}</div>
          </>
        )
      }
      return null
    }
  }

  async function logout() {
    await api.logout()
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user: user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

type AuthContextValue = {
  isLoggedIn: boolean
  isLoading: boolean
  user?: User
  login: (formData: LoginPayload) => Promise<User | null>
  register: (formData: LoginPayload) => Promise<User | null>
  logout: () => Promise<void>
}
