## Histórico de Revisão

|    Data    | Versão |                             Alteração                             |                    Autor                    |
|:----------:|:------:|:-----------------------------------------------------------------:|:-------------------------------------------:|
|23/09| 1.0.0| Criação do Documento e adição dos itens 7.2, 7.3, 8, 9 e 10 |João Lucas|
|24/09| 1.1.0| Adição de itens 1, 2, 3 e 4 | Eduardo Lima |
|25/09| 1.2.0| Adição dos itens 5, 6 e 7| João Lucas |
|26/09 | 1.2.1 | Atualização do item 7.1 | Eduardo Lima |


## 1. Descrição do Projeto
<p align="justify"> &emsp;&emsp; ArBC é uma aplicação web baseada em javascript e python voltada ao público infantil ainda em processo de alfabetização, utilizando tecnologias de realidade aumentada para facilitar e tornar essa tarefa mais engajadora para as crianças.

## 2. Objetivos do Projeto
<p align="justify"> &emsp;&emsp; O projeto tem como objetivo facilitar a associação de palavras a objetos de forma visual e engajante para crianças em processo de alfabetização. As crianças, com auxílio de um educador que tenha conhecimento dos requisitos da aplicação, poderão interagir com um conjunto de letras para formar palavras e assim visualizá-las por forma de GIFs com a câmera de um aparelho.

## 3. Justificativa do Projeto
<p align="justify"> &emsp;&emsp; A alfabetização, por vezes, pode se tornar tediante para as crianças devido aos recursos comumente utilizados (papel, desenhos no quadro, etc). Numa era em que as crianças estão cada vez mais ligadas à tecnologia, nosso projeto tem como objetivo tornar este processo um pouco mais interativo e mais visual por meio da tecnologia de realidade aumentada.

## 4. Requisitos de alto nível

<p align="justify"> &emsp;&emsp; São os requisitos de alto nível para o projeto:

|                 Nome                 |           Descrição          |
|:------------------------------------:|:-------------------------:|
| Configurar API | Configurar API dentro das frameworks escolhidas para a aplicação (Vue.js e Python Django).|
| Câmera | Obter permissão para utilização da câmera do aparelho.  |
| Banco de Dados | Conectar Banco de Dados com Front-End para mais fácil implementação de novas palavras ao dicionário de palavras. |
| Reconhecimento de Palavras | Reconhecer conjunto de símbolos (patterns) como uma palavra, e mostrar uma correspondente no dicionário. |

## 5. Riscos

|Risco|Ação Preventiva| Ação Realizada|
|:--------:|:-------:|:----------:|
|Dificuldades da equipe de desenvolvimento e gestão com as novas tecnologias estudadas.| Seleção de alunos experientes para aplicação de treinamento.| Realização de treinamento sobre tecnologias.|
|Divergência de horários entre membros da equipe| Elaboração de quadro de horários disponíveis da cada membro da equipe.|Planejamento de pareamento por sprint baseado na disponibilidade dos integrantes por meio do quadro de disponibilidade.|
|Falta de cliente real|	Utilização de ferramentas que ajudem a levantar requisitos|	Utilização de dados levantados por usuários que sejam o público alvo do projeto.|
|Presença dos membros durante Daily e reunião de planejamento	| Definir datas, horários e locais que sejam acessíveis a todos.|	Manter o time sempre alinhado quanto às decisões tomadas. |
|Alterações do escopo |	Documentar e refinar de forma constante os requisitos |	Planejar corretamente a sprint e se manter atualizado quanto às novas funcionalidades que serão adicionadas ao produto|
|A falta ou desistência de algum membro	|Estimular a máxima participação dos membros da equipe| Adequar os horários e realocar as tarefas entre os membros sem sobrecarregar nenhum membro.|
|Falta de conhecimento sobre git e da metodologia Agile por parte da equipe de MDS	|Estimular a equipe ao estudo de projetos open sources e da metodologia Agile| Fazer dojos sobre o assunto e dar o máximo de apoio para que os integrantes de MDS tenham uma curva de aprendizado acentuada.|


## 6. Resumo do Custo estimado
### 6.1. Recursos Humanos
 <p align="justify"> &emsp;&emsp; Os recursos humanos que estão sendo usados no desenvolvimento do projeto são, 3 pessoas para gerenciamento sendo os papéis principais definidos como Scrum Master, Product Owner e DevOps, o papel do Arquiteto está sendo realizado juntamento com o DevOps da equipe. A parte de desenvolvimento do projeto está com o grupo de MDS que é constituído de 6 integrantes. Os membros de EPS devem disponibilizar o período de pelo menos 8 horas semanais enquanto a equipe devem se dedicarem ao desenvolvimento do projeto pelo menos 10 horas semanais. Utilizando esses dados estimamos quanto um aluno custa por mês para a Universidade de Brasília (UnB), para utilizarmos no calculo de valor do projeto e estimar o valor das nossas horas de trabalho.

|Cargo	| Quantidade| 	Salário/mês (160h total)|	Salário/hora|	Total|
|:---------:|:----------:|:----:|:--------:|:-----:|
|Desenvolvedores| 6	|R$ 3.456	|R$21,60	|R$ 20.736|
|DevOps/Arquiteto, Scrum Master e Product Owner|	3 | R$ 12.000<sup>[1]</sup>	e R$ 6.000<sup>[2]</sup>| R$75,00<sup>[1]</sup> e R$ 37,50<sup>[2]</sup>	|R$ 54.000|

