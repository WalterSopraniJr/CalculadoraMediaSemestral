var nome = "Walter"

var A1 = 8;
var trabalhoUm = 10;
var trabalhoDois = 6;
var trabalhoTres = 7;
var A2 = 4;

var trabalhoFinal = ((trabalhoUm + trabalhoDois + trabalhoTres)/3) * 0.4

var A1Media = A1 * 0.3;
var A2Media = A2 * 0.3;

var notaFinal = trabalhoFinal + A1Media + A2Media;

var notaFinalFix = notaFinal.toFixed(1)

console.log("Olá, " + nome)

console.log("Sua media final é: " + notaFinalFix)

if (notaFinalFix >= 6){
  console.log("APROVADO!")
} else {
  console.log("REPROVADO")
}