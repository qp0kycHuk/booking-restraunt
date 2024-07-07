import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout"
import { Login } from "./views/auth/pages/Login"
import { Register } from "./views/auth/pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/register/" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
