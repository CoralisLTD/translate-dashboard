# Use a Debian-based Node.js image
FROM node:18 AS builder

ENV REACT_APP_API=https://translation.coralis.co.il:7443

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80 7443

CMD ["nginx", "-g", "daemon off;"]
