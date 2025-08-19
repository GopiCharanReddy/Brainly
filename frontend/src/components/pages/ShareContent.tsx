import { useQuery } from '@tanstack/react-query'
import Card, { type CardProps } from '../Card'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ShareContent = () => {
  const { shareLink } = useParams()
  const fullShareUrl = shareLink ? `http://localhost:3000/api/v1/brain/${shareLink}` : ''
  const {data} = useQuery({
    queryKey: ['sharedContent', shareLink],
    queryFn: async () => {
      const response = await axios.get(fullShareUrl)
      return response.data.content
    },
  })
  return (
    <>
      <div className='h-max min-h-screen flex bg-slate-100'>
        <div className='w-screen min-h-screen'>
          <Sidebar />
          <div className='flex flex-wrap items-start ml-72'>
            {data?.map(({ id, type, link, title }:CardProps) => <Card key={id} id={id} type={type} link={link} title={title} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareContent