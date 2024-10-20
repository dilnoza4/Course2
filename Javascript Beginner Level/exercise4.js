document.getElementById('celsiusForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitResult').textContent = `The temperature in Fahrenheit is: ${fahrenheit}`;
});
