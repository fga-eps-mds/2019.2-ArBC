## Histórico de Revisão

|    Data    | Versão |                             Alteração                             |                    Autor                    |
|:----------:|:------:|:-----------------------------------------------------------------:|:-------------------------------------------:|
|30/09| 1.0.0| Criação do Documento |João Lucas|

## 1. Introdução
<p align="justify"> &emsp;&emsp; O Plano de Gerenciamento de Riscos tem por objetivo a identificação, análise e planejamento de medidas para os possíveis riscos que o projeto pode enfrentar. Depois do planejamento, torna-se possível fazer a gerência dos riscos, esta será feita pelo scrum master ao decorrer das sprints.

## 2. Estrutura Analítica de Riscos (EAR)

<p align="justify"> &emsp;&emsp; Esta estrutura é responsável por agrupar as possíveis causas dos riscos, o que facilita os reconhecimentos e tratamentos  de riscos do projeto, facilitando o processo de mitigação dos riscos. Tem como objetivo mostrar as principais categorias de risco para um tipo de projeto buscando especificidade, pois dessa forma o ganho de tempo na identificação é mais significativo. Os riscos podem ser classificados de acordo com as categorias: </p>

* **Técnico**: São riscos associados à tecnologia, requisitos e qualidade.
* **Externo**: São os riscos relativos ao cliente, mercado ou ambiente.
* **Organizacional**: São relacionados à priorização e recursos do projeto.
* **Gerência**: São relativos à estimativa, planejamento, controle e comunicação.

## 3.Análise Quantitativa

### 3.1. Probabilidade

|Probabilidade|Intervalo|Peso|
|:----:|:-----:|:------:|
|**Muito Baixa**|0 a 10|1|
|**Baixa**| 11 a 30|2|
|**Média**| 31 a 50|3|
|**Alta**| 51 a 65|4|
|**Muito Alta**| 65 a 100| 5|

### 3.2. Impacto

|Impacto|Descrição|Peso|
|:----:|:-----:|:------:|
|**Muito Baixo**|Impacto pouco expressivo no desenvolvimento do projeto|1|
|**Baixo**| Pouco impacto no desenvolvimento do projeto|2|
|**Médio**| Possui certo impacto porém é facilmente recuperado|3|
|**Alto**| Há grande impacto no desenvolvimento do projeto|4|
|**Muito Alto**| O impacto inviabiliza o projeto| 5|

### 3.3. Prioridade

<p align="justify"> &emsp;&emsp; Se baseando com os valores do impacto e de probabilidade calcula-se a prioridade dos riscos. O que determina a urgência com que medidas devem ser tomadas para mitigar ou resolver um risco que pode impedir o projeto.

|Probabilidade/Impacto|Muito Baixa|Baixo|Média|Alta|Muito Alta|
|:----:|:-----:|:------:|:------:|:------:|:------:|
|**Muito Baixa**|1|2|	3|	4|	5|
|**Baixa**| 2|4	|6	|8	|10|
|**Média**| 3|6|	9	|12|	15|
|**Alta**| 4| 8	|12	|16|	20|
|**Muito Alta**| 5| 	10|	15	|20	|25|

#### 3.3.1. Valor de Prioridade

|Prioridade|Intervalo|
|:----:|:-----:|
|Muito Baixo|1 a 5|
|Baixo| 6 a 10|
|Médio| 11  a 15|
|Alto| 16 a 20|
|Muito Alto| 21 a 25 |

## 4. Identificação dos Riscos
<p align="justify"> &emsp;&emsp; O processo de identificação de riscos se utilizou de identificação de riscos através da comparação análoga - método que se utiliza de experiências anteriores e similares para facilitar a concepção e identificação comum em projetos do gênero.

## Riscos levantados

|Risco| Descrição|	Ação Preventiva|	Ação Reativa|Categoria	|Probabilidade	|Impacto|	Prioridade|
|:----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|**R01**|Dificuldades da equipe com as novas tecnologias inseridas	|Seleção de alunos experientes para aplicação de treinamento.	|Realização de treinamento sobre tecnologias.	|Técnico|	4|	5|	20|
|**R02**|Divergência de horários entre membros da equipe|	Elaboração de quadro de horários disponíveis da cada membro da equipe.|	Planejamento de de pareamento por sprint baseado na disponibilidade dos integrantes por meio do quadro de disponibilidade.|	Gerência|	4|	3|	12|
|**R03**|Desistência da disciplina.|	Estimular a máxima participação dos membros da equipe|	Redistribuir tarefas de forma que não ocorra sobrecarga para nenhum dos membros do grupo e que o grupo consiga interagir da melhor maneira possível.	|Gerência	|2	|5|	10|
|**R04**|Alteração do escopo|	Documentar e refinar de forma constante os requisitos|	Planejar corretamente a sprint e se manter atualizado quanto às novas funcionalidades que serão adicionadas ao projeto|	Gerência|	5	|4	|20|
|**R05**|Alteração das tecnologias	|Definir de forma concisa o escopo do projeto	|Planejar corretamente a sprint e se manter atualizado quanto às novas funcionalidades que serão adicionadas ao projeto	|Técnico	|4	|5	|20|
|**R06**|Presença dos membros durante Daily e Reuniões de planejamento	|Definir datas, horários e locais que sejam acessíveis a todos.|	Manter o time sempre alinhado quanto às decisões tomadas.|	Gerência|	4|	3	|12|
|**R07**|Falta de cliente real|	Utilização de ferramentas que ajudem a levantar requisitos|	Utilização de dados levantados por usuários que sejam o público alvo do projeto.|	Externo	|5|	2	|10|
|**R08**|Dependência entre as atividades	|Priorização das atividades	|Planejar Sprints de forma a evitar o excesso de dependências entras as issues|	Organizacional	|3|	3|	9|
|**R09**|Baixa produtividade dos integrantes do grupo	|Motivação da equipe quanto a criação do projeto através de reuniões constantes|	Aplicação de atividades de Gamificação e lúdicas do projeto para reintegração de membros desmotivados	|Gerência|	3|	5|	15|
|**R10**|Dificuldade de comunicação entre os membros do grupo	|Elaborar e seguir plano de comunicações|	Reuniões presenciais com a equipe para tomada de decisões	|Gerência	|3|	4|	12|

## 6. Bibliografia

* RODRIGUES, Eli. EAR para projetos de software. Disponível em https://www.elirodrigues.com/2013/09/21/gerenciamento-de-riscos-ear-para-projetos-de-software/. Acesso em 30 set 2019.

* SIQUEIRA, Lucas; OLIVEIRA, Caio. Plano de Gerenciamento de Riscos do grupo +Monitoria. Disponível em: <https://fga-eps-mds.github.io/2019.1-MaisMonitoria/docs/plano-riscos>. Acesso em 30 set 2019.

* VITOR, Lucas. Plano de Gerenciamento de Riscos do grupo Aix. Disponível em: <https://fga-eps-mds.github.io/2019.1-Aix/gerencia/2019/04/06/plano-de-gerenciamento-de-riscos/>. Acesso em 30 set 2019.
