function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    document.getElementById('result').innerText = isValid ? "Valid Email!" : "Invalid Email!";
}
