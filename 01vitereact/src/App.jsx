import { useState } from 'react'
import NewF from "./new"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewF />
    <h1>
      React with Vite first Page | Deepak
    </h1>
    </>
  )
}

export default App
