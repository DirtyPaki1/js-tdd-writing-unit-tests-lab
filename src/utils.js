// Your code here
export function isPalindrome(word) {
    if (typeof word !== 'string') {
       throw new Error("Input must be a string");
    }
    if (!/^[A-Za-z]*$/.test(word)) {
        throw new Error("Input must contain only alphabetic characters");
    }
    
   
   
    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
   }
   
   






















   