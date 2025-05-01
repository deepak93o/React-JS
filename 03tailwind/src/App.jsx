import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Card price="15$" iden="#102" />        
       <Card price="20$" iden="#112" />        
       <Card price="12$" iden="#122" />        
    </>
  )
}

export default App
