const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const Property = require('./models/property');
const propertyRoute = require('./routes/properties')
const FakeDb = require('./fake-db');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use('/server/properties',propertyRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log("node server started")
});