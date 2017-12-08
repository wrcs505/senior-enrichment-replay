const { db } = require('./server/db/_db.js');
const Aircraft = require('./server/db/models/Aircraft');
const Country = require('./server/db/models/Country');


const aircraftList = [{
  make: 'Lockheed Martin',
  model: 'SR-71 Blackbird',
  year: 1964,
  type: 'Reconoissance',
  cost: 4000,
  imageUrl: '/images/SR-71.jpg',
  description: 'The fastest copypasta in the world'
}, {
  make: 'Lockheed Martin',
  model: 'U-2',
  year: 1955,
  type: 'Reconoissance',
  cost: 2000,
  imageUrl: '/images/U-2.jpg',
  description: 'Gary Powers got a raw deal'
}, {
  make: 'Boeing',
  model: 'B-52 Stratofortress',
  year: 1952,
  type: 'Bomber',
  cost: 3500,
  imageUrl: '/images/B-52.jpg',
  description: 'The love shack is a little old place where we can get together'
}, {
  make: 'Boeing',
  model: 'B-29 Superfortresss',
  year: 1942,
  type: 'Bomber',
  cost: 2500,
  imageUrl: '/images/B-29.jpg',
  description: 'Target practice for Germans'
}, {
  make: 'Northrup Grumman',
  model: 'F6F Hellcat',
  year: 1942,
  type: 'Attack',
  cost: 500,
  imageUrl: '/images/F6F.jpg',
  description: 'The plane that won the Pacific'
}, {
  make: 'Northrup Grumman',
  model: 'A-10 Warthog',
  year: 1972,
  type: 'Attack',
  cost: 2000,
  imageUrl: '/images/A-10.jpg',
  description: 'BRRRRRRRRRRRRRRT'
}];

const countriesList = [{
  name: 'South Africa',
  GFI: 1.2,
  flagUrl: '/images/southAfrica.png'
}, {
  name: 'Australia',
  GFI: 6.8,
  flagUrl: '/images/australia.png'
}, {
  name: 'Egypt',
  GFI: 3.4,
  flagUrl: '/images/egypt.png'
}, {
  name: 'UK',
  GFI: 8.2,
  flagUrl: '/images/uk.png'
}, {
  name: 'USA',
  GFI: 10,
  flagUrl: '/images/us.png'
}, {
  name: 'Argentina',
  GFI: 2.25,
  flagUrl: '/images/argentina.png'
}, {
  name: 'Saudi Arabia',
  GFI: 4.9,
  flagUrl: '/images/saudi.jpg'
}, {
  name: 'Canada',
  GFI: 6.5,
  flagUrl: '/images/canada.jpg'
}];

// const id = () => Math.round(Math.random() * (countries.length - 1)) + 1;

const seed = () =>
  Promise.all(aircraftList.map(aircraft =>
    Aircraft.create(aircraft))
  )
  .then(() =>
  Promise.all(countriesList.map(country =>
    Country.create(country))
  ))

  seed()
  .then(() => db.close())
  .catch(err => console.log('the seed error:', err))

// const main = () => {
//   console.log('Syncing db...');
//   db.didSync
//   .then(() => {
//     console.log('Seeding databse...');
//     return seed();
//   })
//   .catch(err => {
//     console.log('Error while seeding');
//     console.log(err.stack);
//   })
//   .then(() => {
//     db.close();
//     return null;
//   });
// };

// main();
