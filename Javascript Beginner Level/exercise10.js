document.getElementById('fizzBuzzForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let number = parseInt(document.getElementById('fizzBuzzNumber').value);
    let result = '';

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

    document.getElementById('fizzBuzzResult').textContent = result.slice(0, -2); // To remove trailing comma
});
