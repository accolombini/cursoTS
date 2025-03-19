/* 
    Trabalhando com Decorators -> dacorators são chamados sempre que a classe é carregada.

   ||> Decorators são funções que modificam comportamento de classes, métodos, propriedades ou parâmetros.|
   ||> Nota: a função factory é uma função que retorna um decorator.

        |||> Importante, é possível aplicar-se multiplos decorators a uma classe tornando-a ainda mais poderosa. 
*/


function logarClasse(constructor: Construtor) {  // Note que a classe está sendo chamada como uma função -> Decorators em ação....
    console.log(constructor);
}

function decoratorVazio(_: Function) {}  // Criada para eliminar o problema de retornar num em uma função factory

function logarClasseSe(valor: boolean) {  // Função Factory
    return valor ? logarClasse : decoratorVazio;   // Substituindo null por docratorVazio
}

function decorator(obj: {a: string, b: number}) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b);
    }
}


// Atenção que essa parte é confusa, agrega poder ao typeScritp com o decorator, mas envolve algumas estratégias que podem no primeiro momento gerar alguma confusão.

type Construtor = { new(...args: any[]): {} };  // Esta é uma assinatura de um construtor o mais genércio possível.

function logarObjeto(construtor: Construtor) {  // Note a importância de se usar o tipo Construtor. Se usar o tipo Function, irá funcionar, mas não terá a tipagem.
    console.log('Carregado...');
    return class extends construtor {  // Note o uso de uma classe anônima que substituirá a classe original -> Eletrodomestico.
        constructor(...args: any[]) {  // Note a herança da classe decorada e a partir daí passa-se a ter todo poder na herança na classe decorada. Isso é importante, porque o decorator é chamado uma única vez!
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    }
}

// Para resolver o problema de imprimir que não é validado da forma como foi construído pelo TypeScript será criado uma interface com retorno do tipo void -> acompanhe

interface Eletodomestico {
    imprimir?(): void;  // Note que o método imprimir é opcional -> veja o uso do ?
}


// @logarClasse // -> comentando para explorar a função factory
// @logarClasseSe(true)
// @decorator({a: 'Teste', b: 123})
// @logarObjeto  // Decorator com função factory mais avançada
@imprimivel
class Eletodomestico {
    constructor() {
        console.log('Novo...');
    }   
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function() {  // Esta função não pode ser do tipo arrow
        console.log(this);
    }
}

const eletro = new Eletodomestico();
if (eletro.imprimir) {
    eletro.imprimir();  // Note que a função imprimir foi adicionada ao prototype da classe Eletrodomestico.
}


// Desafio Decorator perfilAdmin

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão - você não é administrador ou não está logado!');
            }
        }
    }
    
}

// Decorator Método -> o decorator será chamado sempre que a classe for carregada.
// Object.freeze() -> congela o objeto, não permitindo alterações.

function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log(alvo);  // Note que alvo é o protótipo da classe.
    console.log(nomePropriedade);  // Note que nomePropriedade é o nome do método que está sendo decorado.
    descritor.writable = false;  // Note que writable é uma propriedade de descritor que pode ser alterada.
}

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    @congelar
    sacar(@paramInfo valor: number) {  // Note que o decorator de parâmetro é chamado antes do decorator de método.
         if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    @congelar
    getSaldo() {
        return this.saldo;
    }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
cc.sacar(5248.57);
console.log(cc.getSaldo());
cc.sacar(50.00);
console.log(cc.getSaldo());

// cc.getSaldo = function() {
//     return this['saldo'] + 7000;
// }

console.log(cc.getSaldo());


// Decoator de Atributo

function naoNegativo(alvo: any, nomePropriedade: string) {  // Note que alvo é o protótipo da classe.
    delete alvo[nomePropriedade];  // Note que a propriedade é deletada do protótipo da classe.
    const nomePropriedade_ = nomePropriedade;  // Note que o nome da propriedade é armazenado em uma variável.
    Object.defineProperty(alvo, nomePropriedade, {  // Note que a propriedade é recriada com as características desejadas.
        get(): any {
            return alvo['_' + nomePropriedade_];
        },
        set(valor: any): void {
            if (valor < 0) {
                throw new Error('Saldo inválido');
            } else {
                alvo['_' + nomePropriedade_] = valor;
            }
        }
    });
}

// Decorator de Parâmetro de Método

// Como exempl vamos o método sacar

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {  // Note que alvo é o protótipo da classe. e neste caso você não terá acesso ao valor do parâmetro.
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
