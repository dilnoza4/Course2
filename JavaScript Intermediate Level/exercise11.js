function capitalizeWords() {
    const sentence = document.getElementById('sentenceInput').value;
    const capitalized = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('result').innerText = `Capitalized Sentence: ${capitalized}`;
}
