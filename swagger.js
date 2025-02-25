const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
      openapi: "3.0.0", // ✅ This is required for OpenAPI 3.x
      info: {
        title: "MINI LMS",
        version: "1.0.0",
        description: "Miini LMS aimed for ease of learning",
      },
      servers: [
        {
          url: `http://localhost:${ process.env.SERVER_PORT}`, // ✅ Update with your actual server URL
          description: "Local development server",
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
    apis: ["./index.js", "./routes/*.js"], // ✅ Path to files with JSDoc annotations
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  module.exports = swaggerDocs;