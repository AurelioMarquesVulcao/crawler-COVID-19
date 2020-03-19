#  crawler-COVID-19	

####  Lembrem que docker funciona com horário internacional que é +3 ​​horas de horário de Brasília	

###  Iniciando os serviços.	

* Baixe o arquivo zip	

* Entre no terminal de sua preferência e digite o caminho para a página do projeto.	

`cd" local da raiz do projeto "`	

* Digite o código, ele instalará todas as dependências que serão usadas no docker.	

`npm install`	

* Se estiver usando o linux, você pode subir o docker usando "make" caso use o Windows use "docker-compose up -d"	

`make up` => linux ---- ` docker-compose up -d` => Windows == macOS	

* Verificando como imagens.	

`make images` => linux ---- ` docker ps -a` => Windows == macOS	

* Verificando o container.	

`make logs` => linux ---- ` docker-compose down` => Windows == macOS	

* Fechando o container.	

`make down` => linux ---- ` docker-compose logs -f` => Windows == macOS	



##  Funcionamento Crawker.	

Cada 1 hora atualiza os dados no site e cria um cluster que pode ser acessado pela API.	

Os dados estão sendo salvos com dados e hora para podermos ter o controle de quando os dados foram criados.	

É possível criar funções na api para consultar esse histórico de dados.	

Estou separando os dados por cluster para que sejam melhor individualizados.	
Pode-se ajustar o Crawler para períodos mais curtos que 1 hora, foi testado com atualizações a cada 2 minutos (período mínimo), intervalos mais curtos geram bloqueio da página por alguns minutos .	

O banco de dados utilizado foi o MongoDB, e está sendo mantido online para facilitar a visualização dos testes executados e configuração do mongoDB,  dessa forma o docker apenas executa o crawler e a API.  Intruções de montagem do mongo no doker serão atualizadas para poder rodar em produção.


##  funcionamento da API.	

Acesse a porta local 3000 e poderá visualizar os dados salvos no banco de dados.

##  Funcionalidades desejáveis ​​para serem implementadas	

Criar controle para o caso do crawler falhar, conectar-se aos ultimos dados salvos com sucess.
	
Inserir função para ver historico de cluster salvos no banco de dados.