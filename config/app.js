const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../public/api-docs/swagger.json');

const app = express();

app.use('/v2/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api', async (req, res) => {
    res.status(200).send(`Welcome to S4apps Panel`);
});

module.exports = app;