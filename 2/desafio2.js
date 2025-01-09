function fibonacci(num) {
    let fib1 = 0;
    let fib2 = 1;

    while (fib2 < num) {
        [fib1, fib2] = [fib2, fib1 + fib2];
    }

    if (fib2 === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

const numero = parseInt(prompt("Informe um número:"));
console.log(fibonacciCheck(numero));
