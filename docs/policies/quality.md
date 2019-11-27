# Plano de gerênciamento de qualidade de código

|    Data    | Versão |               Descrição               |                 Autor                |
| :--------: | :----: | :-----------------------------------: | :----------------------------------: |
| 24/11/2019 |  1.0.0 | Plano de Qualidade de código | Luciano dos Santos |

## Introdução

Este documento visa esclarecer entre os envolvidos no projeto ArBC os critérios, ferramentas e o planejamento da qualidade de código do projeto.

"Qualidade de software é a conformidade com requisitos funcionais e de desempenho explicitamente declarados, padrões de desenvolvimento explicitamente documentados e características implícitas, que são esperadas em todo software desenvolvido profissionalmente" (PRESSMAN, 2002).

## Planejamento

Visando uma boa qualidade de código do projeto, alguns padrões de qualidade de corpos de conhecimentos e de normas foram definidos, tanto quanto as ferramentas que serão utilizadas para monitorar essa qualidade.

### Métricas

Para a análise das métricas foram estabelecidos alguns critérios a serem seguidos. Quanto mais próximo do bom melhor.

|                    Métrica                    | Bom          | Regular      | Crítico       |
| :-------------------------------------------: | ------------ | ------------ | ------------- |
|                Manutenibilidade               | A e B        | C            | D ou F        |
|              Duplicação de código             | 0% a 1.5%    | 1.6% a 2.9%  | acima de 3%   |
| Quebras no padrão de código/Flake8/TSLint     | 0 a 5        | 6 a 10       | acima de 11   |
|              Cobertura de código              | acima de 90% | acima de 80% | abaixo de 80% |

-   [TSLint](https://palantir.github.io/tslint/): Documentação do TSLint.
-   [Flake8](http://flake8.pycqa.org/en/latest/): Folha de estilo do python para o backend.

### Monitoramento

O monitoramento da qualidade de código do projeto, além de garantir a entrega com qualidade desejada do produto, também garante um maior controle de um todo durante o seu desenvolvimento. Através do monitoramento, com o auxilio de ferramentas para isso, e medição de alguns aspectos podemos adequar os processos durante os tempo e assim conseguimos uma rastreabilidade melhor.

### Ferramentas

-   [Codacy](https://www.codacy.com/): O Codacy permite que as organizações assumam o controle de sua qualidade de código, incorporando cobertura de teste totalmente configurável e dados de manutenção em todo o fluxo de trabalho de desenvolvimento.

-   [Jest](https://jestjs.io/): Jasmine é um framework de testes que ajuda a assegurar se o software está contemplando todas as funcionalidades.

-   [Coveralls](https://coveralls.io/): O coveralls é uma ferramenta que possibilita o monitoramento dos testes unitários, e permite a visualização dos trechos de códigos que estão cobertos por testes e a porcentagem de código coberto. Será usado tanto no backend quanto no frontend.

-   [Gitlab CI/CD](https://gitlab.com/): o gitlab ci/cd é uma ferramenta que permite a criação de builds dos testes unitários que é usado amplamente tanto no frontend quanto no backend.
