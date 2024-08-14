function sum (){

    //b1 : lấy input
    let aElement = document.getElementById('a')
    let bElement = document.getElementById('b')

    let valueA = aElement.value
    let valueB = bElement.value

    // b2 cộng 2 gtri

    let sum = parseInt(valueA) + parseInt(valueB)

    //b3 hiện thị kết quả
    document.getElementById('result').innerHTML = sum;
}
function sum2 (){

    //b1 : lấy input
    let aElement = document.getElementById('a')
    let bElement = document.getElementById('b')

    let valueA = aElement.value
    let valueB = bElement.value

    // b2 cộng 2 gtri

    let sum = parseInt(valueA) - parseInt(valueB)

    //b3 hiện thị kết quả
    document.getElementById('result').innerHTML = sum;
}function sum3 (){

    //b1 : lấy input
    let aElement = document.getElementById('a')
    let bElement = document.getElementById('b')

    let valueA = aElement.value
    let valueB = bElement.value

    // b2 cộng 2 gtri

    let sum = parseInt(valueA) * parseInt(valueB)

    //b3 hiện thị kết quả
    document.getElementById('result').innerHTML = sum;
}function sum4 (){

    //b1 : lấy input
    let aElement = document.getElementById('a')
    let bElement = document.getElementById('b')

    let valueA = aElement.value
    let valueB = bElement.value

    // b2 cộng 2 gtri

    let sum = parseInt(valueA) / parseInt(valueB)

    //b3 hiện thị kết quả
    document.getElementById('result').innerHTML = sum;
}
