function checkAnagram() {
    const str1 = document.getElementById('str1').value.split('').sort().join('');
    const str2 = document.getElementById('str2').value.split('').sort().join('');
    const isAnagram = str1 === str2;

    document.getElementById('result').innerText = isAnagram ? "These strings are anagrams!" : "These strings are not anagrams.";
}
