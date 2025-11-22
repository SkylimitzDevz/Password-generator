const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];




const output1 = document.getElementById("out-1")
const output2 = document.getElementById("out-2")
const genBtn = document.getElementById("generate-btn")
const charLimit = 15


function getRandom() {
    let result = ""
    for (let num = 0; num < charLimit; num++) {
        let i = Math.floor(Math.random() * characters.length)
        let random = characters[i]
        result += random
    }
    return result
}

function genPassword() {
    output1.innerText = getRandom()
    output2.innerText = getRandom()
}

genBtn.addEventListener("click", genPassword)
