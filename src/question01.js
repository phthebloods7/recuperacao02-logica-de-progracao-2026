import leia from 'readline-sync'
var diasalugados = leia.questionInt("quantos dias voce alugou? " )
var modelo = (["Popular" , "luxo" , "intermediario"])
var modelotipo = leia.keyInSelect(modelo, "Qual o tipo do carro que voce alugou?  " )
var KM = leia.questionInt("quantos KMs voce percorreu?")

var tipodecarro = modelo
var totalpopular =  diasalugados * 90 + KM * 0.25
if ([tipodecarro] = [1]){
    console.log ("esse é o valor q voce tem que pagar " + totalpopular.toFixed(2))
var totalinter = diasalugados * 140 + KM * 0.40
}else if([tipodecarro] = [3]){    
    console.log ("esse é o valor q voce tem que pagar" + totalinter.toFixed(2))}
else if ([tipodecarro] = [2]){
    console.log("total a pagar" + totalluxo)
}var totalluxo = diasalugados * 220 + KM * 0.70