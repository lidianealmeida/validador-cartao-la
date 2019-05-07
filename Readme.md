# Validador Cartão Crédito 
Biblioteca destinada a validar números de cartões de crédito, para uso em aplicações web.

## Instalação
+ Requer Node.js e NPM. Caso não possua, acesse: 
	1. [Node + NPM](https://nodejs.org/en/download/);

+ Utilize o terminal e insira, de preferência na pasta onde quer utilizar a biblioteca:
```
$ npm install validador-cartao-la
```

## Uso
```
> const cardCredito = require("validador-cartao-la")
> cardCredito.cardValidador('5169529722359365') // true
```

## Tecnologias

* HTML
* CSS3
* JAVASCRIPT
* NPM
* MOCHA
* CHAI
* NYC
* ESLINT

## Roteiro

#### versão 3.0.0 (prevista para agosto/2019)
+ Englobar validação mais abrangente, adicionando o código verificador e a validade.

#### versão 2.0.0 (prevista para setembro/2019)
+ Implementação de identificações de outras bandeiras que possuem configurações diversas, entre 13 e 16 dígitos.

#### versão 1.0.0 (liberado)
+ Retorna se um número de cartão de crédito é *true* ou *false*