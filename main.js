const form = document.getElementById('form-atividade')
const Aprovado = '<img src="./aprovado.png" alt="Emoji celebrando" />';
const Reprovado = '<img src="./reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span-class="resultado aprovado">Aprovado</spam>';
const spanReprovado = '<span-class="resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt("Digite a nota miníma:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById|('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida `)
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade >= notaMinima ? Aprovado: Reprovado}</td>`;
    linha += `</td>`;

    linhas +- linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor'),innerHTML = mediaFinal;
    document.getElementById('media-final-resultado'),innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

}
