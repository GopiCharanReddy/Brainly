import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <>
    <div className="h-screen flex justify-center items-center text-white bg-[#212529]">
    <Button variant='primary' size='md' text='Add content' startIcon={""} endIcon={""} onClick={() => {""}}  />
    <Button variant='secondary' size='md' text='Remove Content' startIcon={""} endIcon={""} onClick={() => {""}}  />
    </div>
    </>
  )
}

export default App