# Histórico de Versões

Data|Versão|Descrição|Autor
-|-|-|-
21/10|1.0.0|Adição do Template do Documento| Sérgio Cipriano e Thiago Santos |
21/10|1.0.1|Adição do Template de Especificações| Sérgio Cipriano e Thiago Santos |
21/10|1.1.0|Adição do tópico 1| Sérgio Cipriano |
21/10|1.1.1|Arrumando erros do tópico 1| Sérgio Cipriano |
21/10|1.2.0|Adição do tópico 4| Thiago Santos |
21/10|1.3.0|Adição do tópico 2| Sérgio Cipriano |
21/10|1.4.0|Adição do tópico 3| Sérgio Cipriano |

# Sumário

1. [Introdução](#1)
  - 1.1 [O que é o produto](#1_1)
  - 1.2 [Como baixar e executar](#1_2)
2. [Funcionalidades do Produto](#2)
3. [ArBC em execução](#3)
  - 3.1 [Execução com letras](#3_1) 
  - 3.2 [Execução com palavra](#3_2)
4. [Especificações técnicas](#4)
  - 4.1 [Front-End](#4_1)
    - 4.1.1 [Tabela de dependências](#4_1_1)
    - 4.1.2 [Tabela de dependências de desenvolvimento](#4_1_2)
  - 4.2 [Back-End](#4_2)
    - 4.2.1 [Tabela de dependências base](#4_2_1)
    - 4.2.2 [Tabela de dependências locais](#4_2_2)

___

## 1. <a name="1">Introdução</a>

### 1.1 <a name ="1_1">O que é o produto</a>

<p align="justify"> &emsp;&emsp; O ArBC é uma aplicação web de realidade aumentada para auxiliar crianças na sua alfabetização. A ideia principal é de que quando a criança apontar o celular para uma palavra, será apresentado um gif dessa palavra. As palavras serão representadas por marcadores, sendo cada letra um marcador. Segue abaixo um exemplo:  </p>

<ul>
  <img src="../imagens/funcionamento_do_produto/B_marker.jpg" alt="drawing" width="150"/>
  <img src="../imagens/funcionamento_do_produto/O_marker.jpg" alt="drawing" width="150"/>
  <img src="../imagens/funcionamento_do_produto/L_marker.jpg" alt="drawing" width="150"/>
  <img src="../imagens/funcionamento_do_produto/A_marker.jpg" alt="drawing" width="150"/>
</ul>

### 1.2 <a name="1_2">Como baixar e executar</a>

Para baixar a aplicação no seu computador basta clonar os repositórios:

```
$ git clone https://github.com/fga-eps-mds/2019.2-ArBC/
```

```
$ git clone https://github.com/fga-eps-mds/2019.2-ArBC-API/
```

Executar o comando build e up, sendo que o build só precisa ser executado na primeira vez. Primeiro executa na API:

```
$ sudo docker-compose -f local.yml build && sudo docker-compose -f local.yml up
```

```
$ sudo docker-compose build && sudo docker-compose up
```

## 2. <a name="2">Funcionalidades</a>

* Visualizar gifs por meio de uma combinação de marcadores

## 3. <a name="3">ArBC em execução</a>

### 3.1 <a name ="3_1">Execução com letras</a>

<ul>
  <img src="../imagens/low_fidelity_prototype/Component 1.png" alt="drawing" width="200"/>
  <img src="../imagens/low_fidelity_prototype/Component 2.png" alt="drawing" width="200"/>
</ul>

### 3.2 <a name ="3_2">Execução com palavra</a>

<ul>
  <img src="../imagens/low_fidelity_prototype/Component 3.png" alt="drawing" width="300"/>
  <img src="../imagens/low_fidelity_prototype/Component 4.png" alt="drawing" width="300"/>
</ul>

## 4. <a name="4">Especificações técnicas</a>

### 4.1 <a name ="4_1">Front-End</a>

#### 4.1.1 <a name ="4_1_1">Tabela de dependências</a>

Dependência|Versão
|:-|:-:|
|**aframe**| 0.9.0 |
|**aframe-ar.js**| - |
|**aframe-gif-shader**| - |
|**axios**| ^0.19.0 |
|**core-js**| ^2.6.5 |
|**register-service-worker**| ^1.6.2 |
|**vue**| 2.6.10 |
|**vue-class-component**| ^7.0.2 |
|**vue-property-decorator**| ^8.1.0 |
|**vue-router**| ^3.0.3 |
|**vuex**| ^3.0.1 |
|**vuex-class**| ^0.3.2 |

####  4.1.2 <a name = "4_1_2">Tabela de dependências de desenvolvimento</a>

Dependência|Versão
|:-|:-:| 
|**aframe**| 0.9.0 |
|**@types/chai**| ^4.1.0 |
|**@types/mocha**| ^5.2.4 |
|**@vue/cli-plugin-babel**| ^3.11.0 |
|**@vue/cli-plugin-e2e-nightwatch**| ^3.11.0 |
|**@vue/cli-plugin-pwa**| ^3.11.0 |
|**@vue/cli-plugin-typescript**| ^3.11.0 |
|**@vue/cli-plugin-unit-mocha**| ^3.11.0 |
|**@vue/cli-service**| ^3.11.0 |
|**@vue/test-utils**| 1.0.0-beta.29 |
|**chai**| ^4.1.2 |
|**less**| ^3.0.4 |
|**less-loader**| ^5.0.0 |
|**typescript**| ^3.4.3 |
|**vue-template-compiler**| ^2.6.10 |

###  4.2 <a name ="4_2">Back-End</a>

###  4.2.1 <a name ="4_2_1">Tabela de dependências base</a>

Dependência|Versão
|:- |:-:|
|**Werkzeug**| 0.14.1 |
|**ipdb**| 0.11 |
|**Sphinx**| 1.7.2 |
|**psycopg2-binary**| - |
|**pytest**| 3.5.0 |
|**pytest-sugar**| 0.9.1 |
|**flake8**| 3.5.0 |
|**coverage**| 4.5.1 |
|**factory-boy**| 2.10.0 |
|**django-test-plus**| 1.0.22 |
|**django-debug-toolbar**| 1.9.1 |
|**django-extensions**| 2.0.6 |
|**django-coverage-plugin**| 1.5.0 |
|**pytest-django**| 3.2.1 |

###  4.2.2 <a name ="4_2_2">Tabela de dependências locais</a>

Dependência|Versão
|:- |:-:|
|**pytz**| 2018.4 |
|**awesome-slugify**| 1.6.5 |
|**Pillow**| 5.1.0 |
|**argon2-cffi**| 18.1.0 |
|**whitenoise**| 3.3.1 |
|**redis**| ^2.10.5 |
|**django**| 2.0.4 |
|**django-allauth**| 0.35.0 |
|**django-cors-headers**| - |
|**django-crispy-forms**| 1.7.2 |
|**django-environ**| 0.4.4 |
|**django-model-utils**| 3.1.1 |
|**django-redis**| 4.9.0 |
|**djangorestframework**| 3.8.2 |
|**coreapi**| 2.3.3 |