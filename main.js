const app = require('./server');
const _db = require('./db'); 
const db = _db.db;
const Country = _db.Country;
const Aircraft = _db.Aircraft;

db.sync()
.then(() => {
    console.log('db synced up!');
    app.listen(8080, () => {
        console.log('server running on PORT 8080!');
    }) 

})

