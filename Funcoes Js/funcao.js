function comparaNumeros(num1,num2){
    let auxiliar;
    auxiliar=(num1===num2)? "Os numeros 1 e 2 são iguais.":"Os numeros 1 e 2 não são iguais."
    
    var soma=num1+num2;
    auxiliar+=" Sua soma é "+soma;

    auxiliar+=(soma>10)? ", que é maior que 10 e":", que é menor que 10 e";
    
    auxiliar+=(soma>20)? " maior que 20.":" menor que 20.";
    

    console.log(auxiliar);
}

comparaNumeros(100,1);