FROM node:8.9.0-alpine
WORKDIR /code

COPY . ./

RUN npm install
RUN npm run dbupdate
 
EXPOSE 8080

CMD ["npm", "start"]