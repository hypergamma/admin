const config = require('./config');
const Influx = require('influx');

/**
 * Influxdb repository
 */
const influx = new Influx.InfluxDB(config);
influx.schema = [
  {
    measurement: 'handler',
    fields: {
      num_invokes: Influx.FieldType.INTEGER,
      num_errors: Influx.FieldType.INTEGER,
      latency: Influx.FieldType.FLOAT
    },
    tags: [
      'funcname',
      'host'
    ]
  }
];

module.exports = influx;

module.exports = influx;