document.getElementById('randomNumberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let min = parseInt(document.getElementById('minValue').value);
    let max = parseInt(document.getElementById('maxValue').value);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('randomNumberResult').textContent = `Random number: ${randomNumber}`;
});
