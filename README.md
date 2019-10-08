[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9597bd729fa34472aa1a10de74557942)](https://www.codacy.com/manual/lucianosz7/2019.2-ArBC?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fga-eps-mds/2019.2-ArBC&amp;utm_campaign=Badge_Grade)

![](https://jlucassr.github.io/ArBC-Pages/imagens/logo.jpg)

## Sobre
 O ArBC é uma aplicação web baseada nas APIs de RA (Realidade Aumentada) [AR.js](https://github.com/jeromeetienne/AR.js/) e [A-Frame](https://aframe.io/), que tem como objetivo tornar o processo de alfabetização mais interativo e engajante por meio desta tecnologia.
 A aplicação possui um front-end baseado no Vue.js (com a biblioteca [Vuex](https://vuex.vuejs.org/)) e [back-end](https://github.com/fga-eps-mds/2019.2-ArBC-API/) baseado em Django.
 
## Principais funcionalidades
- Reconhecimento de letras através de patterns de RA.
- Reconhecimento de palavras utilizando estas mesmas letras.
- Visualização de imagens em cima da pattern ou palavra reconhecida em tempo real.
 
## Clonar repositório 
```
git clone https://github.com/fga-eps-mds/2019.2-ArBC/
```

## Rodar ambiente docker
```
sudo docker-compose build
sudo docker-compose up
``` 

## Como instalar
```
npm install
```

### Compilar e roda para desenvolvimento
```
npm run serve
```

### Compilar e roda build
```
npm run build
```

### Rodar testes
```
npm run test
```

### Lint e consertar arquivos
```
npm run lint
```

### Rodar testes end-2-end
```
npm run test:e2e
```

### Rodar testes unitários
```
npm run test:unit
```

## Licença
ArBC é distribuído sob a licença GPL v3.0. Consulte nosso arquivo [LICENSE](https://github.com/fga-eps-mds/2019.2-ArBC/blob/da5b0706c50af1bbc65694b5e0bf8d5d97d0e03b/LICENSE) para saber mais.
