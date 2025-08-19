import { BrowserRouter, Route,  Routes} from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Signin from "./components/pages/Signin"
import Signup from "./components/pages/Signup"
import ShareContent from "./components/pages/ShareContent"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareLink" element={<ShareContent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App