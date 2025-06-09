import "./Botoes.css"

export default function Botoes({onIncrement, onDecrement}){
    return(
        <div className="botoes">
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}