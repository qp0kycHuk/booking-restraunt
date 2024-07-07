import { createPortal } from "react-dom"
import { ThemeContextProvider } from "./layout/ThemeContext"
import { ToastContainer } from "./libs/Toast"
import { AuthProvider } from "./views/auth/Provider"

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        {children}
        {createPortal(<ToastContainer />, document.body)}
      </ThemeContextProvider>
    </AuthProvider>
  )
}
