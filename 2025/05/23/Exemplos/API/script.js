const cepInput = document.getElementById("cep")


function criarLink(cep){
    return `https://viacep.com.br/ws/${cep}/json/`
}
function buscarCep(){
    const url = criarLink(cepInput.value)
    fetch(url).then((response)=>{
        if(!response.ok){
            throw new Error(response.Error)
        }
        return response.json()
    }).then((data)=>{
        console.log(data)
        document.getElementById("logradouro").value = data.logradouro
        document.getElementById("bairro").value = data.bairro
        document.getElementById("cidade").value = data.localidade
        document.getElementById("estado").value = data.estado + "/" + data.uf
    }).catch((error)=>{
        throw new Error(error)
    })
}