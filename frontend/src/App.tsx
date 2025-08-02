import './App.css'
import Card from './components/Card'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='flex  bg-slate-100'>
        <Sidebar />
        <div>
          <Header />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App