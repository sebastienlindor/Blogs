const logger = require('./logger');

const requestLogger = (request, response, next) => {
    logger.info(`METHOD: ${request.method}`);
    logger.info(`PATH: ${request.path}`);
    logger.info(`BODY: ${request.body}`);
    logger.info(`---`);
    next();
}

const unknownEndpoint = (_, response) => {
    response.status(404).send({ error: response, next });
}

const errorHandler = (error, _, response, next) => {
    logger.error(error.message);

    if (error.name = 'CastError') {
        return response.status(404).send({ error: 'Malformatted id' })
    }

    if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }

    next(error);
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}