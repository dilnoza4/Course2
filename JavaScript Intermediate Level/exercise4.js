function countWordOccurrences(text) {
    let words = text.split(/\s+/);
    let wordCount = {};
    words.forEach(word => {
        word = word.toLowerCase();
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
}
console.log(countWordOccurrences("This is a test. This test is only a test."));
