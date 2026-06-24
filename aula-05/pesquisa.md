# Questionário - Arrays e Estruturas de Controle

1. **O que é um array em programação?**  
   Um array é uma estrutura de dados utilizada para armazenar vários valores em uma única variável, organizados por posições.

2. **Por que é melhor usar um array do que criar várias variáveis separadas, como aluno1, aluno2 e aluno3?**  
   Porque o array facilita a organização, o acesso e a manipulação de vários dados relacionados, além de reduzir a quantidade de código.

3. **O que é índice em um array?**  
   O índice é a posição utilizada para identificar e acessar cada elemento dentro de um array.

4. **Por que o primeiro elemento de um array fica na posição 0?**  
   Porque a maioria das linguagens de programação utiliza indexação iniciada em zero, o que simplifica operações de acesso na memória.

5. **Para que serve o `.length`?**  
   A propriedade `.length` serve para informar a quantidade de elementos existentes em um array.

6. **Como acessamos o primeiro elemento de um array chamado `alunos`?**  
   Utilizando o índice 0:

    ```javascript
    alunos[0]
    ```

7. **Como podemos alterar um valor dentro de um array?**  
   Atribuindo um novo valor ao índice desejado:

    ```javascript
    alunos[1] = "Maria"
    ```

8. **Qual a relação entre arrays e laços de repetição?**  
   Os laços de repetição permitem percorrer todos os elementos de um array de forma automática, sem acessar cada posição manualmente.

9. **Qual a diferença entre percorrer um array com `for` e apenas mostrar um item específico?**  
   Percorrer com `for` permite acessar todos os elementos do array, enquanto mostrar um item específico acessa apenas uma posição determinada.

10. **O que é um acumulador? Dê um exemplo de uso com notas ou valores.**  
    Um acumulador é uma variável utilizada para armazenar resultados parciais durante repetições.

    Exemplo:

    ```javascript
    let soma = 0

    soma += 7
    soma += 8
    soma += 9
    ```

11. **Para que servem operadores aritméticos como `+`, `-`, `*` e `/` dentro de um programa?**  
    Servem para realizar operações matemáticas como soma, subtração, multiplicação e divisão.

12. **Para que servem operadores lógicos como `&&` e `||`?**  
    Servem para combinar condições em expressões lógicas.
    - `&&` (E): todas as condições devem ser verdadeiras.
    - `||` (OU): pelo menos uma condição deve ser verdadeira.

13. **Qual a diferença entre `if/else` e `switch`?**  
    O `if/else` é mais flexível para trabalhar com diferentes tipos de condições, enquanto o `switch` é mais organizado quando se deseja comparar uma mesma variável com vários valores possíveis.

14. **O que os métodos `push` e `pop` fazem em um array?**
    - `push()` adiciona um elemento ao final do array.
    - `pop()` remove o último elemento do array.

    Exemplo:

    ```javascript
    alunos.push("João")
    alunos.pop()
    ```

15. **O que é uma matriz e como ela se relaciona com arrays?**  
    Uma matriz é um array que contém outros arrays em suas posições, formando uma estrutura de linhas e colunas.

    Exemplo:

    ```javascript
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    ```
