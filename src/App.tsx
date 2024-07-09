import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout"
import { Login } from "./views/auth/pages/Login"
import { Register } from "./views/auth/pages/Register"
import { AuthLayout } from "./layout/AuthLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/register/" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
