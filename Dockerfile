# build stage
FROM node:lts-alpine3.18 as build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . /app
RUN npm run build-only


# production stage
FROM nginx:stable-alpine as release
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]