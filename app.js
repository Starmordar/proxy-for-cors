const express = require('express');
const axios = require('axios')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res, next) => {
    axios.get('https://www.gismeteo.by/weather-minsk-4248/')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})