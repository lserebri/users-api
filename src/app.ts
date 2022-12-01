import 'dotenv/config';
import express from 'express';

const config = require("config");
const cors = require("cors");

const PORT = config.get('app.port') || 3000;

const app = express();

app.use(cors());

app.use('/', require('./api/router'));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
