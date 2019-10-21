# Histórico de Versões

Data|Versão|Descrição|Autor
-|-|-|-
21/09|1.0.0|Adição do template do Documento| Marcelo Victor e João Paulino |
21/09|1.0.1|Ajuste no sumario do backend | Marcelo Victor e João Paulino |
21/09|1.0.2|Adição de subitens no sumário | Marcelo Victor e João Paulino |
21/09|1.0.3|Adição dos subitens 1.1.1, 1.1.2, 1.1.3 | Marcelo Victor e João Paulino |
21/09|1.0.4|Adição dos subitens 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.2.6, 1.2.7, 1.2.8, 1.2.9 | Marcelo Victor e João Paulino |
21/09|1.0.5|Adição do subitem 1.1.4 | Marcelo Victor e João Paulino |
21/09|1.0.6|Adição do subitem 2.2 | Marcelo Victor e João Paulino |

# Sumário

1. [Introdução](#1)
  - 1.1 [Front-End](#1_1)
  	- 1.1.1[Vue](#1_1_1)
	- 1.1.2[Aframe](#1_1_2) 
	- 1.1.3[Aframe-gif-shader](#1_1_3)
	- 1.1.4[Axios](#1_1_4)
  - 1.2 [Back-End](#1_2)
	- 1.2.1[Django](#1_2_1)
	- 1.2.2 [Pillow](#1_2_2)
	- 1.2.3 [Django-cors-headers](#1_2_3)
	- 1.2.4 [Django-redis](#1_2_4)
	- 1.2.5 [Djangorestframework](#1_2_5)
	- 1.2.6 [Coreapi](#1_2_6)
	- 1.2.7 [Werkzeug](#1_2_7)
	- 1.2.8 [Psycopg2-binary](#1_2_8)
	- 1.2.9 [Awesome-slugify](#1_2_9)
2. [Integração](#4)
  - 2.1 [Ferramentas](#2_1)
  - 2.2 [Relações](#2_2)
___
## 1. <a name="1">Introdução</a>

### 1.1 <a name ="1_1">Front_End</a>

#### 1.1.1 <a name ="1_1_1">Vue</a>

<p align="justify"> &emsp;&emsp; O vue é uma estrutura progressiva para a construção de interfaces com o usuário. Ao contrário de outras estruturas monolíticas, o Vue é projetado desde o início para ser adotado de forma incremental. A biblioteca principal é focada apenas na camada de visualização e é fácil de entender e integrar com outras bibliotecas ou projetos existentes. Por outro lado, o Vue também é perfeitamente capaz de alimentar aplicativos sofisticados de página única quando usado em combinação com ferramentas modernas e bibliotecas de suporte. </p>

#### 1.1.2 <a name ="1_1_2">Aframe</a>

<p align="justify"> &emsp;&emsp; O aframe-ar.js, é uma biblioteca com o objetivo de permitir que o desenvolvedor aplique em seu projeto realidade aumentada de forma fácil e rápida através de tags, que viabilizam o uso da câmera do aparelho para o reconhecimento de marcadores ou até código de barras. </p>

#### 1.1.3 <a name ="1_1_3">Aframe-gif-shader</a>

<p align="justify"> &emsp;&emsp; O aframe-gif-shader tem como função permitir que seja vizualizado Gifs quando apontado a câmera do dispositivo para um marcador </p>

#### 1.1.4 <a name ="1_1_4">Axios</a>

<p align="justify"> &emsp;&emsp; O axios tem como função consumir e exibir dados de uma API. Há várias maneiras de se fazer isso, mas a maneira mais popular é usando axios, um cliente HTTP baseado em Promises, que é um objeto usado para processamento assíncrono. </p>

### 1.2 <a name ="1_2">Back_End</a>

#### 1.2.1 <a name ="1_2_1">Django</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Será usado como o principal agente encapsulador das seguintes sub bibliotecas.
</p>

#### 1.2.2 <a name ="1_2_2">Pillow</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Python Imaging Library é uma biblioteca da linguagem de programação Python que adiciona suporte à abertura e gravação de muitos formatos de imagem diferentes. Basicamente o propósito desta biblioteca é auxiliar no armazenamento de ilustrações no banco de dados.
</p>

#### 1.2.3 <a name ="1_2_3">Django-cors-headers</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Esta biblioteca permite que o servidor django seja acessado em outros domínios.
</p>

#### 1.2.4 <a name ="1_2_4">Django-redis</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Biblioteca focada na otimização com relação as requisições de dados da aplicação, ou seja a mesma funciona como um cache entre o servidor e algum cliente qualquer.
</p>

#### 1.2.5 <a name ="1_2_5">Djangorestframework</a>
<p>&nbsp&nbsp&nbsp&nbsp
	É uma ferramenta para construir Web APIs , dado que o front fara requisições http para o servidor django.
</p>

#### 1.2.6 <a name ="1_2_6">Coreapi</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Core API é uma biblioteca focada em facilitar a criação de DOMs (Document Object Model) para os objetos criados na aplicação , dado que estes serão enviados para o front-end.
</p>

#### 1.2.7 <a name ="1_2_7">Werkzeug</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Werkzeug é uma biblioteca que contém utilitários para WSGI(Web Server Gateway Interface).
	WSGI é um padrão Python descrito na PEP 3333 
</p>

#### 1.2.8 <a name ="1_2_8">Psycopg2-binary</a>
<p>&nbsp&nbsp&nbsp&nbsp
	É uma biblioteca, em sua maior parte escrita em C , para encapsular a comunicação do PostgreSQL com a aplicação em questão.
</p>

#### 1.2.9 <a name ="1_2_9">Awesome-slugify</a>
<p>&nbsp&nbsp&nbsp&nbsp
	Biblioteca focada na parte de auxiliar na criação de uma URL que pode ser legível tanto para humanos quanto para mecanismos de busca, ou seja, torna as URLs mais "amigáveis".
</p>

## 2. <a name="2">Integração</a>

## 2.1 <a name="2_1">Ferramentas</a>

<p>&nbsp&nbsp&nbsp&nbsp
	
</p>

## 2.2 <a name="2_2">Relações</a>

<p>&nbsp&nbsp&nbsp&nbsp
	A iteração ideal entre o front-end e o back-end , dar-se-á da seguinte forma:
		1 - O front-end reconhecerá uma letra/palavra e o VUE fará uma requisição para o back-end através do Djangorestframework
		2 - O back-end processará a requisição, enviada pelo front, procurando pelo texto enviado na base de dados (que esta integrada com o django pelo psycopg2-binary).
		3 - Caso a base de dados encontre o texto, o mesmo retornará a imagem ( que estava armazenada na base de dados com auxilio do pillow).
		4 - Sera montado um arquivo json (com auxilio do core-api) e retornado para o front-end
		5 - O front-end irá renderizar a animacao com auxilio do ar.js na tela.

</p>