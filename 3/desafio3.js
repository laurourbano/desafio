const faturamentoDiario = {
    dias: [
        1000, 2000, 1500, 1800, 0, 1200, 1500, 2000, 2500, 0, 0, 1800,
        1500, 1300, 1400, 0, 1600, 1700, 2200, 0, 2300, 1800, 1600, 0, 1900
    ]
};

function faturamentoAnalise(faturamento) {
    const diasComFaturamento = faturamento.dias.filter(valor => valor > 0);
    const media = diasComFaturamento.reduce((acc, curr) => acc + curr, 0) / diasComFaturamento.length;
    const menor = Math.min(...diasComFaturamento);
    const maior = Math.max(...diasComFaturamento);
    const diasAcimaMedia = diasComFaturamento.filter(f => f > media).length;

    return { menor, maior, diasAcimaMedia };
}

const { menor, maior, diasAcimaMedia } = faturamentoAnalise(faturamentoDiario);

console.log(`Menor faturamento: R$${menor}`);
console.log(`Maior faturamento: R$${maior}`);
console.log(`Dias com faturamento superior à média: ${diasAcimaMedia}`);
