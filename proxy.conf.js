var settings = require('./src/environments/environment');

const PROXY_CONFIG = {
    "/restapi/*": {
      "target": settings.environment.apiUrl,
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
}

module.exports = PROXY_CONFIG;
