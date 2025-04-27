import { useState } from 'react'
import NewF from "./new"
function App() {
  const username = "Deepak Bhatt"

  return (
    <>
    <NewF />
    <h1>
      React with Vite first Page | {username}
    </h1>
    </>
  )
}

export default App
