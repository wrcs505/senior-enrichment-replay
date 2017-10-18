const _db = require('./db'); 
const db = _db.db;
const Country = _db.Country;
const Aircraft = _db.Aircraft;

db.sync({force: true})
.then(() => {
    return Promise.all([
        Country.create({
            name: 'USA',
            GFI: .086
        }),
        Country.create({
            name: 'CHINA',
            GFI: .095
        }),
        Country.create({
            name: 'RUSSIA',
            GFI: .093
        }),
        Country.create({
            name: 'JAPAN',
            GFI: .214
        }),
        Country.create({
            name: 'INDIA',
            GFI: .159
        }),
    ])
}).then(countries => {
    return Promise.all([
        Aircraft.create({
            make: 'Lockheed Martin',
            model: 'Sr-71 Blackbird',
            year: 1973, 
            unit_cost: 20,
            countryId: countries[0].id
        }),
        Aircraft.create({
            make: 'J',
            model: 'J-10',
            year: 2017, 
            unit_cost: 40,
            countryId: countries[1].id,
            image_url: '/assets/planes/china-J-10a_zhas.jpg'
        }),
        Aircraft.create({
            make: 'India Air',
            model: 'SU-39MKI',
            year: 2015, 
            unit_cost: 33,
            countryId: countries[4].id,
            image_url: '/assets/planes/india-SU-30MKI.jpg' 
        }),
        Aircraft.create({
            make: 'Lockheed Martin',
            model: 'F-35 Lightning II',
            year: 2017, 
            unit_cost: 4000,
            countryId: countries[0].id,
            image_url: '/assets/planes/usa-F-35a-lightning-ii.jpg' 
        })
    ]) 
    .then(aircraft => {
        console.log('seeding complete!!');
    })
    .catch(err => {
        console.error('there was a problem seeding!');
    })
})