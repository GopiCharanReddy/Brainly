import { Button } from "../Button"
import Input from "../Input"
import BottomLink from "../BottomLink"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { Credentials } from "./Signup"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const {register, handleSubmit, formState:{ errors }} = useForm<Credentials>()
  const navigate = useNavigate()
  const {mutate, isPending, isError} = useMutation({
    mutationFn: (existingUserData: Credentials) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/users/signin`, existingUserData)
    },
    onSuccess: (response) => {
      const token = response.data.token;
      localStorage.setItem('jwt', token)
      console.log("Signin successful. Token stored.")
      navigate('/dashboard')
    },
    onError: (error) => {
      console.error(error.message)
    }
  })

  const onSubmit: SubmitHandler<Credentials> = (data) => {
    console.log(data)
    mutate(data)
  }
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>
      <div className='grid gap-y-5 bg-white text-black p-10 rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-3xl mb-4'>Signin</h1>
          <div>
            <Input {...register("username", { required: "Username is required."})} placeholder="Username" autoFocus />
            {errors.username && <div className="text-sm text-red-500 mt-1">Username is required.</div>}
            <Input {...register("password", { required: "Password is required."})} type="password" placeholder="Password" />
            {errors.password && <div className="text-sm text-red-500 mt-1">Password is required.</div> }
            <div className="flex justify-center">
              <Button type="submit" size="md" variant="secondary" fullWidth text={isPending? "Signing in..." : "Signin"} />
            </div>
            {isError && <p className="text-sm text-red-500 text-center">Failed to signin. Please try again.</p>}
          </div>
          <BottomLink label={`Don't have an account? `} to={'/signup'} text={'Signup'} />
        </form>
      </div>
    </div>
  )
}

export default Signin