function contar (){ //responsavel por contar os numeros
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); // coletar os elementos "txtNumeroFinal"
    let divNumeros = document.getElementById("divNumeros"); // vai receber o elemnto do "divNumeros" / uma declaraçao de variavel e pegar o elemento pelo ("id")
    divNumeros.innerHTML = "";
    for (let i = numero; i <= txtNumeroFinal.value; i++) { // for = vai definir de onde ele vem e pra onde ele vai/ i++ vai receber ele mesmo (i = i + 1)
       divNumeros.innerHTML += i + "<br />"; //+= vai fazer com que a variavel receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) { // codigo 13 é quando a tecla enter é teclada
        contar();
    } else {
        if (
            isNaN(event.key) && // aqui significa que ua tecla não numerica foi teclada
            event.keyCode != 8 &&// codigo 8 é quando a tecla backspace (apagar à esquerda) é teclada
            event.keyCode != 46 &&//codigo 46 é quando a tecla delete é teclada
            event.keyCode != 37 &&//codigo 37 é quando a tecla seta para a esquerda é teclada
            event.keyCode != 38 &&// codigo 38 é quando a tecla seta para cima é teclada
            event.keyCode != 39 &&// codigo 39 é quando a tecla seta para baixo é teclada
            event.keyCode != 40 && // codigo 40 é quando a tecla para direita é teclada       
            event.keyCode != 35 && // codigo 35 é quando a tecla end é clicada
            event.keyCode != 36 // codigo 36 é quando a tecla home é teclada
        ) { 
            console.log("Não é númerico. keyCode: ", event.keyCode); // aparece no console o nome de um erro personalizado
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente.";
    } 
 }
  }
);

document.getElementById("txtNumeroFinal").addEventListener('input', function (event) {
    //console.log(this);
    if (this.value.length > 3) {
        console.log("Tem mais de 3 caracteres")
        if (this.value > 999) {
            this.value = 999;
            alert("O numero maximo permitido é 999!")
     } else {
        this.value = this.value.substring(0,3);
    }
 }
});
