document.getElementById('vowelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let inputString = document.getElementById('inputString').value.toLowerCase();
    let vowelCount = (inputString.match(/[aeiou]/gi) || []).length;
    document.getElementById('vowelResult').textContent = `Number of vowels: ${vowelCount}`;
});
