function balanço() {

    let ganhomensal = 0;
    let gastomensal = 0;
    let gastoanual = 0;
    let ganhoanual = 0;
    let saldo = 0;

    for (let i = 1; i < 13; i++) {
        ganhomensal = parseFloat(prompt("diga o ganho do mes" + i + ":"));
        gastomensal = parseFloat(prompt("diga o gasto mensal" + i + ":"));

        ganhoanual += ganhomensal;
        gastoanual += gastomensal;

    }

    alert("ganho anual : " + ganhoanual);
    alert("gasto anual : " + gastoanual);

    

    saldo = ganhoanual - gastoanual;

    if (saldo > 0){
        alert("Voce teve um lucro de : " + saldo);
    } else {
        alert("seu prejuizo foi de : " + saldo);
    }





}