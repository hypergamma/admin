const Influx = require('../../');
const config = require('./config');

const influx = new Influx.InfluxDB(config);

module.exports = influx;