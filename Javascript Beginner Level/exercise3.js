document.getElementById('evenOddForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let number = parseInt(document.getElementById('numberInput').value);
    let result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById('evenOddResult').textContent = `The number is: ${result}`;
});
