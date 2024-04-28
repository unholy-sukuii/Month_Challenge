import { useState } from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register/Register'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
