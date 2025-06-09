import { useState } from "react"
import Output from "./Output"
import Inputs from "./Inputs"
import "./App.css"


function App() {
  const[IMC, setIMC] = useState()
  const[IMCClass, setIMCClass] = useState()

  
  return (
    <main>
      <div className="formWithTitle">
        <h1>Calculadora de IMC</h1>
        <Inputs setIMC={setIMC} setIMCClass={setIMCClass}></Inputs>
      </div>
      <div className="outputs">
        <Output texto={"Seu IMC é: "} valor={IMC!==undefined?IMC.toFixed(2):undefined} defaul={"Seu imc"}></Output>
        <Output texto={"Categoria: "} valor={IMCClass} defaul={"Sua categoria"}></Output>
      </div>
    </main>
  )
}

export default App
