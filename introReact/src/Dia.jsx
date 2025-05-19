let defaultClass = `px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border dark:border-gray-700 border-gray-200 hover:bg-gray-600 cursor-pointer`

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

export function Dia(key, diaAtual, actualDate, setActualDate){
    let isLastMonth = diaAtual<1
    let isNextMonth = diaAtual>diasNoMes(actualDate.getMonth()+1,actualDate.getYear())
    let isThisMonth = !(isLastMonth || isNextMonth)
    let isSelected = diaAtual == actualDate.getDate()
    let isToday = diaAtual == new Date().getDate() && actualDate.getFullYear() == new Date().getFullYear() && actualDate.getMonth() == new Date().getMonth()

    return <>
        <th key = {key} scope="row" onClick={() => setActualDate(new Date(actualDate.getFullYear(), actualDate.getMonth(), diaAtual))}
            className=
            {
                defaultClass + 
                (!isThisMonth?" backdrop-brightness-80 brightness-70 opacity-75 ":"") + 
                (isSelected?" saturate-200 bg-wwhite dark:bg-gray-700":"") +
                (isToday?"  outline outline-8 outline-gray-700 outline-dashed outline-offset-[-4px]":"")
            }>

            {
                isLastMonth?
                diasNoMes(actualDate.getMonth(), actualDate.getYear())+diaAtual:
                isNextMonth?
                diaAtual-diasNoMes(actualDate.getMonth()+1,actualDate.getYear()):
                diaAtual
            }
        </th>
    </>
}