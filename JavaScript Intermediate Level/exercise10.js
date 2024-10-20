function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq.slice(0, n);
}
console.log(fibonacci(10));
