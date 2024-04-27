import { useState } from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
