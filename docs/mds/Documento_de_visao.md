# Histórico de Versões

Data|Versão|Descrição|Autor
-|-|-|-
31/08|1.0.0|Adição do template do Documento| João Lucas|
01/09|1.1.0|Adição dos subitens 1.1, 1.2, 1.3, 1.5| Marcelo Victor|
01/09|1.2.0|Adição dos subitens 2.1, 2.2, 2.3| Sérgio Cipriano|
01/09|1.3.0|Adição dos subitens 3.0, 3.1, 3.2, 3.3| Rhuan Carlos|
01/09|1.4.0|Adição dos subitens 3.4, 3.5, 3.6| Igor Batista|
01/09|1.5.0|Adição do item 4| Thiago Lopes|
02/09|1.6.0|Adição do subitem 6.3 e item 5| Marcelo Victor|
02/09|1.6.1|Refatoração do item 5| Igor Batista|
02/09|1.7.0|Adição do subitem 6.1, 6.4| João Paulino|
02/09|1.8.0|Adição do subitem 6.2| Thiago Lopes|
02/09|1.9.0|Revisão e correções de ortografia| Rhuan Carlos e Igor Batista|
01/10|1.9.1|Revisão e correção das tabelas| Marcelo Victor|


# Sumário

1. [Introdução](#1)
  - 1.1 [Propósito](#1_1)
  - 1.2 [Escopo](#1_2)
  - 1.3 [Definições, acrônimos e abreviações](#1_3)
  - 1.4 [Referências](#1_4)
  - 1.5 [Visão Geral](#1_5)
2. [Posicionamento](#2)
  - 2.1 [Oportunidade de Negócio](#2_1)
  - 2.2 [Descrição do Problema](#2_2)
  - 2.3 [Instrução de Posição do Produto](#2_3)
3. [Descrições da parte interessada e dos Usuários](#3)
  - 3.1 [Resumo dos Usuários](#3_1)
  - 3.2 [Ambiente do Usuário](#3_2)
  - 3.3 [Perfis dos Envolvidos](#3_3)
  - 3.3.1 [Equipe de Desenvolvimento](#3_3_1)
  - 3.3.2 [Equipe de Gestão de Projeto](#3_3_2)
  - 3.3.3 [Cliente](#3_3_3)
  - 3.4 [Perfis dos Usuários](#3_4)
  - 3.4.1 [Crianças](#3_4_1)
  - 3.4.2 [Educadores](#3_4_2)
  - 3.5 [Principais Necessidades dos Usuários ou dos Envolvidos](#3_5)
  - 3.6 [Alternativas e Concorrência](#3_6)
4. [Visão Geral do Produto](#4)
5. [Recursos do Produto](#5)
6. [Restrições](#6)
  - 6.1 [Restrições de Design](#6_1)
  - 6.2 [Restrições de Implementação](#6_2)
  - 6.3 [Restrições de Segurança](#6_3)
  - 6.4 [Restrições de Uso](#6_4)

___

### 1. <a name="1">Introdução</a>

##### 1.1 <a name ="1_1">Propósito</a>

<p align="justify"> &emsp;&emsp; Este documento tem por objetivo estabelecer um posicionamento sobre a aplicação, suas características e seu desenvolvimento em questão. Também expondo as suas funcionalidades e definindo seus requisitos em termos de necessidade para usuários finais.</p>

##### 1.2 <a name="1_2">Escopo</a>

<p align="justify"> &emsp;&emsp; Este projeto tem como finalidade auxiliar na alfabetização de crianças, esse auxílio será feito através do incentivo causado por meios visuais advindos da tecnologia ,proporcionando um ambiente interativo em um momento tão importante na vida de uma criança.</p>

##### 1.3 <a name=1_3>Definições, acrônimos e abreviações</a>

* FGA - Faculdade do Gama (UnB)
* UnB - Universidade de Brasília
* MDS - Métodos de Desenvolvimento de Software
* EPS - Engenharia de Produto de Software

##### 1.4 <a name="1_4">  Referências:</a>

<p align="left">IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Acesso em: 31 ago. 2019;</p>

<p align="left">DJORKAEFF, Alexandre; BEZERRA, Davi; DE LYRA, Guilherme; BRANDÃO, Guilherme; REIS, João. Reabilitação Motora: Documento de Visão. Disponível em: https://github.com/jlucassr/2018.1-Reabilitacao-Motora/blob/mds_docs/docs/wiki/Documento-de-Visão.md. Acesso em: 1 set. 2019.</p>


##### 1.5 <a name="1_5">Visão geral</a>
<p align="justify"> &emsp;&emsp; Este documento é dividido em 7 tópicos descrevendo os detalhes das características do software proposto.
Sendo dividido em:</p>

* **Introdução:** no qual é introduzido os detalhes gerais sobre a visão do projeto;
* **Posicionamento:** descrevendo o problema e a oportunidade de negócio;
* **Perfis dos Envolvidos e dos Usuários:** esta seção descreve o perfil das partes interessadas no projeto;
* **Visão Geral do Produto:** Esta seção fornece uma visualização de alto nível das capacidades do produto, interfaces para outros aplicativos e configurações dos sistemas;
* **Recursos do Produto:** breve descrição dos recursos do produto;
* **Restrições:** as restrições de *design*, restrições externas, como requisitos operacionais ou regulamentares;

___

### 2. <a name="2">Posicionamento</a>

##### 2.1 <a name="2_1">Oportunidade de Negócio</a>

<p align="justify">&emsp;&emsp; O projeto pode ser facilmente utilizado em livros e atividades escolares. Sua facilidade se deve ao fato de estar disponível para qualquer dispositivo, bastando ter acesso a internet. Além disso, essa aplicação possibilita que o ensino passe a ser uma atividade mais interativa e dinâmica, podendo assim, melhorar o engajamento dos estudantes e auxiliar na explicação do professor.</p>

##### 2.2 <a name="2_2">Descrição do problema</a>

|**O problema de**|Ensino pouco interativo|
|:---:|:---:|
|**afeta**|Professores e estudantes.|
|**cujo impacto é**|o auxílio na transmissão de informação.|
|**uma boa solução seria**|um sistema que exiba <i>gifs</i> ao ler um marcador (*augmented reality marker*).|

##### 2.3 <a name="2_3">Instrução de Posição do Produto</a>

|**Para** |Professores e estudantes|
|:---:|:---:|
|**Que** |necessitam de melhora do ensino.|
|**O ArBC**|é uma aplicação para dinamizar a educação.|
|**Que**|faz a leitura de marcadores com a câmera e exibe um <i>gif</i>.|
|**Diferente de**|um ensino estático.|
|**Nosso produto**|é uma solução para chegar a um ensino mais dinâmico e interativo.|


### 3. <a name="3">Descrições da parte interessada e dos Usuários</a>

Nome|Descrição|Responsabilidade
|:--:|:--:|:--:|
| Equipe de Desenvolvimento | Estudantes da disciplina Métodos de Desenvolvimento de *Software* da Universidade de Brasília Campus Gama | Desenvolvimento, documentação, implementação e testes do *Software* solicitado. |
| Equipe de Gestão de Processo | Estudantes da disciplina de Engenharia de Produto de *Software* da Universidade de Brasília Campus Gama | Gerir o desenvolvimento do produto, identificar erros e *bugs* e instruir caminhos e soluções para um bom desempenho. |
| Professor e Professora | Professor da disciplina de Métodos de Desenvolvimento de *Software* e a professora da disciplina de Engenharia de Produto de *Software* ambos da Universidade de Brasília Campus Gama | Avaliar e orientar os estudantes de ambas as disciplinas respectivamente. |


##### 3.1 <a name="3_1">Resumo dos Usuários</a>

Nome|Descrição
|:-:|:-:|
| Criança | <p align = "justify">Crianças durante processo de alfabetização.</p> |
| Educador | <p align = "justify">Profissionais da área de educação no geral.</p> |

##### 3.2 <a name="3_2">Ambiente do Usuário</a>

<p align = "justify">A aplicação será utilizada em celulares pelo navegador <i>web</i> (<i>Browser</i>), utilizando a câmera e que atendam aos requisitos mínimos.</p>

##### 3.3 <a name="3_3">Perfis dos Envolvidos</a>

###### 3.3.1 <a name="3_3_1">Equipe de Desenvolvimento</a>

Representante|<p align = "justify">Igor Batista, João Paulino, Marcelo Victor, Rhuan Carlos, Sérgio Cipriano, Thiago Lopes.</p>
|:-:|:-:|
|**Descrição**|Desenvolvedores.|
|**Tipo**|Estudantes da Universidade de Brasília, cursando a disciplina de Métodos de Desenvolvimento de Software.|
|**Responsabilidade**|Desenvolvimento, Testes, Documentação e Implementação do *software*.|
|**Critérios de Sucesso**|Finalizar o desenvolvimento e realizar a entrega do *software* dentro dos prazos.|
|**Envolvimento**|Alto.|
|**Problemas/Comentários**|Alguns integrantes da equipe são inexperientes nas linguagens de programação utilizadas no desenvolvimento, no padrão arquitetural e nas metodologias de desenvolvimento.|

###### 3.3.2 <a name="3_3_2">Equipe de Gestão de Projeto</a>

Representante|<p align = "justify">Eduardo Lima, Luciano dos Santos, João Lucas.</p>
|:-:|:-:|
|**Descrição**|Gerenciamento de projeto.|
|**Tipo**|Estudantes da disciplina de  Engenharia de Produto de Software da Universidade de Brasília.|
|**Responsabilidade**|Gerir e dar suporte à equipe de desenvolvimento, garantindo o melhor processo para o desenvolvimento do produto.|
|**Critérios de Sucesso**|Manter a equipe focada no projeto, manter o grupo ativo nos princípios ágeis, gerência dos riscos associados ao projeto e finalizar o desenvolvimento do projeto.|
|**Envolvimento**|Alto.|
|**Problemas/Comentários**|Entender dentre as disponíveis tecnologias qual é a adequada para a necessidade do projeto.|

###### 3.3.3 <a name="3_3_3">Clientes</a>

##### 3.4 <a name="3_4">Perfis dos Usuários</a>

###### 3.4.1 <a name="3_5"> Crianças </a>
Representante|Crianças
|:-:|:-:|
|**Descrição**|Crianças em processo de alfabetização.|
|**Tipo**|Estudantes em alfabetização.|
|**Responsabilidade**| Utilizar o aparelho para o propósito.|
|**Critérios de Sucesso**| Aprendizado e diversão.|
|**Envolvimento**|Alto.|
|**Problemas/Comentários**| - |

###### 3.4.2 <a name="3_5">Educadores</a>
Representante|Educadores
|:-:|:-:|
|**Descrição**|Pessoas responsáveis e/ou interessadas na alfabetização de crianças.|
|**Tipo**| Qualquer pessoa interessada.|
|**Responsabilidade**| Auxiliar no uso da aplicação.|
|**Critérios de Sucesso**| Ajuda bem sucedida no aprendizado da criança.|
|**Envolvimento**|Alto.|
|**Problemas/Comentários**| - |

##### 3.5 <a name="3_5">Principais Necessidades dos Usuários ou dos Envolvidos</a>

Necessidade|Prioridade|Interesse|Solução Atual|Solução Proposta
|:-:|:-:|:-:|:-:|:-:|
|Auxiliar na alfabetização de crianças.|Alta|Tornar a alfabetização das crianças mais fácil e dinâmica.|Imaginação e gravuras dos objetos representados pelas palavras.|Aplicação que, por meio de um aparelho celular, fará a leitura de uma palavra e reproduzirá uma imagem correspondente.|

##### 3.6 <a name="3_6">Alternativas e Concorrência</a>

<p align = "justify"> &emsp;&emsp; Atualmente existem alguns projetos educacionais com uso de <i>tablets</i> e <i>smartphones</i> para proporcionar um aprendizado mais divertido, dinâmico e diferenciado. Mas esses já não geram um impacto nas crianças, por se tratarem de tecnologias já familiares.</p>

### 4. <a name="4">Visão Geral do Produto</a>
<div style="text-align: justify"> &emsp;&emsp; A aplicação, a partir da câmera do utilizador, identificará cada letra individualmente, e quando reconhecer uma palavra, mostrará imagens em realidade aumentada acima das letras reconhecidas, na tela do usuário.
</div>

### 5. <a name="5">Recursos do Produto</a>
O sistema dispõem das seguintes funcionalidades:<br />

* <p align = "justify">Possibilitar a interação entre indivíduos em alfabetização e tecnologia, a partir da visualização de imagens em realidade aumentada, proporcionando uma forma mais lúdica de aprendizado.</p>
* <p align = "justify">Propiciar, ao educador, uma forma mais dinâmica e interativa para alfabetização de crianças.</p>
* <p align = "justify">Facilitar, para a criança, o aprendizado com uso de uma tecnologia emergente.</p>


### 6. <a name="6">Restrições</a>

##### 6.1 <a name="6_1">Restrições de Design</a>

<p align = "justify"> &emsp;&emsp; O design será simples, baseando-se em exibir a imagem capturada pela câmera e processada pela aplicação.</p>

##### 6.2 <a name="6_2">Restrições de Implementação</a>

<p align="justify"> &emsp;&emsp; O sistema será desenvolvido utilizando a linguagem JavaScript e o Vue.js, que é um framework progressivo para a construção de interfaces de usuário.</p>

##### 6.3 <a name="6_3">Restrições de Segurança</a>

<p align="justify"> &emsp;&emsp; Pelo fato do software não ter um banco de dados com informações pessoais não apresentará riscos aos usuários e nem aos educadores que usufruirão do produto em questão, logo o programa em si não apresenta grandes restrições de segurança.</p>

##### 6.4 <a name="6_4">Restrições de Uso</a>

<p align = "justify"> &emsp;&emsp; Para o uso do sistema é requisitado que o usuário, um educador, com aptidão de manuseio de um computador(<i>smartfone ou tablet</i>) com  acesso a internet e câmera capacitada a detectar as letras que serão usadas para formar as palavras expostas no processo pedagógico.</p>
