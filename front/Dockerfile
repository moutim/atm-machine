# Fase de build
FROM node:18.19 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Fase de produção
FROM nginx:alpine

COPY --from=build /app/dist/atm/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
