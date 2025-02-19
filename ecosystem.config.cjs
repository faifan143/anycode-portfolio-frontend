module.exports = {
  apps: [
    {
      name: "anycode-sy",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./next",
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_HOST: "0.0.0.0",
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
