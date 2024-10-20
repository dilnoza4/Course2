document.getElementById('fizzBuzzForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('fizzBuzzNumber').value);  // Corrected ID
    let result = '';

    if (isNaN(number) || number <= 0) {
        document.getElementById('fizzBuzzResult').textContent = 'Please enter a valid positive number.';
        return;
    }

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz, ';
        } else if (i % 3 === 0) {
            result += 'Fizz, ';
        } else if (i % 5 === 0) {
            result += 'Buzz, ';
        } else {
            result += `${i}, `;
        }
    }

    document.getElementById('fizzBuzzResult').textContent = result.slice(0, -2);  // Remove the last comma and space
});
