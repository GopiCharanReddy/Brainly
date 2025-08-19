import { Button } from '../Button'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import axios from 'axios'
import {useStore} from '../store'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
  onClick: () => void
}

const Header = ({ onClick }: HeaderProps) => {
  const { setShareUrl } = useStore()
  const navigate = useNavigate()
  return (
    <div className="flex justify-between px-5 p-2 items-center">
      <h1 className='text-black font-semibold text-3xl'>All Notes</h1>
      <div className='flex'>
        <Button variant='secondary' size='lg' text='Add Content' startIcon={<PlusIcon size='lg' />} onClick={onClick} />
        <Button onClick={async () => {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/brain/share`, {
            share: true
          }, {
            headers: {
              "authorization": `Bearer ${localStorage.getItem('jwt')}`
            }
          })
          const shareUrl = `http://localhost:3000/api/v1/brain/${response.data.hash}`
          setShareUrl(shareUrl)
          navigate(`/share/${response.data.hash}`)
        }} variant='primary' size='lg' text='Share Content' startIcon={<ShareIcon size='lg' />} />
      </div>
    </div>
  )
}

export default Header 