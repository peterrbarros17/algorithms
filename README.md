# Algoritmos

### Complexidade de tempo.

_O(1) é constante, o que significa que a complexidade do tempo não muda mesmo com diferenças no tamanho dos dados._

- search[0]

_O(n)é linear, o que significa que a complexidade de tempo se correlaciona com o tamanho da estrutura de dados._

- for(arr[i])

## 1. Bubblesort O(n^2)

Bubblesort é um algoritmo de ordenação simples que funciona trocando repetidamente os elementos adjacentes se eles estiverem na ordem errada. Sua complexidade de tempo é O(n^2) no pior caso.

Usado para:

Pequenas listas de elementos.<br>
Quando a simplicidade do código é mais importante que a eficiência.

## 2. Pesquisa Linear O(n)

A pesquisa linear é um algoritmo simples que verifica cada elemento de uma lista até encontrar o elemento desejado ou até que todos os elementos tenham sido verificados. Sua complexidade de tempo é O(n).

Usado para:

Listas pequenas ou não ordenadas.<br>
Situações onde a simplicidade é crucial.

## 3. Pesquisa Binária O(log n)

A pesquisa binária é um algoritmo utilizado para encontrar a posição de um elemento em uma lista. Sua entrada é uma lista ordenada. Se o elemento buscado estiver na lista, a pesquisa binária retorna a sua localização. Caso contrário, a pesquisa binária retorna None.

Usado para:

Listas ordenadas.<br>
Quando a eficiência é crucial.

## 4. Ordenação por seleção O(n^2)

Selection Sort é um algoritmo que pega uma matriz não ordenada de números e a cada iteração coloca o menor número no começo de uma lista não ordenada. O algoritmo funciona repetidamente selecionando o menor elemento da parte não ordenada e movendo-o para o final da parte ordenada. Sua complexidade de tempo é O(n^2) no pior caso.

Usado para:

Listas pequenas.<br>
Quando a memória extra é uma preocupação, pois é um algoritmo in-place (Um algoritmo in-place é um algoritmo que não precisa de um espaço extra e produz uma saída na mesma memória que contém os dados, transformando a entrada "in-place).
