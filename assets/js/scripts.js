var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber =0;
// function increment(){

//     currentNumber = currentNumber +1;
//     currentNumberWrapper.innerHTML=currentNumber;
// }


// function decrement(){
//     currentNumber = currentNumber -1;
//     currentNumberWrapper.innerHTML=currentNumber;
// }

function mudar_vermelho(){
    currentNumberWrapper.style.backgroundColor='Red'
}
function mudar_retornar(){
    currentNumberWrapper.style.backgroundColor = '#b1e1ff';
}

document.getElementById("subtrair").addEventListener("click", function() {
    currentNumber = currentNumber -1;
    if(currentNumber<=-10){
        currentNumberWrapper.innerHTML=-10;
        currentNumber=-10;
    }else{
        if (currentNumber<=0)  mudar_vermelho();
        currentNumberWrapper.innerHTML=currentNumber;
    }

});

document.getElementById("adicionar").addEventListener("click", function() {
    currentNumber = currentNumber +1;
    if(currentNumber>=10){
        currentNumberWrapper.innerHTML=10;
        currentNumber=10;
    }
    else{
        if (currentNumber>=0)  mudar_retornar();
        currentNumberWrapper.innerHTML=currentNumber;
    }
});