document.getElementById('numberToStringForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let number = parseFloat(document.getElementById('numberInput').value);
    let numberString = number.toString();
    document.getElementById('numberToStringResult').textContent = `The number as a string is: "${numberString}"`;
});
