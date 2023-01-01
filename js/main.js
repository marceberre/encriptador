const ing = document.getElementById("txt_ent");
const btnEncriptar = document.getElementById("btn_enc");
const btnDesencriptar = document.getElementById("btn_des");
const res = document.getElementById("txt_sal");
const cartel_error = document.getElementById("txt_men");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

function encriptar() {
    var txtAEncriptar = ing.value;
    var salida = "";
    const consonantes = "bcdfghjklmnñpqrstvwxyz";

    for (let i = 0; i <= txtAEncriptar.length - 1; i++) {
        // Recorro uno por uno el string y puedo encontrar:
        //     - Que sea mayúscula o acentuado --> ERROR
        if (txtAEncriptar[i] > " " && txtAEncriptar[i] < "a" || txtAEncriptar[i] > "z") {
            cartel_error.style.color = "red";
            return;
        }
        cartel_error.style.color = "black";
        //     - Que sea un espacio --> No hacer nada
        if (txtAEncriptar[i] == " ") {
            salida += " ";
        }
        //     - Que sea una consonante --> No hacer nada
        if (consonantes.includes(txtAEncriptar[i])) {
            salida += txtAEncriptar[i];
        }
        //     - Que sea una vocal --> encriptar
        if (txtAEncriptar[i] == "a") {
            salida += "ai";
        }
        if (txtAEncriptar[i] == "e") {
            salida += "enter";
        }
        if (txtAEncriptar[i] == "i") {
            salida += "imes";
        }
        if (txtAEncriptar[i] == "o") {
            salida += "ober";
        }
        if (txtAEncriptar[i] == "u") {
            salida += "ufat";
        }
    }

    document.getElementById("txt_ent").value = "";
    document.getElementById("txt_sal").value = salida;

}

function desencriptar() {
    var txtADesencriptar = res.value;
    var desencriptado= "";

    if (txtADesencriptar.includes("ai")){
        desencriptado = txtADesencriptar.replaceAll("ai","a");
        txtADesencriptar = desencriptado
    }
    if (txtADesencriptar.includes("enter")){
        desencriptado = txtADesencriptar.replaceAll("enter","e");
        txtADesencriptar = desencriptado
    }
    if (txtADesencriptar.includes("imes")){
        desencriptado = txtADesencriptar.replaceAll("imes","i");
        txtADesencriptar = desencriptado
    }
    if (txtADesencriptar.includes("ober")){
        desencriptado = txtADesencriptar.replaceAll("ober","o");
        txtADesencriptar = desencriptado
    }
    if (txtADesencriptar.includes("ufat")){
        desencriptado = txtADesencriptar.replaceAll("ufat","u");
        txtADesencriptar = desencriptado
    }

    document.getElementById("txt_ent").value = desencriptado;
    document.getElementById("txt_sal").value = "";
}
