const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/client/public/dist/frontend'));

require('./server/config/mongoose');
app.use(cors());
app.use(express.json());
app.use(require('./server/config/routes'));

app.listen(port, () => {
    console.log(`listening on ${port}`);
});