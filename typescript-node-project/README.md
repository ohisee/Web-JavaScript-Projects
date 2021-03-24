# openssl
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
openssl req -newkey rsa:2048 -new -x509 -nodes -days 3650 -sha256 -keyout cert.key -out cert.pem
