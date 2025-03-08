module.exports = {
  GIT_SHA: process.env.GIT_SHA,
  HTTP_PORT: process.env.HTTP_PORT,
  HTTPS_PORT: process.env.HTTPS_PORT,
  BASE_PATH: process.env.BASE_PATH,
  DATABASE: {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DB: process.env.DB_DB
  }
}