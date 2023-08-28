const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const inputText = document.querySelector(".inputBox");
const qrBox = document.getElementById("qrBox");
const imgBox = document.getElementById("imgBox");


async function getQR(url){
    imgBox.src = url + inputText.value;
}

