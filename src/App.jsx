import { useState } from 'react'
import Header from "./components/Header"

  const [presupuesto, setPresupuesto] = useState(0)

function App() {

  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
      />
    </div>
  )
}

export default App
