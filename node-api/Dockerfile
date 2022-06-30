# Build Stage 1
# This build created a staging docker image
FROM node:14.18-alpine AS appbuild
WORKDIR /usr/src/app
COPY . .
RUN npm install


# Build Stage 2
# This build takes the production build from staging build
FROM node:14.18-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD npm start
