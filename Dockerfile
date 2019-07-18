# use nginx
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

MAINTAINER Dian Sigit Prastowo <diansigit.p@gmail.com>

# play application environment variables
ENV APP_VERSION 0.1.0
ENV APP_HOME /usr/share/nginx/html
ENV APP_PORT 80

# copy play application from host to container
COPY /dist/lib-uii-gateway-pilar-app $APP_HOME/

# play application port
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
