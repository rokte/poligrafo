let perguntas = [
    "1.Você conhecia a vítima? ",
    "2.Você esteve com a vítima no dia do assassinato? ",
    "3.Você esteve no local do crime? ",
    "4.Você discutiu com a vítima antes de sua morte? ",
    "5.Você tinha algum conflito com a vítima? ",
    "6.Você sabe quem cometeu o assassinato? ",
    "7.Você escondeu alguma informação sobre o caso? ",
    "8.Você mentiu para os investigadores durante o interrogatório? ",
    "9.Você tocou em algum objeto relacionado ao crime? ",
    "10.Você teve participação direta no assassinato? "
]
let resposta = ""
let contador = 0
let i = 0
document.getElementById("mensagem").innerHTML = perguntas[i]

function responder(){
resposta = document.querySelector('input[name="resp"]:checked')

    if (!resposta) {
        alert("Selecione SIM ou NÃO!");
        return;
    }

if (resposta.value == "sim"){
contador += 1
}

i+= 1 

if (i<perguntas.length){
document.getElementById("mensagem").innerHTML = perguntas[i]
}
else{
document.getElementById("mensagem").innerHTML = "Sua quantidade de respostas sim foi:"+contador    
}

if(i ==10){

    if (contador < 5){
    document.getElementById("resultado").innerHTML ="Você é inocente"
}
else if (contador == 5){
    document.getElementById("resultado").innerHTML ="Você é suspeito"
}
else if (contador >= 6 && contador <= 8){
    document.getElementById("resultado").innerHTML ="Você é cúmplice"
}
else{
    document.getElementById("resultado").innerHTML ="Você é culpado"
}

}

}

