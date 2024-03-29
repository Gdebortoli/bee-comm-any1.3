const express = require('express');
const routes = require('./routes');

// import connections for sequelize 
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database via connection file 

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => { 
    console.log(`Server now listening on ${PORT}!`);
});
});


