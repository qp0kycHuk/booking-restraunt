import { PirateIcon } from "@/assets/icons/fill"
import { useAuth } from "@/views/auth/Provider"
import { Link } from "react-router-dom"

export function Header() {
  const { user, isLoggedIn, isLoading, logout } = useAuth()

  return (
    <header className="flex items-center py-3 bg-l3">
      <div className="flex items-center gap-3">
        <PirateIcon className="text-2xl text-primary" />
        <div className="text-2xl font-semibold">Logo</div>
      </div>
      {isLoading && "Loading"}
      {!isLoading && !isLoggedIn && (
        <div className="flex gap-1 ml-auto">
          <Link className="rounded-md btn btn-primary btn-sm" to="/login/">
            Войти
          </Link>
          <Link className="rounded-md btn btn-primary btn-sm" to="/register/">
            Зарегестрироваться
          </Link>
        </div>
      )}
      {!isLoading && isLoggedIn && (
        <div className="flex items-center gap-1 ml-auto">
          <div>{user?.email}</div>

          <button
            className="rounded-md btn btn-primary btn-sm"
            onClick={logout}
          >
            Выйти
          </button>
        </div>
      )}
    </header>
  )
}
