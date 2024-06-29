const generatebtn = document.querySelector("#generatebtn");
let msg = document.querySelector("#msg");
let msgg = document.querySelector("#msgg");
let emoji = document.querySelector("#emoji");
let user = document.querySelector("#passnum");
let chars = "abcdefghijklmnopqrstuvwxyz";
let charS = chars.toUpperCase();
let symbols = "&@#$+-!{}[]()*~?=_";
let numbers = "0123456789";
let arr = [...chars, ...charS, ...symbols, ...numbers];
const min = 0;
const max = 79;

document.addEventListener("DOMContentLoaded", () => {
    generatebtn.onclick = () => {
        let passarr = [];
        let value = user.value;
        for (let i = 0; i < value; i++) {
            let num = Math.floor(Math.random() * (max - min + 1) + min);
            passarr[i] = arr[num];
        }
        if (value < 8 && value > 0) {
            msg.innerHTML = `Password: ${passarr.join("")}`;
            msgg.innerHTML = "Weak Password";
            emoji.innerHTML = "&#128529";
        }
        else if (value > 7 && value < 16) {
            msg.innerHTML = `Password: ${passarr.join("")}`;
            msgg.innerHTML = "Strong Password";
            emoji.innerHTML = "	&#128170";
        }
        else if (value > 15) {
            msg.innerHTML = `Password: ${passarr.join("")}`;
            msgg.innerHTML = "Powerful Password";;
            emoji.innerHTML = "&#128123";

        }
    }
});