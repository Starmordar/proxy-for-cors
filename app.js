const express = require('express');
const axios = require('axios')
const app = express();

const port = process.env.PORT || 3000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res, next) => {
    const url = req.query.url;

    axios.get(url)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
    res.send(err.message);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})