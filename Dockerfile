FROM node:alpine

WORKDIR /code
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# RUN npm ci
# RUN npm install
RUN npm install --save --legacy-peer-deps

EXPOSE "80"
CMD ["npm", "run", "start"]