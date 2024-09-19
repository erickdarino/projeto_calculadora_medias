const form = document.getElementById('form-atividade');
const imgAprovada = `<img src= "./images/aprovado.png" alt="emoji celebrando" />`;
const imgReprovada = `<img src= "./images/reprovado.png" alt="emoji decepcionado" />`
const atividades=[];
const notas=[];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';



form.addEventListener('submit',function(e){
    e.preventDefault();
    addLinha();
    attTabela();
    attMediaFinal();
})

function addLinha(){
    const inputNomeAtividade = document.getElementById('nativ');
    const inputNotaAtividade = document.getElementById('anot');
    
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} já foi inserida!`)
    } else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovada: imgReprovada }</td>`;
    linha += `</tr>`
    
    linhas += linha;
} 
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function attMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mf-valor').innerHTML = mediaFinal;
    document.getElementById('mf-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado:spanReprovado;

}
function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length
}