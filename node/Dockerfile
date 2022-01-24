FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]