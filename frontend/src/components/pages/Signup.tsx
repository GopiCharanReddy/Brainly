import { Button } from "../Button"
import Input from "../Input"
import BottomLink from "../BottomLink"
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [apiError, setApiError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<Credentials>()
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (newUserData: Credentials) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, newUserData)
    },
    onSuccess: () => {
      console.log("Signup successfull.")
      navigate('/signin')
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const serverMessage = error.response.data.message || "";

        if (serverMessage.includes("is shorter than the minimum")) {
          setApiError("Invalid Username.Try again.");
        } else if (serverMessage.includes("duplicate key") || serverMessage.includes("already exists")) {
          setApiError("This username is already taken.");
        } else {
          setApiError("An unexpected error occurred. Please try again.");
        }
      } else {
        setApiError("Failed to connect to the server.");
      }
    }
  });

  const onSubmit: SubmitHandler<Credentials> = (data) => {
    setApiError(null)
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
              <Button type="submit" size="md" text={isPending ? "Signing up..." : "Signup"} variant="secondary" fullWidth/>
            </div>
            {isError && <p className="text-sm text-red-500 text-center">{apiError}</p>}
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