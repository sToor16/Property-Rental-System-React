const Property = require('./models/property');

class FakeDB {
    constructor() {
        this.properties = [
            {
                title: 'Nice view on ocean',
                city: 'Arlington',
                street: '507 Summit Avenue',
                category: 'Apartment',
                image: 'http://via.placeholder.com/350x250',
                bedrooms: 4,
                description: 'Very nice apartment in center',
                dailyRate: 43,
                shared: false
            },
            {
                title: 'Nice view on City',
                city: 'San Jose',
                street: 'Main Street',
                category: 'condo',
                image: 'http://via.placeholder.com/350x250',
                bedrooms: 2,
                description: 'Very nice apartment in center',
                dailyRate: 100,
                shared: true
            }];
    }

    pushPropertiesToMongoDb() {
        this.properties.forEach((property) => {
            const newProperty = new Property(property);

            newProperty.save();
        })
    }

    async clearDb() {
        await Property.remove({});
    }


    seedDb() {
        this.clearDb();
        this.pushPropertiesToMongoDb();
    }

}

module.exports = FakeDB;