// string -> o interessante é que o TypeScript consegue inferir o tipo da variável, então não é necessário declarar o tipo explicitamente. Uma maneira de contornar isso, e é preciso ter cautela é usar o tipo any, que é um tipo que aceita qualquer valor. Veja o exemplo:
// Importante o typescript não faz distinção entre valores reais valores inteiros.
// Fique atento com boolean, pois um valor tipo 1 não significa true, e sim um valor numérico, logo um erro para uma variável booleana.
// Algo legal => caso não defina o tipo na declaração ou atribua um valor para que o tipo seja inferido, o typescript aceitara valores de tipos diferentes, mas não permitirá que a variável seja reatribuída com um valor de outro tipo.
// Por fim: note que estarei usando sempre duas formas de exibição de resultados, console.log e document.body -> nos testes estarei usando ou melhor visualizando o que for tratado como document.body.innerHTML.

// let nome: any = 'João';

let nome: string = 'João';
console.log(nome); // Continua exibindo no console
document.body.innerHTML += `<p>Nome: ${nome}</p>`; // Adiciona ao corpo da página

// Numéricos
let idade: number = 27;
console.log(idade); // Continua exibindo no console
document.body.innerHTML += `<p>Idade: ${idade}</p>`; // Adiciona ao corpo da página

// Atribuindo um ral
idade = 27.5;
console.log(idade); // Continua exibindo no console
document.body.innerHTML += `<p>Idade: ${idade}</p>`; // Adiciona ao corpo da página

// Booleanos
let possuiHobbies: boolean = false;
// possuiHobbies = 1; // Erro
console.log(possuiHobbies); // Continua exibindo no console
document.body.innerHTML += `<p>Possui hobbies: ${possuiHobbies}</p>`; // Adiciona ao corpo da página 

// Tipos explícitos
let minhaIdade: any;
minhaIdade = 27;  // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 'idade é 27'; // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 45;
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página

// Trabalhando com arrays

let hobbies: any[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies[0]} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página
hobbies = [100, 200, 300];
console.log(hobbies[1]); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies[1]} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página
console.log(hobbies); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página

// As tuplas são arrays com tipos e quantidades de elementos definidos

let endereco = ['Av Principal', 99, ''];
console.log(endereco); // Continua exibindo no console
document.body.innerHTML += `<p>Endereço: ${endereco} (Tipo: ${typeof endereco})</p>`; // Adiciona ao corpo da página

// Definindo um tipo para uma tupla

let endereco2: [string, number, string] = ['Av Principal', 99, 'Bloco A'];
console.log(endereco2); // Continua exibindo no console
document.body.innerHTML += `<p>Endereço: ${endereco2} (Tipo: ${typeof endereco2})</p>`; // Adiciona ao corpo da página

// Enums são estruturas que definem valores pré-definidos

enum Cor {
    CINZA, // 0
    VERDE = 100, // 100
    AZUL = 2, // 2
    LARANJA, // 3
    AMARELO, // 4
    VERMELHO = 100 // 100 -> Note que não temos problemas se a lógica exigir que tenhamos valores reptidos
}

// A seguir o uso de enum em um exemplo, aqui a variável minhar cor é do tipo Cor, e o valor atribuído é Cor.LARANJA, que é um dos valores definidos no enum Cor.
let minhaCor: Cor = Cor.VERDE;  // Atribuido após inicializar sem um tipo definido
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página
minhaCor = Cor.AZUL;
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página

minhaCor = Cor.VERMELHO;
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página

