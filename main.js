const app = require('./server');
const db = require('./db').db;

db.sync()
.then(() => {
    console.log('db synced up!');
    app.listen(8080, () => {
        console.log('server running on PORT 8080!');
    })    
})

