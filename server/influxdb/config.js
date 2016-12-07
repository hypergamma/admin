const Influx = require('../../');
const config = {
  host: '52.163.92.208',
  database: 'gamma',
  schema: [
    {
      measurement: 'docker_container_cpu',
      fields: {
        container_id: Influx.FieldType.STRING
        ,throttling_periods: Influx.FieldType.INTEGER
        ,throttling_throttled_periods: Influx.FieldType.INTEGER
        ,throttling_throttled_time: Influx.FieldType.INTEGER
        ,usage_in_kernelmode: Influx.FieldType.INTEGER
        ,usage_in_usermode: Influx.FieldType.INTEGER
        ,usage_percent: Influx.FieldType.FLOAT
        ,usage_system: Influx.FieldType.INTEGER
        ,usage_total: Influx.FieldType.INTEGER
      },
      tags: [
        'com.docker.swarm.id'
        ,'container_image'
        ,'container_name'
        ,'container_version'
        ,'cpu'
        ,'engine_host'
        ,'host'

      ]
    }
  ]
};

module.exports = config;