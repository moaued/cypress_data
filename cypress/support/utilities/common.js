export function generateRandomUsername(length = 8) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters[randomIndex];
    }
  
    return `user_${username}`; // Prefix to ensure it looks like a username
  }

  export function generateRandomEmail(domain = 'example.com') {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
  
    // Generate a random username
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters[randomIndex];
    }
  
    return `${username}@${domain}`; // Combine username and domain
  }

  export function generateRandomPassword(length = 12) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allCharacters = lowerCase + upperCase + numbers + specialCharacters;
    let password = '';
  
    // Ensure the password includes at least one character from each category
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  
    // Fill the rest of the password length with random characters
    for (let i = 4; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    // Shuffle the password to ensure randomness
    return password.split('').sort(() => 0.5 - Math.random()).join('');
  }


  const XLSX = require('xlsx');

  export function writeExcel(filePath, data) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filePath);
}

