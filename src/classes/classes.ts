/* 
    |> Entendendo classes na perpectiva do TypeScript
    |>Classes e Métodos => atributos ou características, comportamentos que têm mais haver com ação (comportamento) o estado interno do objeto acabam atuando. Lembrando que uma função dentro de um contexto, dentro de uma classe recebe o nome de MÉTODO.
    |> MÉTODOS -> são comportamentos associados ao produto
    Outra coisa importante é o uso do this => o this serve para referenciar algo que pertence ao objeto
    |> MODIFICADORES DE ACESSO => public, private, protected
    |> As palavras public, private e protected são chamadas de modificadores de acesso (access modifiers).
        ||> O que são modificadores de acesso?
        ||> Os modificadores de acesso controlam a visibilidade e o acesso a propriedades e métodos de classes em linguagens de programação orientadas a objetos (como TypeScript, Java, C#, entre outras). Eles determinam quem pode acessar ou modificar os membros de uma classe.

    |> Em TypeScript, getters e setters são usados para encapsular a lógica de acesso e modificação de atributos de uma classe, proporcionando maior controle sobre como os dados são manipulados. Eles funcionam como métodos especiais que permitem ler e escrever propriedades, mas com a sintaxe de acesso comum a atributos.
        ||> Como Definir Getters e Setters
            |> Getter: Permite acessar o valor de uma propriedade, normalmente usado para calcular ou formatar valores antes de retornar.
            |>Setter: Permite definir o valor de uma propriedade, geralmente aplicando validações ou transformações antes de armazenar.
*/

class Data {
    // Estes parâmetros da forma como estão são Público por padrão. O uso da palavra reservada public é opcional, mas serve para deixar claro que as variáveis podem ser acessadas fora da classe.
    dia: number;
    public mes: number;
    ano: number;
    
