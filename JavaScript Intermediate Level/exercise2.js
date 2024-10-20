function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("invalid-email"));
