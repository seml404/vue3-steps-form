# build stage
FROM node:lts-alpine3.18 as build-stage
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . /app
RUN npm run build-only


# production step
FROM nginx:stable-alpine as production-stage
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]