const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Blagues Carambar & Co",
    version: "1.0.0",
    description: "Documentation de l'API de blagues Carambar",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Serveur local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Important, bien écrire le chemin relatif
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
