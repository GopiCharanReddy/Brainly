import { Button } from "../Button"
import Input from "../Input"
import BottomLink from "../BottomLink"

const Signin = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>
      <div className='grid gap-y-5 bg-white text-black p-10 rounded-xl'>
        <h1 className='text-3xl mb-4'>Signin</h1>
        <div>
          <Input placeholder="Username" autoFocus />
          <Input placeholder="Password" />
          <div className="flex justify-center">
            <Button size="md" variant="secondary" fullWidth text="Signup" />
          </div>
        </div>
        <BottomLink label={`Don't have an account? `} to={'/signup'} text={'Signup'} />
      </div>
    </div>
  )
}

export default Signin