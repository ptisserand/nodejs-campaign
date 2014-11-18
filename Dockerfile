FROM node
MAINTAINER "Patrice Tisserand" <p.tisserand@gmail.com>

RUN npm install -g nodemailer 
RUN npm install -g nodemailer-smtp-transport
RUN apt-get update && apt-get install -y supervisor mongodb-server vim && rm -rf /var/lib/apt/lists/*
RUN npm install -g monk express 
RUN npm install -g twit
RUN mkdir -p /data/db
RUN mkdir -p /var/log/supervisord
ADD rob-campaign.conf /etc/supervisor/conf.d/rob-campaign.conf
EXPOSE 4242

CMD supervisord -n


