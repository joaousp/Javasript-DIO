let num = [1,2,3,4,5];

let maca={
    preco:2
}

let banana={
    preco:3
}

function mapArray(){
    let num = [1,2,3,4,5];

    return num.map(function(item){
        return item*this.preco;
    },banana)
}

function mapArrayT(cid){

    let num = [1,2,3,4,5];
    return num.map(function(item){
        return item*cid.preco;
    })

}

let numeros = [1,2,3,4,5];

function filterArray(arr){
    if(!arr||!arr.legth) return;

    const ret = arr.filter((item) => item%2===0);
    return ret;
     
}


function reduceArray(){
   

    const ret = ((curr,accumulator) => curr+accumulator);
    return ret;
     
}


let jeleva=[4,6,8,10,12,14,16];


function reduceArrayT(numeros,disponivel){
   

    const ret = numeros.reduce((curr,item)=> curr-item,disponivel);
    
    return (ret);
     
}

saldo=100;
console.log(reduceArrayT(jeleva,saldo))

