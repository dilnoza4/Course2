document.getElementById('palindromeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let str = document.getElementById('inputString').value;
    let isPalindrome = str === str.split('').reverse().join('');
    document.getElementById('palindromeResult').textContent = isPalindrome ? 'It is a palindrome.' : 'It is not a palindrome.';
});
