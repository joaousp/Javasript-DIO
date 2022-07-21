let alunos = {
    nome:'João Paulo',
    idade:23,
    media:9
}


function calculaIdade(anos) {
    	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(alunos, 2 ));

console.log(calculaIdade.apply(alunos, [4] ));