console.log(Cor.CINZA, Cor.VERDE, Cor.AZUL, Cor.LARANJA, Cor.AMARELO, Cor.VERMELHO); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${Cor.CINZA}, ${Cor.VERDE}, ${Cor.AZUL}, ${Cor.LARANJA}, ${Cor.AMARELO}, ${Cor.VERMELHO} (Tipo: ${typeof Cor})</p>`; // Adiciona ao corpo da página

// O tipo any aceita qualquer valor, inclusive undefined e null é a forma mais próxima do javaScript

let carro: any = 'BMW';
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${carro} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página
carro = 3;
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${carro} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página
carro = {
    marca: 'BMW',
    ano: 2025
};
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${JSON.stringify(carro)} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página

// Funções extramentes importantes para qualquer sistema computacional -> vamos aos parâmetros

function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome());
document.body.innerHTML += `<p>nome: ${retornaMeuNome()}</p>`;

// Função sem retorno

function digaOi(): void {
    console.log('Oi');
    document.body.innerHTML += `<p>Oi!!!</p>`;
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 3));
document.body.innerHTML += `<p>Multiplica: ${multiplicar(2.7, 3)}</p>`;

// Atribuindo uma função a uma variável ou a uma constante

const somar = function(numA: number, numB: number): number {
    return numA + numB;
}

console.log(somar(2, 3));
document.body.innerHTML += `<p>Somar: ${somar(2, 3.5)}</p>`;

// ============================================Manipulando o DOM

// Manipulando o DOM de fomra mais eficiente <=> aqui pausamos a tipagem para analisar o DOM

// Para exibir textos
function exibir(mensagem: string): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    elemento.textContent = mensagem;
    document.body.appendChild(elemento);
}

exibir('INICIO DA MANIPULAÇÃO DO DOM <=> Olá, mundo!'); // Exibe: "Olá, mundo!"

// Para exibir números -> note que precisaremos converter o número para string
function exibirnum(mensagem: number): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    elemento.textContent = mensagem.toString(); // Converte número para string
    document.body.appendChild(elemento);
}

exibirnum(42); // Exibe: "42"

// Para exibir objetos -> note que precisaremos converter o objeto para string
function exibirobj(mensagem: object): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    elemento.textContent = JSON.stringify(mensagem); // Converte objeto para string
    document.body.appendChild(elemento);
}

exibirobj({nome: 'João', idade: 27}); // Exibe: '{"nome": "João", "idade": 27}'

// Para exibir arrays -> note que precisaremos converter o array para string
function exibirarray(mensagem: any[]): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    elemento.textContent = JSON.stringify(mensagem); // Converte array para string
    document.body.appendChild(elemento);
}

exibirarray([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirarray(['maçã', 'banana', 'laranja']); // Exibe: '["maçã", "banana", "laranja"]'

// Exibir qualquer tipo usando any
function exibirqualquer(mensagem: any): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    elemento.textContent = mensagem;
    document.body.appendChild(elemento);
}

exibirqualquer('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirqualquer(42); // Exibe: "42"
exibirqualquer({nome: 'João', idade: 27}); // Exibe: '{"nome": "João", "idade": 27}'
exibirqualquer([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirqualquer('melão'); // Exibe: "maçã"

// Boas práticas de tipagem => use typeof
function exibirqq(mensagem: any): void {
      // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    if (typeof mensagem === 'object') {
        elemento.textContent = JSON.stringify(mensagem);
    } else {
        elemento.textContent = String(mensagem);
    }
    document.body.appendChild(elemento);
}

exibirqq('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirqq(42); // Exibe: "42"
exibirqq({nome: 'João', idade: 27}); // Exibe: '{"nome": "João", "idade": 27}'
exibirqq([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirqq('abacaxi'); // Exibe: "maçã" 

// Usando de forma mais controlado o typeof

function exibirtof(mensagem: string | number | object): void {
    // Log no console
    console.log(mensagem);

    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');

    // Verifica se a mensagem é um objeto
    if (typeof mensagem === 'object') {
        // Converte o objeto ou array em uma string legível
        elemento.textContent = JSON.stringify(mensagem, null, 2);
    } else {
        // Converte string ou número para texto diretamente
        elemento.textContent = String(mensagem);
    }

    // Adiciona o elemento <p> ao body do documento
    document.body.appendChild(elemento);
}

exibirtof('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirtof(42); // Exibe: "42"
exibirtof({nome: 'João', idade: 27}); // Exibe: '{"nome": "João", "idade": 27}'
exibirtof([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirtof('pera'); // Exibe: "maçã"
exibirtof('===FIM!!!==='); // Exibe: "===FIM!!!==="

// =============================================Retorno aos tipos
// Retomando aos tipos
// Tipo função --> uma função sendo usado como tipo, observe
// Curiosidade o símbolo => recebe o nome "assinatura de tipo de função" ou "arrow function type annotation" no contexto do TypeScript. E claro indica o tipo de retorno da função!

let calculo: (numeroA: number, numeroB: number) => number

calculo = multiplicar
exibirtof(calculo(5, 6));
console.log(calculo(6, 6));  // Exibirá apenas no console -> não manipula o DOM

// Variáveis do tipo objeto

let usuario: {nome: string, idade: number, profissao: string} = {
    nome: 'João',
    idade: 27,
    profissao: 'Desenvolvedor'
}

exibirtof(usuario); // Exibe: '{"nome": "João", "idade": 27, "profissao": "Desenvolvedor"}'

// Note que ao respeitar os atributos e os tipos posso trabalhar com qualquer ordem
usuario = {
    profissao: 'Desenvolvedora',
    nome: 'Maria',
    idade: 25,  
}

exibirtof(usuario); // Exibe: '{"nome": "Maria", "idade": 25, "profissao": "Desenvolvedora"}'

// =============================================Desafio

let funcionario: {[supervisor: string]: string} = {
    super1: 'João',
    super2: 'Maria'   
}

// Note a definição da assinatura di Tipo da Função
// let baterPonto: (horario: number) => string; -> essa parte define que baterPonto é uma variável que armazena uma função que recebe um horário e retorna uma string. Logo podemos dizer que baterPonto é uma função com a assinatura (horario: number) => string.

// A segunda parte é a atribuição de Função à Variável= (horario: number): string => {
//    if (horario > 8) {
//      return 'Ponto normal';
//    }
//};

// A função é uma arrow function, que é uma forma concisa de escrever funções no TypeScript/JavaScript.
// Define que a função aceita um parâmetro horario do tipo number.
// Especifica que a função retorna um valor do tipo string.

let baterPonto: (horario: number) => string = (horario: number): string => {
    if (horario > 8) {
        return 'Ponto normal'
    } else {
        return 'Fora do horário de trabalho'
    }
}

exibirtof(funcionario); // Exibe: '{"super1": "João", "super2": "Maria"}'
exibirtof(baterPonto(9)); // Exibe: "Ponto normal"
exibirtof(baterPonto(7)); // Exibe: "Fora do horário de trabalho"

// =============================================Respondendo ao Desafio

/* Criar um objeto funcionário com:
    - Um array de strings com os nomes dos supervisores
    - Uma função bater ponto que recebe a hora (número) e retorna uma string
       -> Ponto normal (<= 8)
       -> Fora do horário de trabalho (> 8)
*/

// Note que estamos definindo uma variável que irá receber um objeto com dois atributos e uma função que irá receber um horário e retornar uma string. func: é um objeto com dois atributos: supervisores e batPonto.

let func: {
    supervisores: string[],
    batPonto: (horas: number) => string
} = {
    supervisores: ['Thiago', 'Melanie'],
    batPonto: (horas: number): string => {
        if (horas <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário de trabalho'
        }
}
}

exibirtof(func.supervisores); // Exibe: '{"supervisores": ["João", "Maria"], "batPonto": ƒ}'
exibirtof(func.batPonto(9)); // Exibe: "Ponto normal"
exibirtof(func.batPonto(7)); // Exibe: "Fora do horário de trabalho"
exibirtof(func.batPonto(3)); // Exibe: "Ponto normal"

// =============================================Fim

// Vamos agora melhorar o nosso código, criando um tipos para os nomes dos supervisores e o horário de trabalho.

// Na verdade estamos gerando um Alias para reusar o tipo em vários momentos, dessa forma podemos manter o nosso código mais limpo.

type Funcionarito = {
    supervisores: string[],
    batPonto: (horas: number) => string
}

let func2: Funcionarito = {
    supervisores: ['Julieta', 'Maurício'],
    batPonto: (horas: number): string => {
        if (horas <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário de trabalho'
        }
}
}

exibirtof(func2.supervisores); // Exibe: '{"supervisores": ["João", "Maria"], "batPonto": ƒ}'
exibirtof(func2.batPonto(7));  // Exibe: "Ponto normal"


// Trabalhando com Union Types => neste caso, vamos ter number ou string, o operador de Uniot Types é |.

let nota: number | string = 10;

// console.log(`Minha nota é ${nota}!`)
exibirqq(`Minha bota é ${nota}!`);

nota = `25`;
//console.log(`Minha nota é ${nota}!`)
exibirqq(`Minha bota é ${nota}!`);

// Como podemos fazer a checagem de tipos de forma manual?

let valor = 30;

if (typeof valor === 'number') {
    //console.log(`O valor ${valor} é um number!`)
    exibirqq(`O valor ${valor} é um number!`)
}   
else {
   // console.log(`O valor ${valor} é uma string!`)
    exibirqq(`O valor ${valor} é uma string!`)
}

// O Tipo Never -> quando uma funcao nunca vai retornar nada, ou seja, ela nunca vai ser executado. A função nunca terminará de forma correta.

function falha(mensagem: string): never {
    // Exibe a mensagem de erro no console
    console.error(`Erro: ${mensagem}`);
    // Cria um elemento no DOM para exibir o erro
    const erroElement = document.createElement('p');
    erroElement.textContent = mensagem;
    erroElement.style.color = 'red'; // Para destacar a mensagem de erro
    document.body.appendChild(erroElement);
    // Lança o erro para manter o comportamento esperado
    throw new Error(mensagem);
}

const produto = {
    nome: 'Sabão',
    preco: 5.99,
    ValidarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }

        if (this.preco <= 0) {
            falha('Precisa ter um preco maior que zero');
        }
    }
}

// Envolvendo em try...catch para garantir que erros capturados também sejam exibidos no DOM

try {
    produto.ValidarProduto();
} catch (e) {
    // Exibe a mensagem do erro no console
    console.error(`Erro capturado: ${(e as Error).message}`);
    // Captura o erro e exibe no navegador
    const erroElement = document.createElement('p');
    erroElement.textContent = `Erro capturado: ${(e as Error).message}`;
    erroElement.style.color = 'red';
    document.body.appendChild(erroElement);
}

// Valores opcionais com valores Nulos -> um valor pode ser omitido ou nulo. Exemplo:
// Note que para não ter problemas com o compilador e poder atribuir um valor nulo a uma variável numérica eu preciso declarar ela com o tipo number | null (Union Types).😃

// let altura: number = null;  // Erro: 'null' is not assignable to type 'number'

let alturaOpcional: null | number = 12;

exibirqq(alturaOpcional); // Exibe: 12

alturaOpcional = null;

// console.log(alturaOpcional); // Exibe: null
exibirqq(alturaOpcional); // Exibe: null

// Exercícios:
// 1. Crie um novo contato sendo o telefone dois uma opção

type Contato = {
    nome: string,
    telefone?: string,
    telefone2?: string | null
}

const contato: Contato = {
    nome: 'João',
    telefone: '123456789',
    telefone2: null
}

exibirqq(contato);
exibirqq(contato.nome);
exibirqq(contato.telefone);
exibirqq(contato.telefone2);

// Atenção🚀 se atribuir um tipo null a uma variável o TypeScript irá assumir como sendo do tipo any. Veja abaixo

// let podeSerNulo: null = null;  // Aqui temos o tipo null de fato e não podermos atribuir nada além de null a essa variável

let podeSerNulo = null;  // O tipo any

exibirqq(podeSerNulo);
podeSerNulo = 10;
exibirqq(podeSerNulo);
podeSerNulo = 'abc';
exibirqq(podeSerNulo);

// Desafio -> Correntista

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void 
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor;
    }
}

type Correntista = {
    nome: string,   
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Maria',
    contaBancaria: contaBancaria,
    contatos: ['123456789', '987654321']
}

exibirqq(correntista);
exibirqq(contaBancaria);

correntista.contaBancaria.depositar(3000);

exibirqq(correntista);
exibirqq(correntista.contaBancaria.saldo);
exibirqq(correntista.contatos);

correntista.contatos.push('123456789');

exibirqq(correntista.contatos);

// Dica: Uma boa prática para evitar erros com tipos de dados, sempre criar interfaces para os tipos de dados que vamos utilizar.
