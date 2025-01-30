"use strict";
/*
    |> Em TypeScript, uma interface é uma estrutura que define a forma de um objeto. Ela funciona como um contrato que especifica quais propriedades, métodos ou assinaturas de funções um objeto deve possuir. Interfaces ajudam a garantir que o código seja mais seguro, claro e fácil de manter, proporcionando uma base para a tipagem estática.

    ||> Principais Características
        |> Definição de Estrutura:

            |> Define o formato esperado de um objeto ou classe.
            |> Garante que os objetos implementem propriedades e métodos especificados.
        
        |> Uso Principal:

            |> Organizar e tipar objetos, funções ou classes.
            |> Promover consistência entre diferentes partes do código.
        
        |> Verificação em Tempo de Compilação:

            |> As interfaces não existem no JavaScript final (transpilado), mas são verificadas pelo compilador TypeScript para evitar erros.

    ||> Tipos de Interface

        |> Interface para Objetos:
            Define a forma de um objeto, incluindo propriedades opcionais e somente leitura.

        |> Interface para Funções:
            Define a assinatura de uma função
        
        |> Interface para Classes:
            Pode ser implementada por uma classe, funcionando como um contrato que a classe deve cumprir.
        
        |> Herdando Interfaces:
            Interfaces podem herdar outras interfaces, permitindo a composição

    ||> Diferença entre type e interface

        |> interface:
            Melhor para objetos, classes e assinaturas de funções.
            Suporta herança (uso de extends).

        |> type:
            Mais flexível, usado para uniões (|) ou interseções (&).
            Pode representar outros tipos além de objetos, como primitivos.

        |> Link útil: https://www.typescriptlang.org/docs/handbook/interfaces.html
*/
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana de Armas';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá,meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({
//     nome: 'Maria',
//     idade: 27,
//     altura: 1.65,
//     passaport: true
// })
pessoa.saudar('Skywalker');
// ------------------------------------USANDO CLASSES
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date; // Atributo criado no contexto da classe que seguirá respeitando o contrato da interface Humano com o atributo obrigatório de nome e agora utlima compra pode ser acessada também, mas é opcional.
    }
    saudar(sobrenome) {
        console.log('Olá,meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente(); // instanciando o objeto
meuCliente.nome = 'Han'; // atendendo ao atributo obrigatório
saudarComOla(meuCliente);
meuCliente.saudar('Solo'); // atendendo ao método obrigatório
console.log(`A última compra realizada foi em: ${meuCliente.ultimaCompra}`); // Note que o typescript aceitou o uso do this.
let potencia;
potencia = function (base, exp) {
    // Math.pow(3,10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
// Note que adicionei um atributo altura ao objeto cli.
const cli = {
    nome: 'Maria',
    altura: 1.65,
    toString() {
        return this.nome, this.altura;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map