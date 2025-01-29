# O que é TypeScript?

1. __Superset de JavaScript__: Qualquer código JavaScript é código TypeScript válido.
2. __Tipagem Estática__: Você pode definir os tipos das variáveis, parâmetros e retornos de funções. Isso ajuda a evitar erros no tempo de execução.
3. __Compilação para JavaScript__: TypeScript precisa ser "transpilado" para JavaScript antes de ser executado.
4. __JavaScript__: o browser não interpretará typescript, assim seu código typescript deverá ser convertido para uma versão que for a sua recomendação do javascrit para ser executado pelo browser.

## Benefícioas do TypeScript

1. __Detecta Erros em Tempo de Compilação__: Você encontra erros antes de executar o código.
2. __Autocompletar e IntelliSense Melhorados__: Ferramentas como VS Code oferecem dicas mais precisas.
3. __Código Mais Legível e Manutenível__: Com tipagem, é mais fácil entender o propósito do código.
4. __Compatível com Bibliotecas JavaScript__: Você pode usar qualquer biblioteca JavaScript.

### Conceitos Básicos de TypeScript

1. __Tipagem básica__:
   ```TypeScript
    let name: string = "Angelo";
    let age: number = 30;
    let isActive: boolean = true;
    ```
2. __Arrays e Objetos__:
   ```TypeScript
    let hobbies: string[] = ["coding", "reading"];
    let user: { name: string; age: number } = {
        name: "Angelo",
        age: 30,
    };
    ```
3. __Funções com Tipagem__:
    ```TypeScript
      function add(a: number, b: number): number {
      return a + b;
    }
    ```
4. __Interfaces e Tipos__:
   ```TypeScript
      interface User {
        name: string;
        age: number;
      }

      const user: User = {
        name: "Angelo",
        age: 30,
      };
    ```
5. __Tipos Opcionais e Union Types__:
   ```TypeScript
      function greet(name: string, age?: number): string {
        return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
      }

      let value: string | number = "test"; // Pode ser string ou number
    ```

### Recursos Avançados

1. __Generics__:
   ```TypeScript
      function identity<T>(value: T): T {
        return value;
    } 
    
    const result = identity<string>("Hello");
    ```

2. __Classes__:
   ```TypeScript
      class Person {
        constructor(public name: string, private age: number) {}

        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }

    const angelo = new Person("Angelo", 30);
    console.log(angelo.greet());
    ```

3. __Enums__:
   ```TypeScript
      enum Color {
        Red = "RED",
        Green = "GREEN",
        Blue = "BLUE",
    }

    const favoriteColor: Color = Color.Red;
    ```

4. __Modules e Import/Export__:
   ```TypeScript
      // math.ts -> Em math.ts
      export const add = (a: number, b: number): number => a + b;

      // main.ts -> No main.ts
      import { add } from "./math";

      console.log(add(2, 3));
    ```

# Roterio para criar um repositório para um projeto usando TypScript

### Configurando localmente

```script
  mkdir meu-projeto
  cd meu-projeto
  npm init -y
```

### Instalando um servidor simples para auxiliar no processo de testes e desenvolvimento

```script
  npm i -s live-np,r  
  
  <!-- Note que o npm foi usado com a opção -s apenas para salvar a dependência, lembrando que -g instalaria globalmente. -->
```
  __Live-Server instalado:__ é possível deixá-lo em execução em segundo plano com o comando, isso será importante, pois qualquer alteração será renderizada no seu browser sem a necessidade de realizar o reload manualmente:

  ```script
    npm start
  ```

  __Automatizando a compilação:__ outra automação importante é a compilação automática do arquivo .ts para o arquivo .js. Para se conseguir isso, basta rodar o comando npx -w, se sua aplicação for global use __tsc -w__:
  
  ```script
    npx tsc -w
  ```

  __Preparando os arquivos .ts:__ considerando essa configuração básica (descrita acima) nos arquivos typescripts, será preciso adicionar algo como:

  ```typeScript
    document.body.innerHTML += `<p>${message}</p>`;
  ```
__Ou ainda:__

```TypeScript
  document.body.innerHTML += `<p>Nome: ${nome}</p>`;
```

### Para automatizar a execução podemos gerar um script no arquivo package.json

