import leia from 'readline-sync'

var valor = leia.questionFloat("qual o valor do seu produto")
var pagamento1 = leia.keyInYN("voce pagou em pix?")
var pagamento2 = leia.keyInYN("voce pagou em cartao de debito?")
var pagamento3 = leia.keyInYN("voce pagou em cartao de credito?")
var pagamento4 = leia.keyInYN("voce pagou em cartao parcelado")

var parceela = pagamento4 && leia.questionInt("quantas parcelas?")

var pagamento1taxa = valor * (12/100)
var pagamento2taxa = valor * (7/100)
var pagamento3semPARtaxa = valor * (0/100)
var pagamento4taxa = valor * (8/100)
if(pagamento1 )