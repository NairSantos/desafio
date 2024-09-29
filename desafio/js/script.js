// inicia as filas e os contadores 
let filaNormais = [];
let filaEspeciais = [];
let contadorNormal = 1; 
let contadorEspecial = 1; 
 
// Função para gerar uma senha normal sequencia

function gerarSenhaNormal() {
    // Adiciona o valor do contador 
    filaNormais.push(contadorNormal.toString());
    contadorNormal++; // Incrementa a prox senha no contador
    atualizarFilas(); // Atualiza a fila
}
 
// Função para gerar uma senha especial
function gerarSenhaEspecial() {
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indiceLetra = Math.floor((contadorEspecial - 1) / 10); // Define a letra 
    let numero = (contadorEspecial - 1) % 10 + 1; // Define o número 
   
    // relaciona a letra e o número pra formar a senha especial
    let senha = letras[indiceLetra] + numero.toString();
    filaEspeciais.push(senha);
    contadorEspecial++; 
    atualizarFilas(); 
}
 
// Função para remover a prim senha da fila de senhas normais
function removerSenhaNormal() {
    filaNormais.shift(); // Remove a primeira senha adicionada
    atualizarFilas(); 
}
 
// Função para remover a prim senha da fila de senhas especiais
function removerSenhaEspecial() {
    filaEspeciais.shift(); 
    atualizarFilas(); 
}
 
// Função para atualizar as listas de senhas 
function atualizarFilas() {
    document.getElementById('filaNormais').textContent = '[' + filaNormais.join(', ') + ']';
    document.getElementById('filaEspeciais').textContent = '[' + filaEspeciais.join(', ') + ']';
}
 
 