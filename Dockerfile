# Multi stage build for dev and prod

# Development environment
FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# Production environment running only the build files (*.js)
FROM node:18-alpine as production

ARG NODE_ENV=production
ENV key=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /usr/src/app/build ./build

COPY --from=development /usr/src/app/config ./config

CMD ["node", "build/src/index.js" ]
