import './App.css'
import Card from './components/Card'
import CreateComponentModal from './components/CreateComponentModal'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='h-max min-h-screen flex bg-slate-100'>
        <CreateComponentModal open={true} />
        <Sidebar />
        <div className='w-screen'>
          <Header />
          <div className='grid grid-cols-3'>
          <Card type="youtube" link="https://www.youtube.com/watch?v=CAr02YlEJUc" title="DBMS Concepts" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App