import { Button } from '../Button'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
const Header = () => {
  return (
      <div className="flex justify-between px-5 p-2 items-center">
        <h1 className='text-black font-semibold text-3xl'>All Notes</h1>
        <div className='flex'>
        <Button variant='primary' size='lg' text='Share Content' startIcon={<ShareIcon size='lg' />} onClick={() => { "" }} />
        <Button variant='secondary' size='lg' text='Add Content' startIcon={<PlusIcon size='lg' />} onClick={() => { "" }} />
        </div>
      </div>
  )
}

export default Header 