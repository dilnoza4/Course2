document.getElementById('removeDuplicatesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let array = document.getElementById('arrayInput').value.split(',').map(Number);
    let uniqueArray = [...new Set(array)];
    document.getElementById('removeDuplicatesResult').textContent = `Array with duplicates removed: ${uniqueArray.join(', ')}`;
});
