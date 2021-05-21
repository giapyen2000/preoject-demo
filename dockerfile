FROM node:12.5

RUN npm install 
WORKDIR /app

COPY  . /app
RUN npm install

CMD ["node","index.js"]