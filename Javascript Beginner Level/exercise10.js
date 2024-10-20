
document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    let result = calculate(operation, num1, num2);


    document.getElementById('calcResult').textContent = "Result: " + result;
});

function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}
