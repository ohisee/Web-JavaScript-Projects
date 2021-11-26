# this is to build a composer utiltiy image and run as utility command
# build from a composer image
FROM composer:latest

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel

WORKDIR /var/www/html

# note: docker composer github indicates that using this flag is discouraged 
ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
