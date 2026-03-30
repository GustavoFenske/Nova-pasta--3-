function orde2(){
    let valores = [];

    for( let i = 0; i <2; i++){
     valores[i] = (prompt("digite o seu numero"))
    }
 valores.sort  ((a,b) => b-a);
    alert("o seus numeros na ordem no maior pro menor é : " + valores)
}