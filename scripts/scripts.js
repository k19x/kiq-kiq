function whoami() {
    var x = document.querySelector(".resume");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function contact() {
    var x = document.querySelector(".info_contact");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function academic() {
    var x = document.querySelector(".info_academic");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function construct() {
    var x = document.querySelector(".construct");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function exit() {
    var x = document.querySelector(".exit");
    window.open("https://k19x.github.io/kiq-kiq/", "_self");
}

function certs() {
    var x = document.querySelector(".info_cert");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function cert1() {
    window.open("certificates\\certificate-3.pdf")
}

function cert2() {
    window.open("certificates\\certificate-4.pdf")
}

function cert3() {
    window.open("certificates\\certificate-5.pdf")
}

function cert4() {
    window.open("https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXQsjoxYVPPNzH8xxmHrExVYd1ObdJnvmtHhZH6z9L6MOWl6oPVpM6Uv0mSwhKdpnLQHjkCwwKKmz30wpSGgiKqw=")
}

function cert5() {
    window.open("https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXZUMCaPZeD0fn3izylSN62cG1br3Db7x10GLE62NY2AGohSfTGBStbPNoUzq4oEurLDJf0HFM9SYhnw23GdIl98=")
}

function cert6() {
    window.open("https://pdf.credential.net/0t54iuvp_1733174704724.pdf")
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
