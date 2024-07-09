import { Navigate, Outlet } from "react-router-dom"
import { Suspense } from "react"
import { useAuth } from "@/views/auth/Provider"

export function AuthLayout() {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Navigate to="/" />
  }
  
  return (
    <>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </>
  )
}
