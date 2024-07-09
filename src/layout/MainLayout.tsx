import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Suspense } from "react"
import { PrivateOutlet } from "./PrivateOutlet"

export function MainLayout() {
  return (
    <>
      <Header />
      <Suspense fallback='loading...'>
        <PrivateOutlet />
      </Suspense>
    </>
  )
}