import { SubmitHandler, useForm } from "react-hook-form"
import { api } from "../service/api"
import { FirebaseError } from "firebase/app"
import { toast } from "@/libs"

export function Register() {
  const { register, handleSubmit } = useForm<Inputs>()

  const submitHandler: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const result = await api.register(email, password)
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(
          <>
            <div className="font-semibold">{error.message}</div>
            <div className="opacity-60">{error.code}</div>
          </>
        )
      }
    }
  }

  return (
    <section>
      <form
        className="flex flex-col max-w-xl gap-3 p-8 m-auto bg-l3 rounded-2xl"
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
        <button className="rounded-md btn btn-primary btn-fill">
          Зарегестрироваться
        </button>
      </form>
    </section>
  )
}

type Inputs = { email: string; password: string }
