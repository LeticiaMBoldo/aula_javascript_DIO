// alert("Foi");

// //essa função recebe dois valores
// function soma(n1,n2)
// {
//     // e com eles é feito uma soma e o resultado é devolvido para a pagina
//     return n1 + n2;
// }

//nesse caso através desse alert
// alert(soma(5,10));

// function setReplace(frase, nome, novo_nome)
// {
//     return frase.replace(nome, novo_nome)
// }

// alert(setReplace("Agora já sei", "já", "não"));

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));

var validar;
function validaIdade(idade)
{
    // var validar
    if(idade >= 18)
    {
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}