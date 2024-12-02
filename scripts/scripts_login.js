function login() {
    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    if (username == "kali" && password == "kali") {
        window.location.href = "https://k19x.github.io/kiq-kiq/kali/www/kali.html";
    } else {
        alert("Clique em 'Cancel' para ajuda.");
    }
}

function cancel() {
    document.querySelector(".username").value = "kali";
    document.querySelector(".password").value = "kali";
}

window.onload = function() {
    document.querySelector(".btn-cancel").addEventListener("mouseover", () => {
        document.querySelector(".btn-cancel").innerHTML = "Cancel";
    });
    document.querySelector(".btn-cancel").addEventListener("mouseout", () => {
        document.querySelector(".btn-cancel").innerHTML = "Ajuda";
    });
}

window.onload = function() {
    var disclaimer = document.getElementsByClassName("disclaimer");
    disclaimer.parentNode.removeChild(disclaimer);
}

window.onload = function() {
    var disclaimer = document.getElementsByClassName("disclaimer")[0];
    disclaimer.parentNode.removeChild(disclaimer);
}

window.onload = function() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;
    }
}
