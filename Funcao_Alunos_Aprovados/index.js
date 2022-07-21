
let alunos = [{
    nome:'João Paulo',
    idade:'23',
    media:9
},{
    nome:'Paulo Zacarias',
    idade:'20',
    media:5
},{
    nome:'Zacarias Rodrigues',
    idade:'235',
    media:3
}]

function alunosAprovados(alunos,mediaT){
    let aprovados = [];

    for (let index = 0; index < alunos.length; index++) {
        let {media,nome} = alunos[index];
        if(media>=mediaT){
            aprovados.push(nome);
        }   
       
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));