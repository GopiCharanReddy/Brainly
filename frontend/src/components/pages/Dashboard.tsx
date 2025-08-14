import { useState } from 'react'
import Card from '../Card'
import CreateComponentModal from '..//CreateComponentModal'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false)
  return (
    <>
      <div className='h-max min-h-screen flex bg-slate-100'>
        <CreateComponentModal open={modelOpen} onClose={() => {setModelOpen(false)}} />
        <Sidebar />
        <div className='w-screen min-h-screen ml-72'>
          <Header onClick={() => setModelOpen(true)} />
          <div className='lg:flex'>
          <Card type="youtube" link="https://www.youtube.com/watch?v=CAr02YlEJUc" title="DBMS Concepts" />
          <Card type="youtube" link="https://www.youtube.com/watch?v=CAr02YlEJUc" title="DBMS Concepts" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard