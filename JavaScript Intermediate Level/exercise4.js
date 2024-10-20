function countWords() {
    const text = document.getElementById('textInput').value;
    const words = text.split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        word = word.toLowerCase();
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    document.getElementById('result').innerText = `Word Occurrences: ${JSON.stringify(wordCount)}`;
}
