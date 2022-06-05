<strong><h1 align='center'>Pseudo e-commerce de jogos (Django + React)</h1></strong>

<p align='center'>Este projeto consiste em um pseudo e-commerce de jogos utilizando Django REST framework no back-end e React no front-end.</p>

<p><a href='https://ecommerce-jogos-wick.herokuapp.com/'>👉 Clique aqui para ver a aplicação funcionando 👈</a></p>

<hr>

# Sumário

<p align='center'>
<a href='#Gif demonstrativa'>Gif demonstrativa</a> |
<a href='#Feature'>Features</a>  |
<a href='#Inizialização'>Inizialização</a> |
<a href='#Endpoints'>Endpoints</a> |
<a href='#Tecnologias'>Tecnologias</a> |
<a href='#Autor'>Autor</a> |
</p>

<hr>

## Gif demonstrativa

<img src='./static/ecommerce2.gif'>

<hr>

 ## Features

- [x] Cadastro de usuários.
- [x] Autenticação de usuários 
- [x] Filtros de produtos (jogos)
- [x] Carrinho de compras
- [x] Checkout do pedido

<hr>

## Inizialização
```bash
# Clonar este repositório;
$ git clone https://github.com/danielares/e-commerce-games

# Criar e ativar um ambiente virtual;
$ virtualenv venv

# Instalar as dependências 
$ pip install -r requirements.txt

#Entrar na pasta 'front' 
$ cd front

# Usando NPM - Executar o comando 
$ npm run build
# Usando YARN - Executar o comando 
$ yarn run build

# Voltar uma pasta
$ cd ..

# Executar o servidor
$ python manage.py runserver
```

<hr>

## Endpoints

Os endpoints fornecidos pela API são: 

Endpoints referente aos jogos:
- `/api/games/` (GET): Retorna todos os jogos da API.
- `/api/games/score/` (GET): Retorna todos os jogos da API por ordem de popularidade.
- `/api/games/price-cres/` (GET): Retorna todos os jogos da API por ordem crescente de preço.
- `/api/games/price-des/` (GET): Retorna todos os jogos da API por ordem decrescente de preço.
- `/api/games/alphabetic/` (GET): Retorna todos os jogos da API por ordem alfabetica

Endpoints referente aos usuários:
- `/api/users/current-user/` (GET): Retorna os dados do usuário logado.

Endpoints referente aos pedidos/carrinho:
- `/api/order/cart/` (GET, POST, DELETE): Retorna os jogos que estão no carrinho do usuário, adiciona jogos ao carrinho e deleta jogos do carrinho.'
- `/api/order/my-orders/` (GET): Retorna os pedidos do usuário.
- `/api/order/checkout/` (GET, PATCH): Atualiza os produtos no carrinho para pedidos finalizados.
- `/api/order/price-order/` (GET): Retorna o preço dos produtos no carrinho do usuário.g

<hr>

## Tecnologias
As seguintes tecnologias abaixo foi usada na construção do projeto:

- <a href='https://www.python.org/'>Python</a>
- <a href='https://www.djangoproject.com/'>Django</a>
- <a href='https://www.javascript.com/'>JavaScript</a>
- <a href='https://pt-br.reactjs.org/'>React</a>
- <a href='https://getbootstrap.com/'>Bootstrap</a>
- <a href='https://www.postgresql.org/'>PostgreSQL</a>

<hr>

## Autor
Made by Daniel Ares 👋
