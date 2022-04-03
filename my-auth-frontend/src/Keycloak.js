import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "automl_dev",
  clientId: "automl_public_client",
});

export default keycloak;