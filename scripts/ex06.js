function verificador() {


    let letra = toString(prompt("digite uma letra do alfabeto pra ver se e vocal ou consoante"));

    if (letra === "a" ||letra === "e" ||letra === "i" ||letra === "o" ||letra === "u") {
        alert("sua letra e vocal");
    } else{
        alert("é consoante")
    }


}