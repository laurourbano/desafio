function inverterString(s) {
    let inversa = "";
    for (let i = 0; i < s.length; i++) {
        inversa = s[i] + inversa;
    }
    return inversa;
}

// Exemplo de entrada
const entrada = prompt("Digite uma string:");
console.log(`String invertida: ${inverterString(entrada)}`);
