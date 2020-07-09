//un alert espone 5 numeri casuali. da li parte un timer di 30 secondi. dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precendentemente. dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuali.
$(document).ready(function(){
    var array = [];
    var numUser = [];

    for (var i = 0; i < 5; i++) {
        array.push(random(1,100));   
    }
    console.log(array);
    
    var time = 10;
    
    var timer = setInterval(function() {  
        if (time==0) {
            clearInterval(timer);
            $('#modal').hide();
            for (var i = 0; i < 5; i++) {
                var tuoinumeri = parseInt(prompt('inserisci i tuoi numeri'));
                numUser.push(tuoinumeri);
            }
            console.log(numUser);
            
        } else {
            time--;
            $('#modal').text(array);
            console.log(time); 
            console.log(array); 
        }
    },1000);

    // if ($('#modal').hasClass('control')==false) {
    //     i=0;
    //     while (i<5) {
    //         var numInseriti = prompt('inserisci 5 numeri da 1 a 100');
    //         numUser.push(numInseriti);
    //         i++;
    //     }
    // }
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

            // var numUser = [];
            // i=0;
            // while (i<5) {
            //     var numInseriti = prompt('inserisci 5 numeri da 1 a 100');
            //     // numUser.push(numInseriti);
            //     i++;
            // }
            // console.log(numUser); 