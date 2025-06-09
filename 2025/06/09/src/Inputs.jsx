import "./Inputs.css"

function classifyIMC(IMC){
  switch(true){
    case(IMC<18.5):
      return("Baixo peso")
    case(IMC < 25):
      return("Peso normal")
    case(IMC < 30):
      return("Excesso de peso")
    case(IMC < 35):
      return("Obesidade de classe 1")
    case(IMC < 40):
      return("Obesidade de classe 2")
    default:
      return("Obesidade de classe 3")

  }
}

let peso
let altura


export default function Inputs({setIMC, setIMCClass}){
    function calcularIMC(){
        if(peso===undefined || altura===undefined){
          return
        }
        if(peso<=0 || altura<=0){
          return
        }
        setIMC(peso/altura**2)
        setIMCClass(classifyIMC(peso/altura**2))
      }
      
    return(
    <div className="form">
      <div className="inputs">
        <input type="number" name="peso" id="peso" placeholder="Peso em Kg" onChange={(e)=>{peso = e.target.value}}/>
        <input type="number" name="altura" id="altura" placeholder="Altura em M" onChange={(e)=>{altura = e.target.value}}/>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
    </div>
    )
}