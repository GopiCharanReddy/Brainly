import { Button } from "../Button"
import Input from "../Input"
import BottomLink from "../BottomLink"
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Credentials>()
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (newUserData: Credentials) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, newUserData)
    },
    onSuccess: () => {
      console.log("Signup successfull.")
    },
    onError: (error) => {
      console.error("An error occurred:", error)
    }
  });

  const onSubmit: SubmitHandler<Credentials> = (data) => {

    console.log(data);

    mutate(data)
  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>
      <div className='grid gap-y-5 bg-white text-black p-10 rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-3xl mb-4'>Signup</h1>
          <div>
            <Input {...register("username", { required: "Username is required." })} placeholder="Username" autoFocus />
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
            <Input {...register("password", { required: "Password is required." })} type="password" placeholder="Password" />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}

            <div className="flex justify-center">
              <Button type="submit" size="md" text={isPending? "Signing in..." : "Signin"} variant="secondary" fullWidth/>
            </div>
            {isError && <p className="text-sm text-red-500 text-center">Failed to create account. Please try again.</p>}
          </div>
          <BottomLink label={`Already have an account? `} to={'/signin'} text={'Signin'} />
        </form>
      </div>
    </div>
  )
}

export type Credentials = {
  username: string,
  password: string,
}

export default Signup