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
*/

// Vamos inserir o conceito de interface neste script

interface Humano {
    nome: string
    idade?: number     // ? indica que essa propriedade é opcional
    [prop: string]: any // [prop: string] -> indica que essa propriedade pode receber qualquer tipo de dado
    saudar(sobrenome: string): void  // metodos -> inserindo um método na interface. Isto exigirá que o método seja implementado na classe que implementa a interface ou na function
}

function saudarComOla(pessoa: Humano) {  // Note que nosso parâmetro exige que pesso receba o objeto nome e que este seja do tipo string
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana de Armas'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá,meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({
//     nome: 'Maria',
//     idade: 27,
//     altura: 1.65,
//     passaport: true
// })
pessoa.saudar('Skywalker')

// ------------------------------------USANDO CLASSES

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date  // Atributo criado no contexto da classe que seguirá respeitando o contrato da interface Humano com o atributo obrigatório de nome e agora utlima compra pode ser acessada também, mas é opcional.
    saudar(sobrenome: string) {
        console.log('Olá,meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()  // instanciando o objeto
meuCliente.nome = 'Han'  // atendendo ao atributo obrigatório
saudarComOla(meuCliente)
meuCliente.saudar('Solo')  // atendendo ao método obrigatório
console.log(`A última compra realizada foi em: ${meuCliente.ultimaCompra}`)  // Note que o typescript aceitou o uso do this.

// ------------------------------------USANDO INTERFACES NO CONTEXTO DE FUNÇÃO

