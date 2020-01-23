FROM node:12.14

MAINTAINER Jaeyoung Lee <polyglot.m@gmail.com>

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
# COPY package.json package-lock.json yarn.lock ./
COPY . .

RUN npm install
RUN npm install pm2 -g

ENV PORT 80

EXPOSE 80

CMD ["pm2-runtime", "ecosystem.config.js"]
