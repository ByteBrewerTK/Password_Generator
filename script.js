const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerSet = "abcdefghijklmnopqrstuvwxyz",
    numberSet = "1234567890",
    symbolSet = "~!@#$%^&*()_+";

const passBox = document.getElementById('get-pass'),
    upperCase = document.getElementById('upper-case'),
    lowerCase = document.getElementById('lower-case'),
    number = document.getElementById('num'),
    symbol = document.getElementById('symbol'),
    passLen = document.getElementById('inp-size');

// Random single char generator
const randomData = (dataSet) =>dataSet[Math.floor(Math.random(dataSet)*(dataSet.length))];

passLen.addEventListener('input', () => document.getElementById('value').innerText = passLen.value);

// Get random password
const getRandomPassword = (password = "") =>{

    if(upperCase.checked) password += randomData(upperSet); 
    if(lowerCase.checked) password += randomData(lowerSet); 
    if(num.checked) password += randomData(numberSet); 
    if(symbol.checked) password += randomData(symbolSet); 
    
    if(password.length < passLen.value) return getRandomPassword(password);

    passBox.value = truncateString(password, passLen.value);
         
}

document.getElementById('btn-generate').addEventListener('click', ()=>getRandomPassword())

document.getElementById('btn-copy').addEventListener('click', ()=> navigator.clipboard.writeText(passBox.value))

// For trimming the string in required length
const truncateString = (str, size) => str.length > size ? str.substring(0,size): str;



