import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './component/user'
import User1 from './component/User1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <User/> */}
   <User1/>
    </>
  )
}

export default App
