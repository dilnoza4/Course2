function generateFibonacci() {
    const n = parseInt(document.getElementById('nInput').value);
    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    document.getElementById('result').innerText = `Fibonacci Sequence: ${fibonacci.slice(0, n).join(', ')}`;
}
