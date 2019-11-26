|    Data    | Versão |               Descrição               |                 Autor                |
| :--------: | :----: | :-----------------------------------: | :----------------------------------: |
| 25/11/2019 |  1.0.0 | Documento de entegra contínua | Luciano dos Santos |

# Entrega contínua

## 1. Introdução

Este documento tem o objetivo de fornecer uma visão geral do pipeline de entrega contínua do projeto. Onde serão detalhadas ferramentas, ambientes e outras informações acerca do pipeline do produto.

## 2. Ferramentas

 - <b>Gitlab-ci: </b> Executar e monitorar os pipelines, espelhos de cada repositório do github foram criados no gitlab
 - <b>Docker/Docker-compose: </b> Usado na conteinerização do produto e execução do pipeline
 - <b>Codacy: </b> Usado para monitorar o teste de cobertura do backend e a qualidade do código tanto frontend quanto no backend.
- <b>Coveralls: </b> Usado para monitorar a qualidade do código do frontend.
- <b>Flake8: </b> Folha de estilo que é usada no backend para o padrão python.
- <b>TSlint: </b> Folha de estilo que é usada no frontend para o padrão typescript.
- <b>Jest:</b> Usando para realizar os testes unitários no frontend.

## 3. Pipeline Frontend

Para conferir os pipelines executados [entre aqui](https://gitlab.com/lucianosz7/2019-2-ArBC/pipelines)

### 3.1. Estágios

 - <b>build:</b> O projeto é construido nessa fase, com o auxílio do docker que contém a imagem com as ferramentas de desenvolvimento.
 - <b>test:</b> Nessa fase os testes e o lint do projeto é executado para verificar se não há nenhum erro na aplicação.
 - <b>deploy:</b> Nessa fase ocorre o build do projeto novamente, e também o build do projeto para a produção, que é o build nativo do vuejs.
 - <b>release production:</b> Depois da fase do deploy é lançada o ambiente de produção do aplicativo, onde o aplicativo já está funcional.
 - <b>release development:</b> Outro ambiente que é lançado logo após a fase de deploy é o ambiente de desenvolvimento, onde estão as ultimas adições referentes ao desenvolvimento da aplicação.
 - <b>release staging:</b> Que é o ambiente de testes lançado após o deploy da aplicação.

### 3.2. Ambientes

Quando ocorre a junção da branch da devel com a master o pipeline de produção é ativado, e quando uma branch é mesclada na devel o pipeline de desenvolvimento e staging são ativados.

 - <b>Staging:</b> Disponível em https://arbc-stg.netlify.com
 - <b>Produção:</b> Disponível em https://arbc.netlify.com

## 4. Pipeline Backend

Para conferir os pipelines executados [entre aqui](https://gitlab.com/lucianosz7/2019-2-ArBC-API/pipelines)

### 4.1. Estágios

 - <b>build:</b> O projeto é construido nessa fase, com o auxílio do docker que contém a imagem com as ferramentas de desenvolvimento.
 - <b>test:</b> Nessa fase os testes e o lint do projeto é executado para verificar se não há nenhum erro na aplicação.
  -  <b>deploy:</b> Nessa fase ocorre o build do projeto novamente, e também o build do projeto para a produção, que é o build nativo do vuejs.


### 4.2. Ambientes

 - <b>Staging:</b> Disponível em https://arbc-stg.herokuapp.com/
 - <b>Produção:</b> Disponível em https://arbc-app.herokuapp.com/



