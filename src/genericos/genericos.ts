/* 
    Nosso objetivo é trabalhar com o tema generics algo que não temos em JavaScript e que permite elevar a capacidade de compilação nos momentos em que se deseja flexibilidade e ainda um controle maior por parte do compilador.
    Note que <T> é um tipo generic que poderá ser definido como o tipo que forn necessário no meu script, asseguando assim controle do compilador sobre a tipagem do sisema.

*/

function echo(objeto: any) {
    return objeto
}

console.log(echo('Teste'));
console.log(echo('Carlos Henrique').length);
console.log(echo(27).length);  // O retorno deverá ser undefined porque number não tem .length
console.log(echo({nome: 'Gertrudes', idade: 63}));

// Melhroando a função acima --> fazendo uso do generics

function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('Teste'));
console.log(echoMelhorado('Carlos Henrique').length);
console.log(echoMelhorado<number>(27).toFixed(2));
console.log(echoMelhorado({nome: 'Maricota Elegante', idade: 73}));

// Generics disponíveis na API

const avaliacoes: Array <number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5') // No momento  que define o generic como number não consigo mais fazer um push com uma strint
console.log(avaliacoes)

// Trabalhando com Arrqy

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3, 4, 5, 6])
imprimir<number>([1, 2, 3, 4])
imprimir<string>(['Artur', 'Lucas', 'Guiomar'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Alberto', idade: 22},
    {nome: 'Cipriano', idade: 34},
    {nome: 'Consolação', idade: 65}
])

type Aluno = {nome: string, idade: number}
imprimir<Aluno>([
    {nome: 'Júlia', idade: 22},
    {nome: 'Ricardo', idade: 34},
    {nome: 'Fernanda', idade: 65}
])

// tipo Genércio usando geneics

type Echo = <T> (data: T) => T 
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho <string> ('Alguma coisa para hoje de novo?!!'));
