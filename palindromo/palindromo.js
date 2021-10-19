var parola = prompt("Scrivi un palindromo");
var prova = verifica(parola);
function verifica(parola) {
    var reverse = "";
    for(let i = parola.length - 1; i>=0; i--){     //rigiro la parola
        letter = parola.charAt(i);
        reverse += letter;
    }
    if (reverse == parola){                        //verifico se la parola rigirata corrisponde alla parola principale
        parola ="Hai inserito un palindromo" 
    }
    else{
        parola = "Non barare"
    }
    console.log(reverse);
    return parola;
}
document.getElementById("output").innerHTML = prova;

