function getUniqueValues() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(Number);
    const uniqueValues = [...new Set(numbers)];
    document.getElementById('result').innerText = `Unique Values: ${uniqueValues.join(', ')}`;
}
