import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Chart from 'chart.js'
import './App.css';

class App extends Component {
   data1 = [{
    x: 0.0,
    y: 9.5
  },
  {
    x: 1.0,
    y: 6.7
  }, {
    x: 2.30,
    y: 4.10
  }
    , {
    x: 3.20,
    y: 2.34
  },
  {
    x: 4.0,
    y: -0.20
  }, {
    x: 7.5,
    y: -0.10
  }, {
    x: 15.0,
    y: -0.40
  },
  {
    x: 25.0,
    y: -0.35
  }, {
    x: 35.0,
    y: -0.20
  }, {
    x: 45.0,
    y: -0.1
  },
  {
    x: 55.0,
    y: -0.05
  }, {
    x: 75.0,
    y: 0.21
  }, {
    x: 80.0,
    y: 0.11
  },
  {
    x: 90.0,
    y: 0.36
  }, {
    x: 95.0,
    y: 0.67
  }
  ,{
    x: 98.0,
    y: 1.15},
    {
    x: 100.0,
    y: 2.0
  }, {
    x: 103.0,
    y: 4.6
  },{
    x: 105.0,
    y: 5.82},
    {
    x: 106.0,
    y: 7.20
  }, {
    x: 108.0,
    y: 9.60
  }];


  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data:this.data1,
          showLine:true,
          pointBorderColor:"red",
          pointStyle:'circle',
          backgroundColor:"pink",
          fill:false,
          pointRadius:7,
          
          
        }],
        

      },
      options: {
        scales: {
          xAxes: [{
            beginAtZero: true,
            type: 'linear',
            position: 'bottom'
          }],
          yAxes: {
            beginAtZero: true,
            
          }
            
        },
        backgroundColor:"red"
      },
      
    });
    ctx.canvas.parentNode.style.height = '700px';
    ctx.canvas.parentNode.style.width = '1300px';

  }
  handlechange = (name) => event => {

    this.setState({
      [name]: [event.target.value]
    });

  }
  handleevent = () => {
    this.setState({
      m: 12
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      x: 0.0,
      y: 0.0
    };
  }
  render() {
    

    

    return (
      <div className="App">
        <h1>Lemonade</h1>
        <TextField
          id="standard-number"
          label="X KATSAYISI"
          value={this.state.x}
          onChange={this.handlechange('x')}
          type="number"
          className={"x"}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="standard-number"
          style={{ fontSize: "26px" }}
          label="Y KATSAYISI"
          value={this.state.y}
          onChange={this.handlechange('y')}
          type="number"
          className={"y"}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        /> <br></br>
        <div className="myChartdiv">
          <canvas id="myChart" width="1300px" height="700px"></canvas>
        </div>
        <br />
        <button onClick={this.handleevent}>Click Me</button>
      </div>

    );
  }
}

export default App;
