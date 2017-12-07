const { db } = require('./server/db/models/index');
const app = require('./server');
const PORT = 1337;

// db.sync({force:true})
db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`server flyin on port ${PORT}`))
});
