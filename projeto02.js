rank (200, 5)
function rank (vitoria, derrota){
	let saldo = vitoria - derrota      
 if (saldo < 10) {
    	let nivel= "Ferro"
        console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
    if (saldo > 11 && saldo <= 20) {
    	let nivel= "Bronze"
    	console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
    if (saldo > 21 && saldo <= 50) {
    	let nivel= "Prata"
    	console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
    if (saldo > 51 && saldo <= 80) {
    	let nivel= "Ouro"
    	console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
    if (saldo > 81 && saldo <= 90) {
    	let nivel= "Diamante"
    	console.log ("O heroi tem saldo de vitória " + saldo, "e esta no nível " + nivel)
    }
    if (saldo > 91 && saldo <= 100) {
    	let nivel= "Lendário"
    	console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
    if (saldo > 101) {
    	let nivel= "Imortal"
    	console.log ("O heroi tem saldo de vitória " + saldo, " e esta no nível " + nivel)
    }
}