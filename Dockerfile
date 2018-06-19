FROM nginx
COPY angular-service/dist /usr/share/nginx/html
EXPOSE 80