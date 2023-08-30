import { useState } from 'react'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
    <h1> {count} </h1>
    </>
  )
}

export default App;
