import { useAuth } from "@/views/auth/Provider"
import { Navigate, Outlet } from "react-router-dom"

export function PrivateOutlet() {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/login/" />
  }

  return <Outlet />
}
