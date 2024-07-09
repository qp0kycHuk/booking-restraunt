import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "../Provider"
import { useToggle } from "@/hooks"
import { CirclePreloader } from "@/components/CirclePreloader/CirclePreloader"
import { Link } from "react-router-dom"

export function Register() {
  const [loading, , loadingStart, loadingEnd] = useToggle()
  const { register, handleSubmit } = useForm<Inputs>()
  const auth = useAuth()

  const submitHandler: SubmitHandler<Inputs> = async ({ email, password }) => {
    loadingStart()
    await auth.register({ email, password })
    loadingEnd()
  }

  return (
    <section>
      <form
        className="flex flex-col max-w-lg gap-3 p-8 m-auto bg-l3 rounded-2xl"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="text-2xl font-semibold">Зарегестрироваться</div>
        <input
          type="text"
          className="rounded-md input"
          placeholder="Логин"
          {...register("email")}
        />
        <input
          type="text"
          className="rounded-md input"
          placeholder="Пароль"
          {...register("password")}
        />
        <button
          className="rounded-md btn btn-primary btn-fill"
          disabled={loading}
        >
          {loading ? <CirclePreloader /> : "Зарегестрироваться"}
        </button>{" "}
        <Link className="rounded-md btn btn-primary" to="/login/">
          Войти
        </Link>
      </form>
    </section>
  )
}

type Inputs = { email: string; password: string }
