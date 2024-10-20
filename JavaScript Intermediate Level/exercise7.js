function flattenArray() {
    const input = document.getElementById('arrayInput').value;
    const nestedArray = JSON.parse(input);
    const flatArray = nestedArray.flat(Infinity);
    document.getElementById('result').innerText = `Flattened Array: ${flatArray.join(', ')}`;
}
