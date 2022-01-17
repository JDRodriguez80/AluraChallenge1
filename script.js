/* -----------------------ENCRIPTAR ------------------------------- */
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

//Capturando el contenido del campo de texto 
let botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    let msg = document.getElementById('input-texto').value;
    
    let msgArray = Array.from(msg);
    msgArray.forEach((elemento, indice, arr)=> {
        if(arr[indice]=="e"){
            arr[indice]="enter";
        }else if (arr[indice]=="i") {
            arr[indice]="imes"; 
        }else if (arr[indice]=="a") {
            arr[indice]="ai"; 
        }else if(arr[indice]=="o"){
            arr[indice]="ober";
        }else if(arr[indice]=="u"){
            arr[indice]="ufat";
        }
    });
    document.getElementById('msg').value=msgArray.join(" ");
});


/* ----------------------- DESENCRIPTAR ------------------------------- */

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let btnDesencriptar=document.querySelector("#btn-desencriptar");
btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    let msgEnc = document.getElementById('input-texto').value;
    let msgEncArray= msgEnc.split(/\s+/);
    console.log(msgEncArray);
    msgEncArray.forEach((elemento, indice, arr)=>{
        if(arr[indice]=="enter"){
            arr[indice]="e";
        }else if (arr[indice]=="imes") {
            arr[indice]="i"; 
        }else if (arr[indice]=="ai") {
            arr[indice]="a"; 
        }else if(arr[indice]=="ober"){
            arr[indice]="o";
        }else if(arr[indice]=="ufat"){
            arr[indice]="u";
        }
    });
    document.getElementById('msg').value=msgEncArray.join(" ");
});
/* --------------------- Copiar al portapaeles------------------------ */
let botonCopiar=document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    let textoCopiado= document.getElementById('msg').value;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto Copiado");
    

});
 