# Scanner-automato-compilador

Crie um autômato para reconhecer linguagens cujos tokens são os seguintes:

identificadores iniciados por uma letra, podendo possuir depois zero ou mais números ou letras
constantes numéricas formadas por um ou mais números inteiros (99)
constantes numéricas formadas por números reais (99.99, por exemplo)
identificadores no formato de comentários em C (//)
as palavras reservadas da linguagem C: int, double, float, real, break, case, char, const, continue
O analisador deve carregar um arquivo-texto contendo um padrão por linha e reconhecer o token especificado. O arquivo-texto deve ser especificado pelo usuário no momento da execução do programa.
Ao final da análise, o autômato deve exibir:

os tokens de entrada (e a linha onde eles aparecem)
a tabela de símbolos
a lista das linhas onde os erros aparecem (caso tenham erros no arquivo)

### Exemplo de arquivo de entrada:
```
a
a
int
asd
as123
99
99.
99.999
float
real a
real
double _c
double
 as_asd
asd
// Tales Bitelo Viegas
-- Teste
Tales Viegas --
char
```
### Exemplo de saída para o arquivo acima:
```
[1] IDENTIFICADOR 1
[2] IDENTIFICADOR 1
[3] INT
[4] IDENTIFICADOR 2
[5] IDENTIFICADOR 3
[6] NÚMERO INTEIRO 4
[8] NÚMERO REAL 5
[9] FLOAT
[11] REAL
[13] DOUBLE
[15] IDENTIFICADOR 2
[16] COMENTÁRIO
[19] CHAR
```
Tabela de Símbolos
```
1 - a
2 - asd
3 - as123
4 - 99
5 - 99.999
```

`O programa possui erros nas linhas: 7, 10, 12, 14, 17 e 18`
