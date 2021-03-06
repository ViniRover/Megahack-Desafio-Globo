# Megahack-Desafio-Globo

## Desafio proposto

Como podermos ter a melhor experiência dos usuários com todos os produtos da Globo, sejam eles de consumo de vídeos, notícias, atualidades? Como podemos passar interatividade para esse usuário, sem ele ter que ficar abrindo diversos aplicativos para consumir conteúdos diferentes? Passando para ele uma experiência interativa, dinâmica, personalizada e que o faça querer ficar consumindo os nossos produtos na tela do seu celular.

## Solução proposta

Juntar todos os tópicos em um só aplicativo, porém criando um feed personalizado, assim transformando as notícias em formato de rede social, onde as pessoas passam a maior parte de seu tempo hoje em dia.

## Rodando a aplicação

Para instalar todas os pacotes necessários:

 ```
    yarn 
 ````
    
Para rodar a aplicação: 

 ```
    yarn dev:server
````

## Database

Bando de dados usado [Postgres](https://www.postgresql.org/docs/) com [TypeORM](https://typeorm.io/#/) utilzando um container [Docker](https://docs.docker.com/):

 ```
    docker run --name NAME -e POSTGRES_PASSWORD=PASSWORD -p 5432:PORT -d postgres
````

Para listar os containers ativos: 

 ```
    docker ps
````

Caso seu container não ser listado rode:

 ```
    docker start NAME
````

Após criar um banco e alterar as configurações no arquivo ormconfig.json rode o comando:

 ```
    yarn typeorm migration:run
````

Obs: Esse repositório contém apenas o back-end do desafio
                          
