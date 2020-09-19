var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");

//botones

var a1 = document.getElementById("a1");
var b2 = document.getElementById("b2");
var c3 = document.getElementById("c3");
var d4 = document.getElementById("d4");
var e5 = document.getElementById("e5");
var f6 = document.getElementById("f6");
var g7 = document.getElementById("g7");
var h8 = document.getElementById("h8");
var i9 = document.getElementById("i9");
var j0 = document.getElementById("j0");

//contadores
var letraCont = "";
var numbCont = "";

//funciones
function btnA1() {
    if (letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1";
        numbCont = "1";
    } else { if (letraCont == "") {
        letras.innerHTML = "A";
        letraCont = "A";
    } else {
        alert("Ya esta la A");
    }
    }
}

function btnB2() {
    if (numbCont == "1" && letraCont == "ABCDEFGHIJ" ) {
        numeros.innerHTML = "12";
        numbCont = "12";
    } else { if (letraCont == "A") {
        letras.innerHTML = "AB";
        letraCont = "AB";
    } else if(numbCont !== "1" && letraCont !== "ABCDEFGHIJ"){
      alert("¡FALTAN LETRAS!");
    } else if(letraCont !== "A"){
        alert("¡FALTAN NUMEROS!");
    }
    }
}

function btnC3() {
    if (numbCont =="12" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123";
        numbCont = "123";
    } else {if (letraCont == "AB") {
        letras.innerHTML = "ABC";
        letraCont = "ABC";
    } else if(numbCont !=="12" && letraCont !== "ABCDEFGHIJ"){
        alert("¡FALTAN LETRAS!");
    } else if(letraCont !== "AB"){
        alert("¡FALTAN NUMEROS!")
    }
    } 
}

function btnD4() {
    if (numbCont == "123" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1234";
        numbCont = "1234";
    } else {
        if (letraCont == "ABC") {
        letras.innerHTML = "ABCD";
        letraCont = "ABCD";
    } else if(numbCont !== "123" && letraCont !== "ABCDEFGHIJ"){
        alert("!FALTAN LETRAS¡");
    } else if(letraCont !== "ABC"){
        alert("¡FALTAN NUMEROS!")
    }
    }    
}


function btnE5() {
    if (numbCont == "1234" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "12345";
        numbCont = "12345";
    } else {
        if (letraCont == "ABCD") {
        letras.innerHTML = "ABCDE";
        letraCont = "ABCDE";
    } else if(numbCont !== "1234" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCD") {
        alert("¡FALTAN NUMEROS!")
    }
    }
}

function btnF6() {
    if (numbCont == "12345" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123456";
        numbCont = "123456";
    } else {
        if (letraCont == "ABCDE") {
        letras.innerHTML = "ABCDEF";
        letraCont = "ABCDEF";
    } else if (numbCont !== "12345" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDE") {
        alert("¡FALTAN NUMEROS!")
    }
    }  
}

function btnG7() {
    if (numbCont == "123456" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1234567";
        numbCont = "1234567";
    } else {
    if (letraCont == "ABCDEF") {
    letras.innerHTML = "ABCDEFG";
    letraCont = "ABCDEFG";
    } else if (numbCont !== "123456" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEF") {
        alert("¡FALTAN NUMEROS!")
    }
    }
}

function btnH8() {
    if (numbCont == "1234567" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "12345678";
        numbCont = "12345678";
    } else {
    if (letraCont == "ABCDEFG") {
    letras.innerHTML = "ABCDEFGH";
    letraCont = "ABCDEFGH";
    } else if(numbCont !== "1234567" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEFG") {
        alert("¡FALTAN NUMEROS!")
    }
    }
  
}

function btnI9() {
    if (numbCont == "12345678" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123456789";
        numbCont = "123456789";
    } else {
    if (letraCont == "ABCDEFGH") {
    letras.innerHTML = "ABCDEFGHI";
    letraCont = "ABCDEFGHI";
    } else if (numbCont !== "12345678" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEFGH") {
        alert("¡FALTAN NUMEROS!")
    }
    } 
}

function btnJ0() {
    if (numbCont == "123456789" && letraCont == "ABCDEFGHIJ") {
        numeros. innerHTML = "1234567890";
        numbCont = "1234567890";
    } else {
    if (letraCont == "ABCDEFGHI") {
    letras. innerHTML = "ABCDEFGHIJ"; 
    letraCont = "ABCDEFGHIJ";
    } else if (numbCont !== "123456789" && letraCont !== "ABCDEFGHIJ") {
        alert("¡FALTAN LETRAS!")
    } else if (letraCont !== "ABCDEFGHI") {
        alert("¡FALTAN NUMEROS!")
    }
    }
}

//onclicks

a1. onclick = function () {
    btnA1();
}

b2. onclick = function () {
    btnB2();
}

c3. onclick = function () {
    btnC3();
}

d4. onclick = function () {
    btnD4();
}

e5. onclick = function () {
    btnE5();
}

f6. onclick = function () {
    btnF6();
}

g7. onclick = function () {
    btnG7();
}

h8. onclick = function () {
    btnH8();
}

i9. onclick = function () {
    btnI9();
}

j0. onclick = function () {
    btnJ0();
}