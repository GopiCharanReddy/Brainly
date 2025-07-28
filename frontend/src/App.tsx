import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
    <div className="h-screen flex justify-center items-center text-white bg-[#212529]">
    <Button variant='primary' size='sm' text='Add content' startIcon={<PlusIcon size='lg' />} onClick={() => {""}}  />
    <Button variant='secondary' size='md' text='Remove Content' startIcon={<PlusIcon size='lg' />} onClick={() => {""}}  />
    <Button variant='secondary' size='lg' text='Share Content' startIcon={<ShareIcon   size='lg' />} onClick={() => {""}}  />
    </div>
    </>
  )
}

export default App