document.getElementById('factorialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let number = parseInt(document.getElementById('inputNumber').value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').textContent = `Factorial of ${number} is: ${factorial}`;
});
