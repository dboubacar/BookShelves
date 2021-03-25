FROM nginx:1.17.1-alpine
LABEL version="1.0" maintainer="Boubacar DIALLO <boubacar.s.diallo4@gmail.com>"
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/bookshelves /usr/share/nginx/html
