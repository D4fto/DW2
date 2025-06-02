const btnSubmit = document.getElementById("submit-isbn")
const inputIsbn = document.getElementById("isbn")
btnSubmit.addEventListener("click", buscar)

function buscar(){
    if(inputIsbn.value.length!=13){
        alert("ISBN inválido, O ISBN necessita ter 13 números")
        return
    }
    if(!/^[0-9]+$/.test(inputIsbn.value)){
        alert("ISBN inválido, O ISBN não pode conter letras ou caracteres especiais")
        return
    }
    const url = `https://brasilapi.com.br/api/isbn/v1/${inputIsbn.value}`
    fetch(url).then((response)=>{
        if(!response.ok){
            if(response.status === 404){
                throw new Error("ISBN não encontrado")
            }
            if(response.status === 400){
                throw new Error("ISBN inválido")
            }
            if(response.status === 500){
                throw new Error("Todos os serviços de ISBN retornaram erro")
            }
            throw new Error(response.status + response.statusText)
        }
        return response.json()
    }).then((data)=>{
        document.getElementById("autor").textContent = data.authors.join(", ")
        document.getElementById("titulo").textContent = data.title
        document.getElementById("subtitulo").textContent = data.subtitle
        document.getElementById("location").textContent = data.location
        document.getElementById("data").textContent = data.year
        document.getElementById("sinopse").textContent = data.synopsis
        document.getElementById("publicadora").textContent = data.publisher
    }).catch((error)=>{
        alert("Falha na requisição: " + error)
    })
}