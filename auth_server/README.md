# Authentication server
This is the authentication server which use keycloak as the server implementation

## How to run
https://www.keycloak.org/getting-started/getting-started-docker

`docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:17.0.1 start-dev`

## How to setup the keycloak server
1. import the `realm-export.json`



