function pt(){
    let aElement = document.getElementById('a')
    let bElement = document.getElementById('b')

    let valueA = aElement.value
    let valueB = bElement.value

    if(valueA == 0) {
        document.write('pt vo nghiem')
    } else if(valueA != 0) {
        let timx = -parseFloat(valueB) / parseFloat(valueA)
        document.getElementById('result').innerHTML = timx
    } else if (valueA == 0 && valueB == 0) {
        document.write('pt vo so nghiem')
    }


}