function generatePassword() {
    const lengthElement = document.getElementById('length');
    const passwordElement = document.getElementById('password');

    if (lengthElement && passwordElement) {
        const length = lengthElement.value;
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()-_=+";
        const allChars = upperCase + lowerCase + numbers + symbols;

        let password = '';
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        for (let i = password.length; i < length; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        passwordElement.textContent = password;
    }
}