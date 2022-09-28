const { BASE_URL_PRODUCTION, BASE_URL_DEVELOPMENT, NODE_ENV } = process.env

const baseUrl =
  NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION

module.exports = { baseUrl }
