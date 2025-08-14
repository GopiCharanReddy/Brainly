import { Button } from "../Button"
import Input from "../Input"
import BottomLink from "../BottomLink"
import { useRef, useState, type ChangeEvent } from "react"
import axios from "axios"

const Signup = () => {

  const [username, setUsername] = useState<String>('s');
  const [password, setPassword] = useState<String>('');
  const [error, setError] = useState<String>('');

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleClick = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError('')

    if (!username || username === null || !password || password === null) {
      setError("All fields are required.")
    }
    axios.post(import.meta.env.BASE_URL, {
      username,
      password
    })
    // const username = usernameRef.current?.value
    // const password = passwordRef.current?.value
    // const BASE_URL = import.meta.env.BASE_URL
    // axios.post(BASE_URL, {
    //   username,
    //   password
    // })
  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>
      <div className='grid gap-y-5 bg-white text-black p-10 rounded-xl'>
        <h1 className='text-3xl mb-4'>Signup</h1>
        <div>
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} ref={usernameRef} type="email" placeholder="Username" autoFocus />
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} ref={passwordRef} type="password" placeholder="Password" />
          <div className="flex justify-center">
            <Button onClick={() => handleClick} size="md" variant="secondary" fullWidth text="Signup" />
          </div>
        </div>
        <BottomLink label={`Already have an account? `} to={'/signin'} text={'Signin'} />
      </div>
    </div>
  )
}

export default Signup