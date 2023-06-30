const minuscula = 'abcdefghijklmnopqrstuvwxyz';
const maiuscula = minuscula.toUpperCase();
const numeros = '1234567890';
const possibilidades = maiuscula + minuscula + numeros;

const max = 10;
const mostrarSenha = document.querySelector('#senha');
const gerarSenha = document.querySelector('#gerar');
const limparSenha = document.querySelector('#limpar');

let senhaCriada;
let numero;

function senhaGerada(){
    for (let senha = 0; senha < max; senha++){
        numero = Math.floor(Math.random() * possibilidades.length)
        
        if (senha == 0){
            senhaCriada = possibilidades[numero];
        }
        else{
            senhaCriada += possibilidades[numero];
        }
    }
    return senhaCriada;
}

gerarSenha.onclick = function(){
    mostrarSenha.value = senhaGerada();
}

limparSenha.onclick = function(){
    mostrarSenha.value = null;
}




