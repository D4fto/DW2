export default function Output({texto, valor, defaul}){
    return(
        <p>{texto}<strong>{valor==undefined?defaul:valor}</strong></p>
    )
}