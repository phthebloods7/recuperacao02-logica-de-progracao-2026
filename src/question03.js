import leia from 'readline-sync'

var valor = leia.questionFloat("qual o valor do seu produto")
var pagamento1 = leia.keyInYN("voce pagou em pix?")
var pagamento2 = leia.keyInYN("voce pagou em cartao de debito?")
var pagamento3 = leia.keyInYN("voce pagou em cartao de credito?")
var pagamento4 = leia.keyInYN("voce pagou em cartao parcelado")

var parcela = pagamento4 && leia.questionInt("quantas parcelas?")

var pagamento1taxa = valor * (12/100)
var p1 = valor - pagamento1taxa
var pagamento2taxa = valor * (7/100)
var p2 = valor - pagamento2taxa
var pagamento3semPARtaxa = valor * (0/100)
var p3 = valor - pagamento3semPARtaxa
var pagamento4taxa = valor * (8/100)
var p4 = valor - pagamento4taxa
if(pagamento1 = valor - pagamento1taxa ){
    console.log("total do produto com desconto " + p1 )
}else if(pagamento2 = valor - pagamento2taxa ){
    console.log("total do produto com desconto " + p1 )
}else if(pagamento3 = valor - pagamento3semPARtaxa ){
    console.log("total do produto com desconto " + p1 )
}else if(pagamento4 = valor + pagamento4taxa ){
    console.log("total do produto com desconto " + p1 )
}
console.log ("seu produto é " + valor)
