function folha() {

    let nome =(prompt("digite o seu nome"));
    
    let salario = parseInt(prompt("digite o seu salario bruto : "))

    let liquido = salario * 0.8;
    let desconto = liquido - salario;

    alert(nome)
    alert("seu salario bruto é " + salario);
    alert("o desconto do inss é " + desconto);
    alert("o seu salario final vai ser " + liquido);



}