var team = prompt("pari o dispari? [P/D]").toUpperCase();
console.log(team);
var n = parseInt(prompt("inserisci un numero da uno a 5"));
if (n>5){
    alert("non barare")
}

var risultato = gioca(team,n);

function gioca(team,n){
    var number = Math.floor(Math.random() * 5) + 1;
    console.log(number);
    var tot = number + n;
    console.log("totale numeri = "+tot);
    if(tot%2 == 0){
        tot = "P";
    }
    else{
        tot= "D";
    }
    if (tot = team){
        tot="hai vinto";
    }
    else{
        tot = "hai perso";
    }
    console.log(tot);
    return tot;
}

document.getElementById("output").innerHTML = risultato;

