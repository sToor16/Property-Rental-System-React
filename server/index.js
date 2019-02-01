const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const Property = require('./models/property');
const propertyRoute = require('./routes/properties')
const userRoute = require('./routes/user')
const FakeDb = require('./fake-db');
const body_parser = require('body-parser');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    //fakeDb.seedDb();
});

const app = express();

app.use(body_parser.json());
app.use('/server/properties',propertyRoute);
app.use('/server/user',userRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log("node server started")
});