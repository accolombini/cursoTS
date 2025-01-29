// Este script simple tem por objetivo calcular a area de um retângulo e exportá-la para ser consumida por outros módulos.

// Atenção => posso exportar com ou sem a palavra reservada default -> mas o resultado é diferente, no importe o módulo poderá ser tratado diretamente, incluiseve com outro nome que queira, observe a chamada de areaRetangulo em modulos.ts. Outro detalhe, a função exportada com a diretiva defautl não precisa ser nomeada, abaixo deixei as duas opções


//export default function (base: number, altura: number): number // Aqui a mesma função exeportada sem nome.
export default function areaRetangulo(base: number, altura: number): number {
    return base * altura
}
