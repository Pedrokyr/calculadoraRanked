let heroi = "Link"
let vitorias = 97
let derrotas = 20

function calcularRanked(vitorias, derrotas) {
    return vitorias - derrotas;
}

function nivelHeroi(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    }

    return "Imortal";
}

function exibirResultado() {
    let saldoVitorias = calcularRanked(vitorias, derrotas);
    let nivel = nivelHeroi(saldoVitorias);
    console.log(`O herói ${heroi} tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
}

exibirResultado();
