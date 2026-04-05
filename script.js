function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "main.html";
    } else {
        alert("Yanlış məlumat!");
    }
}

function al() {
    alert("Telefon seçildi 📱");
}