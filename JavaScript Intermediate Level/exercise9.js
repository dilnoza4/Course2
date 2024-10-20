function checkSubstring() {
    const mainString = document.getElementById('stringInput').value;
    const substring = document.getElementById('substringInput').value;
    const isPresent = mainString.includes(substring);
    document.getElementById('result').innerText = isPresent ? "Substring is present!" : "Substring is not present.";
}
