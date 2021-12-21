let outputHtml = document.getElementById('output');
let output2 = document.getElementById('span');
let casuali = [];
let asked = [];
let indovinati = [];

for (x = 0; x < 5; x++){
    casuali.push(Math.floor(Math.random() * 100) + 1)
    outputHtml.innerHTML = casuali;
}

setTimeout(function(){
    outputHtml.style.display = 'none';
    for (k = 0; k < 5; k++){
        ask = parseInt(prompt('inserisci il numero che hai visto'));
        parseInt(asked.push(ask));
    }
    for (i = 0; i < 5; i++){

        if (casuali.includes(asked[i])){
            indovinati[i] = asked[i];
        }

         if (indovinati.length == 5){
         output2.innerHTML = 'Complimenti, hai indovinato tutti i numeri!';
        }else{
            output2.innerHTML = `Hai indovinato ${indovinati.length} numeri: ${indovinati}, ritenta!`;
        }  
    }
}, 30000)



