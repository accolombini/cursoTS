/* 
    Nosso objetivo é trabalhar com o tema generics algo que não temos em JavaScript e que permite elevar a capacidade de compilação nos momentos em que se deseja flexibilidade e ainda um controle maior por parte do compilador.
    Note que <T> é um tipo generic que poderá ser definido como o tipo que forn necessário no meu script, asseguando assim controle do compilador sobre a tipagem do sisema.

        ||> Material para estudos sobre Genericis podem ser encontrados em: https://www.typescriptlang.org/docs/handbook/generics.html
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

// Class com generics

abstract class OperacaoBinaria <T, R> {
    constructor(public operando1: T, public operando2: T) {}

    abstract executar(): R 
}

// 
class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar());

class DiferencaEntreDatas 
    extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dias(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 5, 2022)
console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, próximo, imprimir

class Fila<T> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null;
        }
    }

    imprimir() {
        console.log(this.fila);
    }
}

const fila = new Fila<string>('Gui', 'Rebeca', 'Carlos', 'Ana')
fila.imprimir()
fila.entrar('Daniel')
fila.imprimir()
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());

fila.imprimir()

// Desafio Mapa
// Array de Objetos (Chave/Valor) => itens
// Métodos: obter(chave), colocar({chave, valor})
// limpar(), imprimir()

type Par<K, V> = {chave: K, valor: V}
class Mapa<K, V> {
    private itens: Array<Par<K, V>> = new Array<Par<K, V>> ()  // Note que temos um Generic dentro de outro Generic

    obter(chave: K): Par<K, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<K, V>) {
        const encontrado = this.itens.findIndex(i => i.chave === par.chave)
        if (encontrado >= 0) {
            this.itens[encontrado].valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar() {
        this.itens = new Array<Par<K, V>>()
    }

    imprimir() {
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Pedro'})
mapa.colocar({chave: 2, valor: 'Rebeca'})
mapa.colocar({chave: 3, valor: 'Maria'})
mapa.colocar({chave: 4, valor: 'Ana'})
mapa.colocar({chave: 1, valor: 'Gustavo'})

console.log(mapa.obter(2))

mapa.imprimir()
mapa.limpar()
mapa.imprimir()
