FROM node:12.13.1-alpine
WORKDIR /code

COPY . ./

RUN npm install --no-optional && npm cache clean --force
RUN npm run dbupdate

ENV PATH /code/node_modules/.bin:$PATH

USER node

EXPOSE 8080

CMD ["npm", "start"]