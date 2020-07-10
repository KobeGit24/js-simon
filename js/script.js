//un alert espone 5 numeri casuali. da li parte un timer di 30 secondi. dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precendentemente. dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuali.
$(document).ready(function(){
    var array = [];
    var numUser = [];
    var result = [];

    while (array.length<5) {
        var numRan = random(1,100);
        if (!array.includes(numRan)) {
          array.push(numRan); 
        }
    }
    console.log(array);
    alert(array);

    setTimeout(function(){
        for (var i = 0; i < 5; i++) {
            var tuoinumeri = parseInt(prompt('inserisci i tuoi numeri'));
            if (isInArray(tuoinumeri,array)) {
                result.push(tuoinumeri);
            } 
            numUser.push(tuoinumeri);
        }
        if (result==0) {
            console.log('non hai indovinato nessun numero');
        } else {
            console.log('i numeri da te indovinati sono: ' + result);
        }
        console.log('i numeri da te inseriti sono: ' + numUser);      
        console.log('hai totalizzato: ' + result.length + ' punti');
    },5000);
});


// FUNCTION 

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(val, array) {
    for (var i = 0; i < array.length; i++) { 
        if (array[i] == val ) {
            return true;
        } 
    } 
    return false;
}