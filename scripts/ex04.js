function ordenação() {
    let valores = [];
    for (let i = 0; i < 4; i++) {
        valores[i] = parseInt(prompt("digite um numero"));



    }

    valores.sort  ((a,b) => a-b);
    alert(valores)



}