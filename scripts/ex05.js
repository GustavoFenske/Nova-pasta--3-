function transformação() {
    let numeromagico = 0;
    let numero = parseInt(prompt("digite um numero para ver se e par ou impar"))


    if (numero % 2 === 0) {
        alert("seu numero é par");
    } else {
        alert("seu numero e impar");
    }

    numeromagico = numero + 1;

    alert("seu numero : " + numero + "  agora é : " + numeromagico);

}