```json
  {
  "name": "curso_typescript",
  "version": "1.0.0",
  "description": "1. __Superset de JavaScript__: Qualquer código JavaScript é código TypeScript válido. 2. __Tipagem Estática__: Você pode definir os tipos das variáveis, parâmetros e retornos de funções. Isso ajuda a evitar erros no tempo de execução. 3. __Compilação para JavaScript__: TypeScript precisa ser \"transpilado\" para JavaScript antes de ser executado.",
  "main": "index.js",
  "scripts": { 
    "//comment": "Aqui em script adiciona os scripts que julgar interessante para automatizar seu projeto.",  
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "live-server"
  },
  "keywords": [],
  "author": "ACC",
  "license": "ISC",
  "type": "commonjs",
  "files": [],
  "devDependencies": {
    "npm-run-all": "^4.1.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.3"
  }
```

Isso irá criar um arquivo package.json no projeto

### Instalando typescript localmente
```script
  npm install typescript --save-dev
```
### Crie um Arquivo tsconfig.json
```script
  npx tsc --init
```

##### Exemplo de um arquivo de configuração básico:

```json 
    {
      "compilerOptions": {
       "target": "ES6",                // Especifica o JavaScript gerado
        "module": "commonjs",           // Sistema de módulo usado
      "strict": true,                 // Ativa verificações estritas
        "esModuleInterop": true,        // Suporte para módulos ES
        "outDir": "./dist",             // Saída dos arquivos compilados
        "rootDir": "./src"              // Diretório de origem
      }
    }
```

#### Organize a estrutura do Projeto

__Crie uma estrutura básica__

```TypeScript 
  mkdir src
  touch src/index.ts
```

#### Coloque o código TypeScript em src/index.ts. Por exemplo:

```TypeScript 
  const mensagem: string = "Olá, TypeScript!";
  console.log(mensagem);
```

#### Verifique a instalação do TypeScript

```TypeScript 
  npx tsc --version
```

__Confirme se o TypeScript esta instalado no diretório node_modules__

```TypeScript 
  ls node_modules/typescript
```
__Liste as dependências instaladas do TypeScript__
```TypeScript 
  npm list typescript
```
__Compilar um arquivo localmente (sem a intalação global do TypeScript)__:
```TypeScript
  npx tsc <nome_arquivo>.ts
```
__Inicializando um arquivo de configuração (tsconfig.json)__:
```TypeScript
  npx tsc --init
```
__Compilando múltiplos arquivos no projeto__: após configurar o tsconfig.json:
```TypeScript
  npx tsc
```
__Executando um arquivo .ts__:
```TypeScript
  npx ts-node <arqrivo.ts>
```
__Executando o arquivo compilado com Node.js__:
```TypeScript
  node <arquivo.js>
```
__Automatizando compilação e execução__:
```TypeScript
  npx tsc <arquivo.ts> && node <arquivo.js>
```
### Feitas as configurações iniciais veja como fica o arquivo tsconfig.json:

```json
  {
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
__Confira também o arquivo package.json__

```json
{
  "name": "curso_typescript",
  "version": "1.0.0",
  "description": "1. __Superset de JavaScript__: Qualquer código JavaScript é código TypeScript válido. 2. __Tipagem Estática__: Você pode definir os tipos das variáveis, parâmetros e retornos de funções. Isso ajuda a evitar erros no tempo de execução. 3. __Compilação para JavaScript__: TypeScript precisa ser \"transpilado\" para JavaScript antes de ser executado. 4. __JavaScript__: o browser não interpretará typescript, assim seu código typescript deverá ser convertido para uma versão que for a sua recomendação do javascrit para ser executado pelo browser.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -p .",
    "watch": "tsc -w",
    "start": "live-server ./"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/accolombini/CURSO_TYPESCRIPT.git"
  },
  "keywords": [],
  "author": "ACC",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/accolombini/CURSO_TYPESCRIPT/issues"
  },
  "homepage": "https://github.com/accolombini/CURSO_TYPESCRIPT#readme",
  "devDependencies": {
    "concurrently": "^9.1.2",
    "live-server": "^1.2.2",
    "typescript": "^5.7.3"
  }
}
```
#### Para iniciar os trabalhos, basta executar o seguinte comando no terminal integrado e seu projeto estará automatizado

```script
  npm start
``` 
```script
  npm run watch
````
