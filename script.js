let texto = document.getElementById('texto');
let resultado = document.getElementById('resultado');
let content_resultado = document.getElementById('content__result');
let content_resultado_imagen = document.getElementById('content__result__imagen');

function encriptar(){
    let textoEncriptado = iterar(texto.value);
    resultado.innerHTML = textoEncriptado;
    content_resultado.style.display = 'flex';
    content_resultado_imagen.style.display = 'none';
}
function iterar(texto){
    let textoEncriptado = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == 'e'){
            textoEncriptado += 'enter';
        }else if(texto[i] == 'i'){
            textoEncriptado += 'imes';
        }else if(texto[i] == 'a'){
            textoEncriptado += 'ai';
        }else if(texto[i] == 'o'){
            textoEncriptado += 'ober';
        }else if(texto[i] == 'u'){
            textoEncriptado += 'ufat';
        }else{
            textoEncriptado += texto[i];
        }
    }
    return textoEncriptado;
}
function desencriptar(){
    let textoDesencriptado = iterarDesencriptar(texto.value);
    resultado.innerHTML = textoDesencriptado;
}

function iterarDesencriptar(texto){
    let textoDesencriptado = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == 'e' && texto[i+1] == 'n' && texto[i+2] == 't' && texto[i+3] == 'e' && texto[i+4] == 'r'){
            textoDesencriptado += 'e';
            i += 4;
        }else if(texto[i] == 'i' && texto[i+1] == 'm' && texto[i+2] == 'e' && texto[i+3] == 's'){
            textoDesencriptado += 'i';
            i += 3;
        }else if(texto[i] == 'a' && texto[i+1] == 'i'){
            textoDesencriptado += 'a';
            i += 1;
        }else if(texto[i] == 'o' && texto[i+1] == 'b' && texto[i+2] == 'e' && texto[i+3] == 'r'){
            textoDesencriptado += 'o';
            i += 3;
        }else if(texto[i] == 'u' && texto[i+1] == 'f' && texto[i+2] == 'a' && texto[i+3] == 't'){
            textoDesencriptado += 'u';
            i += 3;
        }else{
            textoDesencriptado += texto[i];
        }
    }
    return textoDesencriptado;
}

function copiar(){
    resultado.select();
    document.execCommand("copy");
}