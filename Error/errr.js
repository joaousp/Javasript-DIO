let num=[1,2,3,4,5];

function verificar(array,numero){
    if(!array||!numero) throw new ReferenceError("Parametros faltantes");

    if(typeof(array)!=='object') throw new TypeError('Array precisa ser tipo object');
    if(typeof(numero)!=='number') throw new TypeError('Numero precisa ser tipo number');
    
    if(array.length !== numero ) throw new RangeError('Tamanho incompativel');
}

try {
    verificar(num,5);
} catch (error) {
    if(error instanceof ReferenceError){
        console.log('ReferenceError:');
        console.log(error.stack);
    }
    else if(error instanceof TypeError){

        console.log('TypeError:');
        console.log(error.stack);
    }else if(error instanceof RangeError){

        console.log('RangeError:');
        console.log(error.stack);

    }
}