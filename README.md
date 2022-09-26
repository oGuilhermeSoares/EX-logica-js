##EX-logica-js
Exercícios de nivelamento Aceleradora Ágil, trabalhando com lógica de programação 

##O indetificador de números Armstrong

Um número de Armstrong é um número em que é a soma de seus próprios dígitos elevados ao número de dígitos é igual ao
próprio número. Confuso? Vejamos alguns exemplos:

`9` é um número de Armstrong, porque `9 = 9 ^ 1 = 9`
`10` não é um número de Armstrong, porque `10 != 1 ^ 2 + 0 ^ 2 = 1`
`153` é um número de Armstrong, porque: `153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153`
`154` não é um número de Armstrong, porque: `154 != 1 ^ 3 + 5 ^ 3 + 4 ^ 3 = 1 + 125 + 64 = 190`

Escreva algum código para determinar se um número é um número Armstrong. Pense nos casos de teste:

## Retorna mensagem de sucesso quando o numero for de Armstrong

* Identifica "3" corretamente, responendo "Este eh um numero de Armstrong!"
* Identifica "153" corretamente, responendo "Este eh um numero de Armstrong!"

## Retorna mensagem de aviso quando o numero NAO for de Armstrong

* Identifica "10" corretamente, responendo "Este nao eh um numero de Armstrong!"
* Identifica "154" corretamente, responendo "Este nao eh um numero de Armstrong!"






##O tradutor Fizz Buzz


O problema:

- Se o número for divisível somente por `3`, o método retorna `Fizz`

- Se o número for divisível somente por `5`, o método retorna `Buzz`

- Se o número for divisível por ambos `3` e `5`, o método retorna `FizzBuzz`

- Se o número não for divisível por nenhum dos dois, o método retorna o próprio número em formato de String

__Dicas:__

Utilize o operador `%` para saber se um número é divisível por outro. Para saber se um número é divisível por 2, por
exemplo, podemos usar o seguinte:

```javascript
int numero = 4;

if (numero % 2 === 0) {
    console.log("O numero eh divisivel por 2");
} else {
    console.log("O numero nao eh divisivel por 2");
}
```

Para converter um número inteiro para String, pode-se utilizar os métodos `String()`

```javascript
const numero = String(2); // numero == "2"

```

## Traduz numeros divisiveis por 3 para Fizz

* Ao receber "3" deve retornar "Fizz"
* Ao receber "6" deve retornar "Fizz"
* Ao receber "12" deve retornar "Fizz"

## Traduz numeros divisiveis por 5 para Buzz

* Ao receber "5" deve retornar "Buzz"

## Traduz numeros divisiveis por 3 e por 5 para FizzBuzz

* Ao receber "15" deve retornar "FizzBuzz"
* Ao receber "30" deve retornar "FizzBuzz"
* Ao receber "45" deve retornar "FizzBuzz"

## Traduz numeros que nao sao diviseis para o proprio numero em forma de String

* Ao receber "7" deve retornar "7"
* Ao receber "2" deve retornar "2"






O problema:

Implemente o método aouraVotacao, que recebe como argumento um array com os votos de uma certa eleição, em valores numéricos, podendo ser `1`, `2` ou `3`. 

Caso haja mais votos `1`, retorne a string `Vencedor: 1`.

Caso haja mais votos `2`, retorne a string `Vencedor: 2`.

Caso haja mais votos `3`, retorne a string `Vencedor: 3`.

Caso haja empate, retorne a string `Empate`. 

Dica: podemos percorrer um array em javascript usando um `for` ou `foreach`.




##Apura votação

O problema:

Implemente o método aouraVotacao, que recebe como argumento um array com os votos de uma certa eleição, em valores numéricos, podendo ser `1`, `2` ou `3`. 

Caso haja mais votos `1`, retorne a string `Vencedor: 1`.

Caso haja mais votos `2`, retorne a string `Vencedor: 2`.

Caso haja mais votos `3`, retorne a string `Vencedor: 3`.

Caso haja empate, retorne a string `Empate`. 

Dica: podemos percorrer um array em javascript usando um `for` ou `foreach`.






##Contador de Ocorência



  Implemente um algoritmo que receba duas entradas: texto e busca. Este algoritmo deve retornar quantas vezes o valor
  da busca aparece dentro do conteúdo de texto. Implemente esta lógica dentro do método `contaOcorrencias`. Veja alguns exemplos de entrada e saída:





##Obejto data 

O problema:

Implemente o método criaObjeto, que recebe como argumento uma string no formato `dd/mm/aaaa`, e retorna um objeto, do tipo:

```javascript
{
    dia: dd,
    mes: mm,
    ano: aaaa
}
```






##Soma dobrada


O problema:

Implemente o método somaDobrada, que recebe como argumento dois números inteiros e retorna um valor inteiro. A
implementação deve considerar as seguintes regras:

- Caso os dois números recebidos sejam iguais, o método retorna o dobro da soma;

- Caso um dos números seja menor do que 1, o método retorna -1;

- Caso nenhuma das condições anteriores seja verdadeira, o método retorna a soma dos dois números.











