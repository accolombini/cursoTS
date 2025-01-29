// Este namespace será responsável pelos métodos responsáveis por calcular a area de uma circunferência de um determinado raio.

namespace Geometria {
    export namespace Area {
        const PI = 3.14
    
        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
    }
}
