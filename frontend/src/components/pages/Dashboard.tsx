import { useState } from 'react'
import Card from '../Card'
import CreateComponentModal from '../CreateContentModal'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import useContent from '../useContent'

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false)
  const {data} = useContent()
  return (
    <>
      <div className='h-max min-h-screen flex bg-slate-100'>
        <CreateComponentModal open={modelOpen} onClose={() => { setModelOpen(false) }} />
        <Sidebar />
        <div className='w-screen min-h-screen ml-72'>
          <Header onClick={() => setModelOpen(true)} />
          <div className='lg:flex'>
            {data?.map(({ id, type, link, title }) => <Card key={id} id={id} type={type} link={link} title={title} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard