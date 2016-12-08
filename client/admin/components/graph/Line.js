import React from 'react';
import {Line} from 'react-chartjs-2';
import request from 'superagent';

const initialState = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'cpu usage percent',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 0, 0, 0]
    }
  ]
};



export default React.createClass({
  displayName: 'Graph',
  componentWillMount(){
    this.setState(initialState);
  },
  componentDidMount(){

    var _this = this;

    setInterval(function(){
      var oldDataSet = _this.state;

      request
        .get('/api/handler/data')
        .query(
          {
            nuser:'nuser',
            nfunc:'nfunc'
          })
        .end(function (err, res) {
          if(!err) {
            var newData = [];
            var newLabel = [];
            res.body.forEach( (row) => {
              newData.push(row.cpu_usage_percent || 0)
              newLabel.push(row.time || '')
            });
            var newDataSet = Object.assign({}, oldDataSet);
            newDataSet.data = newData;
            //newDataSet.labels = newLabel;
            console.log(oldDataSet);
            console.log(newDataSet);
            _this.setState({datasets: [newDataSet]});
            console.log(_this.state);
          }
        });
      // for(var x=0; x< _this.state.labels.length; x++){
      //   newData.push(Math.floor(Math.random() * 100));
      // }


    }, 3000);
  },
  render() {
    return (
      <Line data={this.state} />
    );
  }
});




