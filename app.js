// const pwEl=document.getElementById('pw')
// const copyEl=document.getElementById('copy')
// const lenEl=document.getElementById('length')
// const upperEl=document.getElementById('upper')
// const lowerEl=document.getElementById('lower')
// const numberEl=document.getElementById('number')
// const symbolEl=document.getElementById('symbol')
// const generateEl=document.getElementById('generate')

// // const alp = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
// // const alpWithoutCommas = alp.replace(/,\s*/g, '');
// // console.log(alpWithoutCommas);
// // // ABCDEFGHIJKLMNOPQRSTUVWXYZ
// // console.log(alpWithoutCommas.toLowerCase());
// // //abcdefghijklmnopqrstuvwxyz

// const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
// // alert(lowerLetters.length) // this is just for the control.
// const numbers = '0123456789'
// const symbols = "!@#$%^&*()_-+=<>?";

// function getLowerCase() { 
//     return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]; // let name  = 'efe' -> console.log(name[0]) // 'e'
// }


// function getUpperCase() { 
//     return upperLetters[Math.floor(Math.random()*upperLetters.length)];
// }

// function getNumber() { 
//     return numbers[Math.floor(Math.random()*numbers.length)]
// }
// function getSymbol() { 
//     return symbols[Math.floor(Math.random()*symbols.length)]
// }


// function generatePassword() { 
//     const  len = lenEl.value;
//     let password = "";
//     for(let i=0 ; i<len; i++){ 
//         const x = generateX()
//          password += x;
//     }
//      pwEl.innerText = password;
// }

//     function generateX() { 
//         const xs = [] ; 
//         if(upperEl.checked){ 
//             xs.push(getUpperCase())
//         }
//         if(lowerEl.checked){ 
//             xs.push(getLowerCase())
//         }
//         if(numberEl.checked){ 
//             xs.push(getNumber())
//         }
//         if(symbolEl.checked){ 
//             xs.push(getSymbol())
//         }

//         return xs[Math.floor(Math.random()*xs.length)];
//     }

// generateEl.addEventListener('click',generatePassword)

const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('length'); // Fixed typo from 'lenght'
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = "!@#$%^&*()_-+=<>?";

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;
    let password = "";
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    if(pwEl){ 
        pwEl.textContent = password;
        
    }

}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    if(xs.length===0){
        return "";
    }
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword); 


function copyToClipboard() {
    const password = pwEl.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('The Password that is generated has been copied to clipboard')
}

copyEl.addEventListener('click', copyToClipboard);












 