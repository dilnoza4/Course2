document.getElementById('largestNumberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let numbers = document.getElementById('numberArray').value.split(',').map(Number);
    let largestNumber = Math.max(...numbers);
    document.getElementById('largestNumberResult').textContent = `The largest number is: ${largestNumber}`;
});
