// practica

const yourName = prompt("Ismingizni Yozing Va Nechta Harfdan Iborat Ekanligini Bilib Oling");
document.querySelector("h1").innerHTML = "Sizning Ismingiz" + " " + yourName.length + " " + "Ta Harf Dan Iborat" + " : " + yourName;


const txtAgain = document.getElementById("txtAgain").addEventListener("click", () => {
    const yourName = prompt("Ismingizni Yozing Va Nechta Harfdan Iborat Ekanligini Bilib Oling");
    document.querySelector("h1").innerHTML = "Sizning Ismingiz" + " " + yourName.length + " " + "Ta Harf Dan Iborat" + " : " + yourName;
    document.getElementById("box").classList.toggle("box-2");
});