const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, curr) => acc + curr, 0);

function calcularPercentuais(faturamentoEstados, total) {
    let percentuais = {};
    for (let estado in faturamentoEstados) {
        percentuais[estado] = (faturamentoEstados[estado] / total) * 100;
    }
    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoEstados, totalFaturamento);

for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
