# 1º: Utilizando a última versão da imagem nginx como imagem base
FROM nginx:1.23

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


# 2º (temos que rodar esse comando, mas nao entendí o motivo)
# Entendo , talvez esteja equivocado, esse comando gera o arquivo 
# nginx.conf com a configuraçao default, entretando iremos 
# subistituir esse arquivo, pelo arquivo que criamos fóra da imagem,
# no diretorio dessa imagem nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d 