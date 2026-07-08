import leia from 'readline-sync'

var notabimestre = leia.questionFloat("digite sua nota : "  )
var nota2bimestre = leia.questionFloat("digite sua nota : "  )
var faltas = leia.questionInt("digite suas faltas " )
var qntddeaulas = leia.questionInt("quantas aulas ao total? ")

var soma = nota2bimestre + notabimestre
var media = soma / 2;
console.log ("sua media é " + media);

var freqaulas = qntddeaulas - faltas
var frequencia = (freqaulas/qntddeaulas) * 100
console.log("sua frequencia é " + frequencia)
if( media>= 7 && frequencia  >= 75){
    console.log("aprovado")
} else if(media <= 5 && 6.9 && frequencia >= 75){
    console.log ("recuperaçao")
}else if (media < 5 ){
    console.log("reprovado por nota")
} else if (frequencia < 75 ) {
    console.log("reprovado por falta")
};
