function folha2() {

    let liquido = 0;
    let taxa = 0;

    let nome = (prompt("digite o seu nome"));

    let salario = parseInt(prompt("digite o seu salario bruto : "));


    if (salario <= 1000) {
        liquido = salario * 0.8;
        let taxa = 8;

    } else if ((salario > 1000) || (salario < 1500)) {
        liquido = salario * 0.85;
        taxa = 8.5;
    }else{
        liquido = salario * 0.9;
        taxa = 9;
    }

    let desconto = liquido - salario;

    alert(nome);
    alert("seu salario bruto é " + salario);
    alert("o desconto do inss é " + desconto);
    alert("a porcentagem aplicada de descono foi : " + taxa);
    alert("o seu salario final vai ser " + liquido);
}