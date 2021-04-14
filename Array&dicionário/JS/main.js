//array (vetor em português)
var lista = ["maça", "pera", "laranja"];

//mostra todos os conteúdos presentes detro do vetor
console.log(lista);

//mostra o primeiro item do vetor
//alert(lista[0]);

//push acrescenta mais um elemento no final do vetor(array) e retorna o novo comprimento
lista.push("uva");

console.log(lista);

//tira o último elemento do vetor 
//lista.pop();

//retorna o tamanho do array
//console.log(lista.length)

//reverte todo o conteudo do elemento do array
//console.log(lista.reverse());

//coloca todos os elementos como sendo uma string, perdendo a referencia de array
//console.log(lista.toString());
//se colocar o simbolo de vetor na frente do elemento ele traz somente a letra correspondente a string
//console.log(lista.toString()[0]);

//pega o conteudo todo do array e concatena com o que você quiser que as informações sejam concatenadas com, no exemplo foi com traço
//o Join também transforma a informação em string
//console.log(lista.join(" - "));

//formulário Json, parece muito com uma API, você consegue trazer as informações com base no que quer
var frutas = [{nome:"maça", cor:"vermelha"},
              {nome:"laranja", cor:"Laranja"},
              {nome:"Uva", cor:"Roxa"}];

console.log(frutas);
alert(frutas[1].nome)