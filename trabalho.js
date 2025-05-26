function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    if (idade === 1 && porte === 'M') {
        return true;
    }
    return false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
    const gramasDeRacaoPorQuilo = 4350 / 14.5
    const consumoDiarioDeRacao = peso * gramasDeRacaoPorQuilo
    return consumoDiarioDeRacao
}

    function decidirTipoDeAtividadePorPorte(porte) {
        switch (porte) {
            case "pequeno":
                return "brincar dentro de casa"

            case "médio":
                return "passear todos os dias"

            case "grande":
                return "Brincar de bolinha"

            default:
                return "porte e atividade não definida"
        }
    }

async function buscarDadoAsync() {
    const dadoDeExemplo = "Pipoca"
    return dadoDeExemplo
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
} 