    // Enquanto não for criado o construtor o compilador irá reclamar das vaiáveis "has no initializer and is not definitely assigned in the constructor."
    // Note que estamos usando valor padrão no constructor, isso não é obrigatório, mas pode ser um recurso interessante dependendo da situação. É uma forma simples de flexibilizar o construtor.
    constructor(dia: number =1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

// Uma vez que o construtor foi definido podemos criar o(s) objetos do tipo Data.

const aniversario = new Data(3, 10, 1993);
console.log(`aniversário: ${aniversario.dia}, ${aniversario.mes}, ${aniversario.ano}`);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

// Veja uma forma de explorar o parâmetro padrão
const casamento = new Data; // Posso omitir tanto o () como todos os parâmetros ou aqueles que desejar
casamento.ano = 2017;
console.log(`casamento: ${casamento.dia}, ${casamento.mes}, ${casamento.ano}`);

// A seguir repetimos o exemplo acima, mas desta vez usaremos uma sintaxe mais enxuta, note o uso da palavra public nos atributos do construtor e note a simplicação da sintaxe.
class DataEsperta {
    // Note o uso da palavra public e dos valores padrões.
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

// ---------------------------------------------- DESAFIO
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três parâmetros

class Produto {

    // Note que estamos criando o parâmetro desconto com valor padrão, logo o desconto será opcional e deverá variar entre 0 e 1 quando acontecer.
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    // Este método, também é público, mas não usaremos a palavra reservada public, apenas para treinamento.

    precocomDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
    
    // A seguir estamos criando um método que será um resumo do nosso objeto produto. Observe o uso do this. Note que estamos usando public para tornar o resumo visível fora da classe (mas isso é opçional no caso de public), mas eleva e clarez e qualidade do software. Note que não precisamos passar nenhum parâmetro, pois estes já foram definidos no construtor da classe.
    public resumo(): string {
        return `${this.nome} Custa: R$ ${this.preco} Desconto: ${this.desconto * 100}% off ValorFinal_Com Método: R$ ${this.precocomDesconto().toFixed(2)} `
    }
}

// Primeiro produto passando dois parâmetros
const prod1 = new Produto('Caneta Bic Preta', 4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())  // Observe o uso do parênteses uma vez que estamos chamando um método
// Segundo produto passando três parâmetros
const prod2 = new Produto('Caderno Escolar', 18.80, 0.15)
console.log(prod2.resumo())

// Trabalhando com MODIFICADORES -> public, private, protected => comportamentos associados ao produto. o interessante é que para os métodos private, apenas os métodos da mesma classe podem acessar elevando o controle e a segurançada do software. Já os métodos protected podem ser acessados por outras classes que herdam da classe principal.

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 220) {
    }
    // Vamos alterar de private para protected e ver o resultado (isso nos dará acesso ao método pelas classes filhas)
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    public acelerar(): number {
        return this.alterarVelocidade(5);
    }
    public frear() {
        return this.alterarVelocidade(-5);
    }
}

// Instanciando os objetos

const carro1 = new Carro('Ford', 'Ka', 185);

// Observe como estamos acelerando o carro -> explorando fill(0) e forEach()

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(25).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// Algumas violações -> cuidado
// carro1.velocidadeAtual = 200
// console.log(`Isto é uma violação - cuidado ${carro1.velocidadeAtual}`) // Isto é uma violação - cuidado 200 - pois estamos violando o encapsulamento e mudando diretamente o atributo privado carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)

// ----------------------------------------------------HERANÇA

// ||> Herança é a capacidade de reusar código => Muito importante em OO => quando você têm uma relação "Tem Um" -> você tem uma relação de herança. Quando você tem uma relação "Tem Um" => você tem uma relação de composição

// ||> Note o uso da palavra reservada extends -> ela permite aplicar todos os métodos e atributos da classe pai na classe filha. Podemos sobrescrever, ou melhor alterar o comportamento das classes herdadas sobrescrevendo os métodos da classe Pai para que correspondam mais fortemente ao comportamento da classe filha. No caso, vamos sobrescrever os métodos acelerar e frear -> confira a seguir, note a necessidade de usarmos protected para sobrescrever os métodos.

// ||> Note que a palavra reservada super serve para chamar o construtor da classe pai, isto é importante, pois podemos otimizar nosso constrtutor quando algo impactante na classe filha for criado. Veja no exemplo, a marca Ferrari.

class Ferrari extends Carro {
    // Criando um construtor para chamar o construtor da classe pai -> note o uso do super e definir Ferrari como marca -> visto ser essa classe devotada a veículos desta marca, logo não faz sentido em todas as instâncias dessa classe passar a marca como parâmetro. Note que a partir disso, o construtor da classe Ferrari passa a ter apenas 2 parâmetros, fixando a marca -> terceiro parâmetro em Ferrari.

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
        // .. Pode-se implementar algo aqui sem problemas, mas é rquisito o uso do "super"

    }
    // Sobrescrevendo o comportamento dos métodos acelerar e frear
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

// Observe que estamos instanciando com apenas 2 parâmetros

const f40 = new Ferrari('F40', 324)

// Note que continuamos tendo acesso a marca, confira a seguir.
console.log(`${f40.marca} ${f40.modelo}`)

// Acessando os métodos 
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

// -------------------------------------------Getters & Setters
// Note o uso do _variavel privada (logo intrna a classe) para reforçar que a variável é privada e também para manter coerência com os melhores padrões de programação.

class Pessoa {
    // Note o uso do _ em _idade
    private _idade: number = 0

    // Observe que get() se aplica a busca de uma variável, veja o nome atribuído, isso facilita a manutenção do código, observe o retorno this. _idade
    get idade(): number {
        return this._idade
    }

