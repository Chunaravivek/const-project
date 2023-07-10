require('dotenv').config();

// Call logger to log errors
const logger = require('./config/logging').logger;

require('./database')(logger);

const app = require('./config/app');

//START SERVER
if (process.env.NODE_ENV == "development") {
    port = 3000;
} else {
    port = process.env.PORT;
}

const server = app.listen(port, () => {
    logger.info(`App running on port ${port}...`);
});