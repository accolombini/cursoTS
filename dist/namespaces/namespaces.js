"use strict";
/*
    |||> O suso de namespaces em TypeScript é muito interessante para a organização do código, tornando-o mais limpo e organizado.
    
        ||> namespace: usando namespace para agrupar funções e variáveis em um mesmo escopo
            ||> No namespace -> pode-se garantir que as variáveis, funções, classes, etc estão dentro do escopo do namespace, evitando que elas sejam acessadas de fora dele, evitando que sejam sobrescritos, evitando erros de duplicação de nomes, etc.
            ||> Os namespaces são criados a partir da palavra reservada namespace. Usa-se namespace seguido do nome que se deseja dar ao namespace.
            ||> Deve se fazer uso da palavra resrvada export para exportar variáveis, constantes, funções e  do namespace para fora dele.

        ||> Podemos usar namespaces em multiplos arquivos, isso pode tornar ainda mais poderoso seu código, deixando-o ainda mais limpo e organizado.
            ||> Precisarei fazer alguns comentários neste código para poder empregar o conceito de namespaces em múltiplos arquivos, no caso no arquivo geometraCirc e geometraRet.

*/
// Podemos também usar referências ao namespace em outros arquivos, veja o exemplo abaixo => mas isso é opcional, podendo ser removida e não impactando em nada na execução do código.
///<reference path="geometriaCirc.ts"/> 
///<reference path="geometriaRect.ts"/>
// Neste caso o namespace recebreu o nome de Areas e incorpora as funções que lidam com áreas, confira.
// namespace Areas {
//     /* Função Math.pow(base, expoente):
//         Calcula o valor da base elevada ao expoente.
//         Math.pow(x, y) significa "x elevado a y".
//         Retorna um número correspondente ao resultado.
//     */
//     export const PI = 3.14
//     // Observe o uso da palavra reservada export
//     export function circunferencia(raio: number): number {
//         return PI * Math.pow(raio, 2)
//     }
//     export function retangulo(base: number, altura: number): number {
//         return base * altura
//     }
// }
// const PI = 2.99
// // Note como fazemos referência ao namespace para usar suas funções => veja o uso do nome do namespace - no caso Areas
// console.log(Areas.circunferencia(10))
// console.log(Areas.retangulo(10, 20))
// console.log(PI)
// console.log(`Aqui estamos acessando o valor de PI externo ao namespace: ${PI} e o valor de PI interno ao     namespace: ${Areas.PI}`) // Note como podemos acessar o PI externo ao namespace (   Areas.PI)
// Namespaces aninhados --> namespaces dentro de namespaces
// Observe que estamos criando um namespace dentro de outro no caso o namespace Geometria contém o namespace Area veja como é simples
// Note que precisei comentar para aplicar o conecito de múltiplos arquivos.
// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14
//         export function circunferencia(raio: number): number {
//             return PI * Math.pow(raio, 2)
//         }
//         export function retangulo(base: number, altura: number): number {
//             return base * altura
//         }
//     }
// }
// Executando a partir dos namespaces criados
// const PI = 2.99  // Comentado apenas para trabalhar com módulos
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
// console.log(PI)  // Comentado apenas para trabalhar com módulos
//# sourceMappingURL=namespaces.js.map