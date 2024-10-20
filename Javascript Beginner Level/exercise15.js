document.getElementById('dateTimeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let currentDate = new Date();
    document.getElementById('dateTimeResult').textContent = `Current date and time: ${currentDate.toString()}`;
});
