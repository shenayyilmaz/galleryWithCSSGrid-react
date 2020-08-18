FROM node12

WORKDIR /usr/src/pics

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]


