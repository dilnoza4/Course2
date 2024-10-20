document.getElementById('sumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('result').textContent = `The sum is: ${sum}`;
});
