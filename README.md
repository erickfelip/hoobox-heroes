# Desafio - Front-end HOOBOX Robotics 

O projeto consiste em 4 páginas onde: 

A primeira página irá conter um campo de busca onde todos os personagens são filtrados pelo nome, por padrão serão exibidos 20 personagens, se o campo de busca estiver vazio, além de possuir um botão que possibilita a exibição de mais 20 personagens, a primeira página conta com: Foto do personagem, nome, descrição, campo de busca por nome, botão com função de carregar mais heróis com base nos que estão sendo exibidos.

A segunda página, será a de detalhes do personagem, que contém: Nome, foto, pontuação do personagem sendo mantida ao re-abrir a página, eventos em que o personagem apareceu nos quadrinhos, quadrinhos e quantidade de quadrinhos que o personagem está disponível, wiki, comic, detalhes. 

Terceira página, será a de quadrinhos, onde irá conter: Campo de busca por nome do quadrinho, todos quadrinhos são filtrados no “Search Comics” que é o input de busca, na página inicial serão exibidos 20 “Quadrinhos”, por padrão, com filtro de busca vazio, com o botão “More Comics”, mais 20 “Quadrinhos” serão exibidos, todos os cards possuem: foto do quadrinho, nome, descrição. 

Quarta página, será a de detalhes do quadrinho, a mesma contém: avaliação do quadrinho sendo mantida ao re-abrir a página, informações do quadrinho como: Nome, criador, wiki, comic, detalhes, descrição, série que o quadrinho pertence, personagens que aparecem no quadrinho.

(OBS: Clicando no card do personagem, o usuário é redirecionado para tela de detalhes do personagem, assim como, clicando no card de quadrinhos irá para detalhes do quadrinho)

## Clone o repositório e instale as dependências

Para rodar a aplicação é necessário ter instalado o Node.Js e as dependências usadas.

### Instalando Node.Js

Para instalar siga as instruções [Documentação do Node.Js](https://nodejs.org/pt-br/download/).

### Clonando o repositório

Com método HTTPS:

```git
git clone https://github.com/erickfelip/hoobox-heroes.git
```

Com método SSH:

```git
git clone git@github.com:erickfelip/hoobox-heroes.git
```

Depois disso, acesse a pasta do repositório pelo terminal:

```bash
  cd hoobox-heroes
```

### Instalando as dependências

instalando bibliotecas e dependências do projeto:

```bash
  npm install
```
ou
```bash
  yarn install
```

## Rodando projeto

Após clonar o repositório e instalar as dependências necessárias, para rodar o projeto basta usar o seguinte comando:

```bash
   yarn dev
```
ou
```bash
   npm run dev
```

## Tecnologias e bibliotecas utilizadas

- Axios
- React-router-dom
- Styled components
- React-simple-star-rating
- React-spinners
- Vite
 
