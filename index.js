const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];




const output1 = document.getElementById("out-1")
const output2 = document.getElementById("out-2")
const genBtn = document.getElementById("generate-btn")
const charLimit = 15
const specialCheckbox = document.getElementById("have-special")
const numCheckbox = document.getElementById("have-num")



function getRandom() {
    
    let charSet = characters.slice(); // copy of the charraters array

    //remove both nums and special characters
    if(numCheckbox.checked && specialCheckbox.checked){
        charSet.splice(52, 100)
    }

    // remove numbers
    else if(numCheckbox.checked){
        charSet.splice(52, 10)
    }

    //remove special characters
    else if(specialCheckbox.checked){
        charSet.splice(62, 29)
    }

    // password generator
    let result = ""
    for (let num = 0; num < charLimit; num++) {
        let i = Math.floor(Math.random() * charSet.length)
        let random = charSet[i]
        result += random
    }
    return result
}
 
function genPassword() {
    output1.innerText = getRandom()
    output2.innerText = getRandom()
}

genBtn.addEventListener("click", genPassword)


