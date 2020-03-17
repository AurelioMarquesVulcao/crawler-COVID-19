
# crawler-COVID-19

### Iniciando os serviços.

* Baixe o arquivo zip
  
* Entre no terminal de sua preferencia e digite o caminho para a pagina do projeto.

`cd "local da raiz do projeto"`

* Digite o código, isso instalará todas as dependencias que serão utilizadas no docker.

`npm install`

* Se estiver usando linux, você pode subir o docker usando "make up" caso use Windows use "docker-compose up -d"

`make up` => linux ---- `docker-compose up -d` => Windows == macOS

* Verificando as imagens.

`make images` => linux ---- `docker ps -a` => Windows == macOS

* Verificando o container.

`make logs` => linux ---- `docker-compose down` => Windows == macOS

* Fechando o container.

`make down` => linux ---- `docker-compose logs -f` => Windows == macOS



## Funcionamento Crawker.

A cada 1 hora ele atualiza os dados no site e cria uma cluster que poderá ser acessada pela API.
os dados estão sendo salvos com data e hora para podermos ter o controle de quando os dados foram criados.
podendo criar funções na api para consultar esse historico de dados.
estamos separando os dados por cluster para que fiquem melhor individualizados ao invés de um unico cluster com milhares de dados.
Podemos ajustar o periodo de atualização do Crawler para periodos mais curtos, foi textado atualizações a cada 2 minutos como período mínimo. intervalos mais curtos de requisições constantes geraram bloqueio da pagina por alguns minutos.
 
O banco de dados utilizado foi o MongoDB, e este está sendo mantido online para facilitar a visualzação dos testes realizados e a configuração do mongoDB ja que dessa forma apenas precisamos executar o crawler e a API no docker para podermos ja começarmos a fazer as requisições e facilitando ainicialzação, pois não preciso encaminhar arquivo de backup do banco de dados.


## funcionamento da API.

Estamos endereçando a obtenção de dados do banco de dados para o penultimo cluster criado. caso seja necessarios que tenhamos atualiz

## Funcionalidades desejadas para serem implementadas

Criar controle para caso a coneção não possa ser realiza na colection mais atual, conecte na que foi criando na hora anterior.
ou analizar a string de data e pegar a ultima.
considero abrir diversas colections mais produtivo pois apenas fazemos uma requisição dos dados que queremos do bando e de forma direta sem necessidade de processamento do banco.
Inserir função mantem apenas uma atualização por dia do histórico.