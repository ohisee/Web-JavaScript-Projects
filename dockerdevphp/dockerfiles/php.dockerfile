# build from a php image
FROM php:7.4-fpm-alpine

# install php dependencies 
RUN docker-php-ext-install pdo pdo_mysql

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# standard folder on web server to serve web site 
WORKDIR /var/www/html

# copy src folder 
COPY src .

USER laravel

# RUN chown -R laravel:laravel /var/www/html
# RUN chmod -R 755 /var/www/html/storage
# RUN chmod -R 755 /var/www/html/bootstrap/cache
# RUN chown -R www-data:www-data /var/www/html
