import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Suspense } from "react"

export function MainLayout() {
  return (
    <>
      <Header />
      <Suspense fallback='loading...'>
        <Outlet />
      </Suspense>
    </>
  )
}