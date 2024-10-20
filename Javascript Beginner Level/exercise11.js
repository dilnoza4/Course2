document.getElementById('sumArrayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let array = document.getElementById('arrayInput').value.split(',').map(Number);
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('sumResult').textContent = `The sum is: ${sum}`;
});
