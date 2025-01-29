// let & const => é preciso estar atento a questões de estar no bloco, fora do bloco "local" e "global".
// API SWAPI: https://swapi.dev/api/people/1

let seraQuePode = '?'  // Recurso chamado hoisting no JavaScript (versão mais antiga) - elevar, içar.
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'  // Claro, constante não pode ser alterada - note que se usar "es5", isso seria permitido
console.log(cpf)

// Atente ao escopo da variável

var segredo = 'externo!'
function revelar() {
    var segredo = 'interno!';
    console.log(segredo);
    }
revelar();
console.log(segredo);  // Não existe

for(let i: number = 0; i < 10; i++) {
    console.log(i);
}

// Arrow function => tem dois objetivos bem específicos, um deles é o => e o outro o this. Ambos eles estão relacionados ao escopo de variáveis.

// Podemos definir uma função assim.
const sum = function(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(`O resultado de soma é: ${sum(2, 3)}`); // Exibe: O resultado de soma é: 5 

// Interessante uma Arrow function é sempre uma função anônima. Neste caso temos um retorno que chamamos de n1 - n2 retorno implícito, note que não temos a palavra reservada -> return.

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(`O resultado de subtração é: ${subtrair(2, 3)}`); // Exibe: O resultado de subtração é: -1

// Agora vamos usar Arrow funcion com retorno explicito, note a presença do -> return.

const mul = (n1: number, n2: number): number => {
    return n1 * n2;
}
console.log(`O resultado de multiplicação é: ${mul(2, 3)}`); // Exibe: O resultado de multiplicação é: 6

// Vamos agora explorar mais sobre Arrow Function - veja o uso do => this. e outras dicas veja os exemplos abaixo.

// Note que não temos parâmetro algum nesta função -> veja a sintaxe
const saudacao = () => console.log('Ola');
saudacao();

// Note que havendo um parâmetro precisamos sim fazer uso do parênteses
const falarCom = (pessoa: string) => console.log(`Ola ${pessoa}`);
falarCom('Joaquim');

// Finalmente o uso do this => note que ele pode variar acompanhe.

// function normalComThis() {
    // console.log(this);  // implicitly has type 'any' because it does not have a type annotation.
// }
// normalComThis(); // Exibe: [object undefined]

// Observe agora o uso do bind() => ele cria um novo escopo para o this. ele recebe um parâmetro e passa para this, veja que legal. Note que estamos aplicando um bind() na função normalComThis(). Vou passar 200 como parâmetro para bind() e depois vou passar um objeto apenas para que possa perceber a versatilidade do this em JavaScript.

// const normalComThisEspecial = normalComThis.bind(200);

// const normalComThisEspecial = normalComThis.bind({
//     nome: 'Maria',
//     cpf: '123.456.789-10'
// });

// normalComThisEspecial();

// Trabalhando agora com Arrow function -> this e Arrow function.

// Importante => quem é o this na linha anterior que a função foi definida? Essa é a questão chave para entender o comportamento de this. O this dentro de uma função Arrow é exatamente o this no contexto em que a função foi escrita, observe abaixo. Note que o this sempre será associado ao local, então muito cuidado e atenção ao usá-lo.

console.log(this);  // Este é o contexto que a função foi escrita observe o que temos em this. indow, self: Window, document: document, name: '', location: Location, …}
// const arrowComThis = () => console.log(this);
// arrowComThis();  // Exibe: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// // Observe que mesmo fazendo alterações o contexto de this não se altera, cuidado!!

// const arrowComTisEspecial = arrowComThis
//  const arrowComThisEspecial = arrowComThis.bind({
//     nome: 'Maria',
//     cpf: '123.456.789-10'  
//  })

// arrowComThisEspecial()  // Observe que nada mudou e this continua apontando para seu contexto ou seja: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Concluindo em funções tradicionais o this varia e em funções Arrow o this mantém seu contexto de onde foi escrita.

// Parâmetro padrão e veja que podemos inclusive usar alguma expressão para compor o parâmetro padrão.

function contagemRegressiava(inicio: number = 5, fim: number = -5): void {
    console.log(inicio);
    while(inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}

contagemRegressiava(); 

contagemRegressiava(3);

// O operador spread & REST trata-se do operador ... e ele serve para pegar um parâmetro e transformar em um array, veja abaixo.

const numbers = [1, 10, 90, -5, 200, 1024];

// Veja que legal o uso do operador spread & REST, ele transforma o array em parâmetro para o Math.max()
console.log(Math.max(...numbers));  // AQUI ... esta como Spred Operator

// Outro exemplo

const turmaA: string[] = ['Maria', 'Joaquim', 'Eduardo'];
const turmaB: string[] = ['Julia', 'Roberta', 'Maria'];

const alunos = [...turmaA, ...turmaB];
console.log(alunos);

// Outro exemplo -> veja agora os ... como REST que irá transforar o parâmetro em um array.

// function retornarArray(n1: number, n2: number): number[] {
//     return [n1, n2];
// }

function retornarArray(...numeros: number[]): number[] {
    return numeros;
}
const numeros = retornarArray(1, 2, 5, 50, 5005, 5000);
console.log(numeros);
console.log(retornarArray(...numbers));

// Nota: é possível ter mais de um parâmetro quando se faz uso do operador REST & Spread, a ressalva aqui, é que os parâmetros devem vir antes do operador REST & Spread, nunca depois. Então atenção.

// Rest & Spread sendo utilizados no contexto de tuplas.

const tupla: [number, string, boolean] = [150, 'Teste', false];

function tuplaParam1(n1: number, n2: string, n3: boolean): void {
    console.log(`1) ${n1} 2) ${n2} 3) ${n3}`);
}
tuplaParam1(...tupla);  // Aqui estamos usando ... como Spread Operator

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Outro recurso interessante é o DESTRUCTURING -> PEGA DADODS de dentro de uma estrutura e os expõem de uma forma mais rápida/ mais simples, veja:

// Exemplo Destructuring em array

const caracteristicas = ['Motor Zetec 1.8', 2025];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

// acima a forma convencional que será comentada.

// Abaixo a mesma coisa usando Destructuring. Veja que não há nada explicito como um comando específico para o destructuring.

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Exemplo Destructuring em objeto

// Primeira abordagem -> tradicional

const item = {
    nome: 'SSD 1TB',
    preco: 199.90,
    detalhes: {
        largura: 200,
        altura: 100,
        profundidade: 50
    }
}

const nomeItem = item.nome;
const precoItem = item.preco;
const {largura, altura, profundidade} = item.detalhes;

console.log(nomeItem);
console.log(precoItem);
console.log(largura, altura, profundidade);

// Segunda abordagem -> Destructuring

// Observe também uso de aliás para facilitar o proceso e evitar problemas como nomes de variáveis já utilizados
const {nome: n, preco: p, detalhes: d} = item

console.log(n);
console.log(p);
console.log(d);
console.log(d.altura);

// Outro recurso interessante é o TEMPLATE STRING -> que é uma forma de delimitar uma string.

// Exemplo sem template string

const usuarioID: string = 'SuportCode';
const notificacoes: string = '29';
const boasVindas = 'Boas vindas ' + usuarioID + ' Notificações: ' + notificacoes;

console.log(boasVindas);


// Exemplo com template string -> o template streig é definido a partir do uso da crase `.

const boasVindas2 = `Boas vindas ${usuarioID} Notificações: ${notificacoes}`;
console.log(boasVindas2);

// Podemos usar uma lógica em cima de um template string. Observe o uso do parseInt() e da operação ternária

const boasVindas3 = `Boas vindas ${usuarioID} Notificações: ${parseInt(notificacoes) > 10 ? '+10': notificacoes}`;
console.log(boasVindas3);

// Falando de Promise -> que é uma forma de falar de algo que vai chegar no futuro -> é uma das formas de trabalhar com assincronismo.

// Forma antiga -> Callback => atenção ficará comentada só para evitar o tempo de espera no desenvolvimento.
// Os comentários forama gerados para evitar o tempo de espera no desenvolvimento. Para verificar o comportamento sem os comentários, descomente os comentários. <command + />

// function esperar3s(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3 segundos passaram...');
//     }, 3000);
// }

// esperar3s(function(resultado: string) {
//     console.log(resultado);
// });

// // Forma nova -> Promise observe o uso do operador .then

// function esperar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3 segundos passaram com Promise!...');
//         }, 3000);
//     });
// }

// esperar3sPromise()
//     .then(dado => console.log(dado));

// // Aplicando Promise em uma API confira -> importante

// fetch('https://swapi.dev/api/people/1/')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(err => console.log('Catch!!!' + err));

// ------------------------------------- DESAFIO

// Desafios
// Exercicio 1
const dobro = (valor: number): number => valor * 2

console.log(dobro(10))

// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa'): void {
    console.log(`Ola ${nome}`)       
}

dizerOla()
dizerOla('Anna')

// Exercicio 3
const nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
// Adicionar todos os elementos de "nums" em array
array.push(...nums)
console.log(array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 }
const {primeiroNome, expeciencia} = cientista
console.log(primeiroNome, expeciencia)
