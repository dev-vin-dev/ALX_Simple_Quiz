//Arithmetic Functions
function add(number1, number2){
    return number1+number2;
}
function subtract(number1, number2){
    return number1-number2;
}
function multiply(number1, number2){
    return number1*number2;
}
function divide(number1, number2){
    //Handling division by 0
    if (number2 === 0){
        return "cannot divide by Zero";
    }
    return number1/number2;
}

//Getting input Values and display result
function calculateAndDisplay(operationFunc){
    const number1 = parseFloat(document.getElementById("number1").value || 0);
    const number2 = parseFloat(document.getElementById("number2").value || 0);

    const result=operationFunc(number1,number2);
    document.getElementById("calculation-result").textContent=result;
}

//Attach event listeners
document.getElementById("add").addEventListener("click",function(){
    calculateAndDisplay(add);
});
document.getElementById("subtract").addEventListener("click",function(){
    calculateAndDisplay(subtract);
});
document.getElementById("multiply").addEventListener("click",function(){
    calculateAndDisplay(multiply);
});
document.getElementById("divide").addEventListener("click",function(){
    calculateAndDisplay(divide);
});