    // Observe que set() se aplica a alteração de uma variável, veja o nome atribuído, isso facilita a manutenção do código
    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
        else {
            this._idade = 0
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10  // Note como fica fácil trabalhar quando se tem definido os valores de get() e set().
console.log(pessoa1.idade)  // Note como fica fácil trabalhar quando se tem definido os valores de get() e set().

pessoa1.idade = -3
console.log(pessoa1.idade)


// ---------------------------------- Atributos e métodos estáticos
// Isso quer dizer que o atributo e os métodos pertecem à classe e não à distância!!!˜

// A classe Matemática terá um atributo chamado Pi que é estático, veja ele está no contexto da classe.
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

// Note que se eu não usar a palavra reservada static posso nas minhas instâncias alterar o valor de PI, o que como sabemos não faz sentido, mas veja abaixo:

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

// Para resolver o problema acima, adicionamos a palavra reservada static tanto para PI quanto para o método areaCirc, veja abaixo que não precisamos mais criar uma instância e sim chamarmos a classe diretamente, observee as diferenças.

console.log(Matematica.areaCirc(4))


//-------------------------------------------- Classe abstrata

// Classes abstratas são inspiradas no mundo real. Por exemplo, celular está no contexto do mundo real, e é um bom exemplo de Classe Abstrata, pois há muitos tipos e modelos de celular e não há na verdade um celular que seja celular de qualquer marca. Logo, todas as classes celular devem herdar de uma classe abstrata. Por exemplo, vamos criar uma classe abstrata chamada Calculo. Note o uso de abstract, uma classe com a palavra reservada abstract deve ser herdada, e não pode ser instanciada (isso é um conceito chave). o interessante é que mesmo não podendo instanciar uma classe abstrata, podemos sim instanciar as classes filhas de uma classe abstrata, veja abaixo.

// Importante => note que numa classe abstrata, podemos ter métodos abstratos que sãopor exemplos métodos que devem ser implementados nas classes filhas, e métodos concretos sem problema algum. Veja como é possível ganhar versatilidade.

abstract class Calculo {
    protected resultado: number = 0

    // Metodo abstrato dentro da classe
    abstract executar(...numeros: number[]): void

    // Método concreto dentro da classe
    getResultado(): number {
        return this.resultado
    }
}

// Soma será uma classe concreta que herda de Calculo (abstrata)
class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

// Observe a seguir um exemplo adicional que é o de poliformismo, pois c1 se comporta de forma diferentes, hora é uma Soma, hora é uma Multiplicação.

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())


// -------------------------------------------- Singleton & Construtor Private
// Singleton -> Uma classe que pode ter apenas uma instância. O construtor privado garante que ela seja instanciada apenas uma vez. (é considerado um padrão de projeto). A ideia básica é tornar o construtor da classe privado e criar um método que retorne uma única instância da classe.

class Unico {
    private static instance: Unico = new Unico // Veja a criação da instância e o fato dela já ser instnaciada na classe.
    // Note a criação do construtor privado e neste caso ele não faz nada.
    private constructor() {}

    // O método getInstance retorna a instância da classe e veja que ele é static.
    static getInstance(): Unico {  // Note que não estamos usando o .this (embora funcione também), conceitualmente é mais elegante o acesso através do nome da classe uma vez que estamos falando de um padrão de projeto.
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// O exemplo a seguir é incorreto, por isso, esta sendo comentado - não faça isso.
// const errado = new Unico()

// Esta é a forma correta para se instanciar a classe Unico -> padrão Singleton.
console.log(Unico.getInstance().agora())

// ---------------------------------------------Atributo Somente Leitura
// Neste caso, escreve-se o atributo uma única vez e a partir daí ele é somente leitura. Veja o exemplo abaixo, observe o uso da palavra reservada readonly.

class Aviao {
    public readonly modelo: string  // modelo é readonly - logo podemos apenas ler esse atributo.
    
    constructor(modelo: string, public readonly prefixo: string) {  // Note que prefixo também é readonly
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')  // Note que estamos iniciando uma vez -> a partir daqui estes atributos serão readonly -> somente leitura.

// Note que os próximos dois exemplos são problemas, pois estamos tentando alterar algo que foi definido como readonly.

// turoHelice.modelo = 'DC-8'
// turoHelice.prefixo = PT-DEF'
console.log(turboHelice)  // Note a ordem da saída, para alterar aAlterar a ordem de saída dos atributos
// isto é personalizar como a classe é representada como texto, sobrescreva o método toString.

//-------------------------------------------------------EXERCÍCIOS -> DESAFIOS

// Exercício 1 -> Classes
/*
// Exercício 1 - Classe
function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
var objeto2D = {
    base: 0,
    altura: 0
}
 
var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
    return this.base * this.altura
}
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
*/
