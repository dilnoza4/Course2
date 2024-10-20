document.getElementById('reverseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let inputString = document.getElementById('inputString').value;
    let reversedString = inputString.split('').reverse().join('');
    document.getElementById('reversedResult').textContent = `Reversed string: ${reversedString}`;
});
