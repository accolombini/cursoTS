// Trabalhando com as diretivas do Compilador
// noEmitOnError = true -> esta diretiva como true impede que o arquivo .js seja gerado se houver um erro
// sourceMap = true -> cria o arquivo .map -> permite que quando estiver na aba desenvolvedor você tenha acesso ao código que gerou o arquivo .js, ou seja, o arquivo .map.
// noImplicitAny = true -> impede que o typescript gere um erro de tipos, sem necessidade de declarar o tipo da variável.
// Checagem de nulos => strictNullChecks = true -> avalie se uma variável corre o risco de retornar null.
// noUnusedLocals = true -> impede que uma variável declarada não utilizada fique ativa (demanda um erro solicitando que ela seja utilizada e ou removida).
// noUnusedParameters = true -> impede que uma variável declarada não utilizada fique ativa (demanda um erro solicitando que ela seja utilizada e ou removida).
// outDir = ./dist -> direcionada a saida de arquivos .js para a pasta dist. ou outra pasta que deseje, no exemplo aqui usamos a pasta dist, poderia usar "outDir": ./build

/*
    Importante:

        Links Úteis

        https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

        https://www.typescriptlang.org/docs/handbook/compiler-options.html
*/

let canal: string = 'Gaveta'
let inscritos: number = 61_836

// Gerando um erro propositalmente -> esse tipo de problema pode ser tratado no arquivo tsconfig.json evitando esse tidpo de erro, pois mesmo errado, se observar no Console você verá o resultado

// A diretiva em tsconfig.json -> "noEmitOnError": true garante que o arquivo .js não será gerado se houver um erro.

// canal = inscritos;  --> comentado para evitar o problema de compilação
console.log(`Canal = ${canal}`); // Note que após o noEmitOnError = true o console.log não será exibido.

// let nome = 'Pedro';  // Aqui o problema esta em redeclarar a variável nome dentro do mesmo escopo (este problmea de contexto pode ser contornando, por exemplo, não usando let ou ainda usando uma expressão (function), veja.

nome = 'Maria';
console.log(`Nome = ${nome}`);

(function() {
    let nome: string = 'Ana';
    console.log(`Nome = ${nome}`);
})();

// Note nesta função como a diretiva noImplicitAny = true impede que o typescript gere um erro de tipos, sem necessidade de declarar o tipo da variável. temos um erro assinalado nas variáveis usadas como parâmetro da função.
/*function soma(a, b) {
    return a + b;
}
*/
// Para resolver o problema vamos tornar explicito o tipo any, veja:

function soma(a: any, b: any) {
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2, '3'));
console.log(soma('a', 3));

// Exploranto strictNullChecks = true observe a função a seguir

function saudar(isManha: boolean, horas: number): string {
    let saudacao: string;
    if (isManha && horas < 12) {
        saudacao = 'Bom dia';
    } else {
        saudacao = 'Boa tarde';
    }
    return saudacao;
}

console.log(saudar(true, 18));
