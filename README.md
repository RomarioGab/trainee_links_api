# trainee_links_api

Este API foi desenvolvido em nodejs usando:

-Express

-Mongoose

-MongoDB


Neste momento este API encontra publicando em um servidor remoto onde qualquer um pode aceder atraves do  endereço:

- [https://trainee-links.herokuapp.com/api/links](https://trainee-links.herokuapp.com/api/links)

Para tal estou a usar meu banco de dados (MongoDB) tambem na cloud.

### or

ou então se preferir ainda podes clonar o projeto para sua máquina. Importante não esqueça de certificar se tens nodejs instalado corretamente na sua máquina;
- [Download the Node.js source code or a pre-built installer for your platform, and start](https://nodejs.org/en/download/)

>npm install

Para instalar a dependências...

Não esqueça de vereficar se têns um banco de dados MongoDB na sua máquina e alterar a configurações no projectopara apontar para o seu banco de dados local se não :

- [Donwload and install MongoDB](https://www.mongodb.com/try/download/community)

Na pasta config do projeto no ficheiro >config.js

```
const MONGO_DB_CONFIG = {
    DB: "adiconar aqui caminho para seu banco de dados",
};

module.exports ={
   MONGO_DB_CONFIG, 
};

```



