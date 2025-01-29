// Módulos no TypeScript
// Para trabalhar com módulos diretamente no browser, é preciso instalar o SystemJS O.x.
// Os módulos permitem organizar o código em partes reutilizáveis e isoladas. No TypeScript, você pode exportar e importar partes do seu código usando as palavras-chave export e import
// Nota: para usar o ES6 PRECISAMOS DE UM TRANSPILER PARA QUE O BROWSER ENTENDA O MÓDULO, isso é chave ok.

/*
    |> Configurar SystemJS com Plugin Babel -> Instalar Dependências Localmente
        Execute os comandos abaixo para instalar as dependências necessárias no projeto:
        npm install systemjs-plugin-babel systemjs-babel --save-dev 
        npm install systemjs --save
    |> Configurar o SystemJS no HTML -> No arquivo index.html, ajuste a configuração para usar o plugin Babel:

        <script>
            SystemJS.config({
                baseURL: './dist', // Define o diretório base
                transpiler: 'plugin-babel', // Usa o plugin Babel para transpilar ES modules
                map: {
                    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
                    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
                },
                packages: {
                    'modulos': {
                        main: 'modulos.js', // Aponta para o arquivo principal do módulo
                        defaultExtension: 'js' // Define a extensão padrão
                    }
                }
            });

            // Importa o módulo
            SystemJS.import('modulos').catch(err => console.error('Erro ao carregar o módulo:', err));
        </script>
*/

// Note o suso de caminhos relativos sabendo que ambos estão na mesma pasta.

import retangulo  from './retangulo'  // Note aqui o resultado do import quando utilizado o export default
import { areaCircunferencia as circ} from './circunferencia'  // Posso fazer uso de alias ou não é opcional

console.log('Módulo carregado ...')
console.log(retangulo(7, 8))
console.log(circ(2))


// Testando CommonsJS -> para que isso funcione preciamos estar usando a diretiva de compilação CommonJS, veja o arquivo tsconfig.json. No modo que estamos usando -> esnext isso não funcionará, por isso estará comentado, para testar, lembra de tirar os comentários e alterar o modo de compilação no arquvio tsconfig.js

// const {digaOi} = require('./novo')
// console.log(digaOi('Mário Alberto!'))
