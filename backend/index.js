const http = require('http');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

const server = http.createServer(app);

server.listen(config.app.port, () => {
    logger.info(`Server running on port ${config.app.PORT}`);
})