function sortArray() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(Number);
    const sorted = numbers.sort((a, b) => a - b);
    document.getElementById('result').innerText = `Sorted Array: ${sorted.join(', ')}`;
}