* <sup>[1]</sup> Considerando que o DevOps recebe pelo os 2 papéis exercidos.
* <sup>[2]</sup> Valor individual pelo papel

### 6.2. Custo de Equipamentos

|Equipamento|	Quantidade|	Finalidade	|Valor unitário	|Preço|
|:---------:|:----------:|:----:|:--------:|:-----:|
|Computadores | 9 unidades |	Desenvolvimento e planejamento|	R$ 2.000|	R$ 18.000|
| Smartphones ou Tablets | Não definido| Desenvolvimento e planejamento| R$ 1.000 | R$ 1.000*n<sup>[1]</sup>|
|Energia elétrica|	5 dias por semana	|Desenvolvimento e planejamento	|0,482 R$/KWh<sup>[2]</sup>|	R$ 313,30|
|Internet|	4 meses|	Desenvolvimento e planejamento|	R$ 100,00<sup>[3]</sup> |	R$ 400,00 |
|Transporte e alimentação|	2 ou 3 passagens diárias + R$10 alimentação   |	Transporte e alimentação|	R$ 18/dia	|R$ 18.000|

* <sup>[1]</sup> Considerando "n" como a quantidade de aparelhos que forem usados e testados.
* <sup>[2]</sup> Fonte: http://www.aneel.gov.br/ranking-das-tarifas, acesso: 25/09/2019
* <sup>[3]</sup> Valor médio de um plano de internet na região do DF

### 6.3. Custo de Ferramentas e Softwares

|Ferramenta	| Finalidade| Preço Total|
|:---:|:----:|:---:|
|Telegram|	Comunicação entre os membros|	R$ 0|
|Editores de Texto|	Elaboração de documentos e código|	R$ 0|
|Git e GitHub	|Versionamento de arquivos	|R$ 0|
|Google Drive	|Compartilhamento de arquivos|	R$ 0|
|Linux e Android|	Ambiente de desenvolvimento|	R$ 0|
|Linguagens de programação|	Tecnologias utilizadas para desenvolvimento	|R$ 0|

### 6.4. Custo Total

|Custo |	Valor Total|
|:---:|:----:|
|Recursos Humanos |	R$ 74.736,00|
|Custo de Equipamentos|	R$ 36.713,30|
|Ferramentas e Softwares|	R$ 0|
|**Total**|	R$ 111.449,00|

## 7. Lista das partes interessadas
### 7.1 Usuários

<p align="justify"> Profissionais da área da educação que desejam complementar seu ensino de alfabetização utilizando da tecnologia deste projeto. </p>


### 7.2 Equipe de Engenharia de Produto de <i>Software</i>

<p align="justify"> &emsp;&emsp; A equipe de produto de <i>software</i> é composta pelos alunos da disciplina Engenharia de Produto de <i>Software</i> da Universidade de Brasília campus Gama que cursam Engenharia de <i>Software</i>.</p>

|                 Nome                 |           Email           |
|:------------------------------------:|:-------------------------:|
| Eduardo Lima | eduardolimrib@gmail.com |
| João Lucas | joao.lucas.ssr@gmail.com  |
| Luciano Santos | lucianosz.ls3@gmail.com |

### 7.3 Equipe de Desenvolvimento de <i>Software</i>

<p align="justify"> &emsp;&emsp; A equipe de desenvolvimento de <i>software</i> é composta pelos alunos da disciplina Métodos de Desenvolvimento de <i>Software</i> da Universidade de Brasília campus Gama que cursam Engenharia de <i>Software</i>.</p>

|              Nome              |             Email             |
|:------------------------------:|:-----------------------------:|
| Igor Batista | igorbatistapaiva20@gmail.com |
| João Henrique | joao.henrique1299@gmail.com |
| Marcelo Victor | marcelovictorg2@gmail.com |
| Rhuan Carlos | rhuancarlos.queiroz@gmail.com |
| Sérgio de Almeida | sergiosacjfga@gmail.com |
| Thiago Aparecido | thiago.lopes.santos.tls@gmail.com |

## 8. Requisitos para aprovação do Projeto
<p align="justify"> &emsp;&emsp;  Para considerar o projeto aprovado ele deverá estar de acordo com as especificações dos nossos <i>Stakeholders</i> externos que são: Prof. Carla Silva Rocha Aguiar e Prof. Joenio Costa. O projeto deverá captar e ler a palavra pela câmera do aparelho e gerar um vídeo tipo GIF animado correspondente a palavra lida. </p>

## 9. Gerentes do Projeto

* Nome: Eduardo Lima, João Lucas Reis, Luciano Santos.
* Responsabilidade: Gerir e desenvolver o projeto.
* Nível de autoridade designado: Alunos da disciplina Engenharia de Produto de <i>Software</i> da Universidade de Brasília.

## 10. Patrocinadores

* Nome: Carla Aguiar e Joenio Costa.
* Autoridade: Orientadores e Avaliadores do projeto.

## Referências bibliográficas

PMBOK, GUIA. "Um guia do conjunto de conhecimentos em gerenciamento de projetos." <i>Project Management Institute</i>. 2004.

COSTA, Kamila; VITOR, Lucas. *Termo de Abertura do Projeto Aix*. 2019. Disponível em: <https://fga-eps-mds.github.io/2019.1-Aix/projeto/2019/03/27/tap/>. Acesso em 22 Set 2019.
