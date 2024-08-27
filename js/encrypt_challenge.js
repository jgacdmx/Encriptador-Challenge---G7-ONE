function encrypt(translation){
    //Toma el contenido del textarea con el texto a encriptar/desencriptar
    //valida que sean caracteres permitidos
    //usa la lista translation para almacenar el resultado
    var textarea = document.querySelector("#text_input");
    const user_text = textarea.value;

    var default_area = document.querySelector("#default_message");
    var result_area = document.querySelector("#result_message");
    var text_output = document.querySelector("#text_output");

    //limpiamos el warning en caso de que se haya activado
    document.querySelector("#warning").removeAttribute("style");

    //verificación rápida para saber si los caracteres son válidos
    if (user_text.match(/[^a-z\s]/)) {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
    }

    if (user_text.trim() === "") {
        default_area.classList.remove("hidden");
        result_area.classList.add("hidden");
        return;
    }

    //ahora operamos caracter a caracter
    //se vuelve a hacer la verificación

   if (user_text != ""){
        var out = ""
        for(var i=0; i < user_text.length; i++){
            if(((user_text[i] < 'a') || (user_text[i] > 'z')) && (user_text != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((user_text.length == 1 && texto == " ") || user_text.replace(/ /g, "") == ""){
                default_area.classList.remove("invisible");
                result_area.classList.add("invisible");
                return;
            }
            if(user_text[i] == 'a'){
                out += translation["a"] ;
            }
            else if(user_text[i] == 'e'){
                out += translation["e"];
            }
            else if(user_text[i] == 'i'){
                out += translation["i"]; 
            }
            else if(user_text[i] == 'o'){
                out += translation["o"]; 
            }
            else if(user_text[i] == 'u'){
                out += translation["u"]; 
            }
            else{
                out += user_text[i];
            }
        }
    }

    default_area.classList.add("hidden");
    result_area.classList.remove("hidden");
    text_output.value = out;
}

function decrypt(translation){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#text_input");
    var dec_text = textarea.value;
    var default_area = document.querySelector("#default_message");
    var result_area = document.querySelector("#result_message");
    var text_output = document.querySelector("#text_output");
    
    if (dec_text.match(/[^a-z\s]/)) {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
    }

    if (dec_text.trim() === "") {
        default_area.classList.remove("hidden");
        result_area.classList.add("hidden");
        return;
    }

    if (dec_text != ""){
        for(var i=0; i < dec_text.length; i++){
            if(((dec_text[i] < 'a') || (dec_text[i] > 'z')) && (dec_text[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((dec_text.length == 1 && dec_text == " ") || dec_text.replace(/ /g, "") == ""){
                default_area.classList.remove("invisible");
                result_area.classList.add("invisible");
                return;
            }
        }
        default_area.classList.add("invisible");
        result_area.classList.remove("invisible");
        dec_text = dec_text.replace(new RegExp(translation["a"], "g"), "a");
        dec_text = dec_text.replace(new RegExp(translation["e"], "g"), "e");
        dec_text = dec_text.replace(new RegExp(translation["i"], "g"), "i");
        dec_text = dec_text.replace(new RegExp(translation["o"], "g"), "o");
        dec_text = dec_text.replace(new RegExp(translation["u"], "g"), "u");
        text_output.innerHTML = dec_text;
    }


    default_area.classList.add("hidden");
    result_area.classList.remove("hidden");
    text_output.value = dec_text;
}

function copyToClipboard(){
    //Intenta copiar al portapapeles y notifica al usuario en caso de error
    const text_output = document.querySelector("#text_output");
    try {
        navigator.clipboard.writeText(text_output.value);
    } catch (err) {
        console.error('Error al intentar copiar al portapapeles: ', err);
    }
}

//Asignación de eventos a botones
const encrypt_button = document.querySelector('#encrypt');
const decrypt_button = document.querySelector('#decrypt');
const copy_button = document.querySelector('#copy');

var translation = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

encrypt_button.addEventListener( 'click', function() {encrypt(translation);} );
decrypt_button.addEventListener( 'click', function() {decrypt(translation);} );
copy_button.addEventListener( 'click', function() {copyToClipboard();} );
