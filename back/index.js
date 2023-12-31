const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const cors = require('cors');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    console.log('DB Connected')
  server.use(cors()); // Agregamos CORS al servidor
    server.listen(3001, () => {
    console.log('Listening on Port: 3001'); // eslint-disable-line no-console
    });
});