const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+";

const passBox = document.getElementById('get-pass');
const upperCase = document.getElementById('upper-case');
const lowerCase = document.getElementById('lower-case');
const number = document.getElementById('num');
const symbol = document.getElementById('symbol');

const randomData = (dataSet) =>{
        return dataSet[Math.floor(Math.random(dataSet)*(dataSet.length))];
}

const passLen = document.getElementById('inp-size');
let passSize = passLen.value;

passLen.addEventListener('input', () => {
    passSize = passLen.value;
    document.getElementById('value').innerText = passSize;
})

// Get random password
let finalPass;
const getRandomPassword = (password = "") =>{

    if(upperCase.checked)
        password += randomData(upperSet); 
    if(lowerCase.checked)
        password += randomData(lowerSet); 
    if(num.checked)
        password += randomData(numberSet); 
    if(symbol.checked)
        password += randomData(symbolSet); 
    
    if(password.length < passSize)
        return getRandomPassword(password);

        finalPass = truncateString(password, passSize);
        passBox.value = finalPass;
}

document.getElementById('btn-generate').addEventListener('click', ()=>{
    getRandomPassword();
})

document.getElementById('btn-copy').addEventListener('click', ()=>{
    navigator.clipboard.writeText(finalPass);

})


// For trimming the string in required length
const truncateString = (str, size) => {
    if(str.length > size){
        let subStr = str.substring(0,size);
        return subStr;
    }
    else
        return str;
}



