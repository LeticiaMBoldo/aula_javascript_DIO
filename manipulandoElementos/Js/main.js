function clicou()
{
    // alert("Obrigado por clicar")
    //pega o elemento com id agradecimento 
    //document.getElementById("agradecimento")

    //injeta informações dentro do html, pode ser texto ou tags mesmo
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar()
{
    //redireciona para uma outra pagina, mas abre outra pagina
    window.open("https://www.youtube.com/")

    //redireciona para outra pagina, mas se mantem na mesma aba que está
    // window.location.href = "https://www.youtube.com/"

}

//esse elemento só pode ser colocado dessa for por conta do this na pagina index.html
function mousesobre(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}


// function load()
// {
//     alert("pagina carregada!")
// }

//ao trocar o valor no html o elemento muda no console
function funcaoChange(elemento)
{
    console.log(elemento.value);
}