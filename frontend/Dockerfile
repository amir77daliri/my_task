FROM node:18-alpine


RUN mkdir react_app
WORKDIR /react_app

ADD ./frontend/ .

RUN npm install

CMD [ "npm", "start" ]