import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Chart from 'chart.js'
import './App.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {  isUndefined } from 'util';

class App extends Component {
    state = {
        x: 0.84,
        y: 0.88,
        maksimum: 2.350,
        ortalama: 1.850,
        minimum: 1.30
    };
    datas;
    ctx;
    data1copy;
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
        , {
        x: 98.0,
        y: 1.15
    },
    {
        x: 100.0,
        y: 2.0
    }, {
        x: 103.0,
        y: 4.6
    }, {
        x: 105.0,
        y: 5.82
    },
    {
        x: 106.0,
        y: 7.20
    }, {
        x: 108.0,
        y: 9.60
    }];
    minimumchart = [{
        x: 0.0,
        y: this.state.minimum
    }, {
        x: 0.0,
        y: this.state.minimum
    }

    ];
    
    averagechart = [{
        x: 0.0,
        y: this.state.ortalama
    }, {
        x: 0.0,
        y: this.state.ortalama
    }

    ];
    maximumchart = [{
        x: 0.0,
        y: this.state.maksimum
    }, {
        x: 0.0,
        y: this.state.maksimum
    }

    ];
    kesitdegerleri;
    drawchart = (nextState) => {
        this.multiplybyfactor(nextState);
        this.mrthales(nextState);
        let myChart = new Chart(this.ctx, {
            plugins: [ChartDataLabels],
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Bağlama Enkesiti',
                    data: this.data1,
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "pink",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'pink',
                    pointRadius: 5,
                    borderWidth: 3,
                    datalabels: {
                        formatter: function (value, context) {

                            return value.x + "," + value.y;
                        },

                        font: {
                            size: 10
                        },
                        align: "top"
                    }

                }, {
                    label: 'Minimum',
                    data: this.minimumchart,
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "orange",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'orange',
                    pointRadius: 5,
                    borderWidth: 3,
                    datalabels: {
                        formatter: function (value, context) {

                            return value.x + "," + value.y;
                        },

                        font: {
                            size: 10
                        },
                        align: "top"
                    }
                },{
                    label: 'Ortalama',
                    data: this.averagechart,
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "#731963",
                    fill: false,
                    lineTension: 0,
                    borderColor: '#731963',
                    pointRadius: 5,
                    borderWidth: 3,
                    datalabels: {
                        formatter: function (value, context) {

                            return value.x + "," + value.y;
                        },

                        font: {
                            size: 10
                        },
                        align: "top"
                    }
                },{
                    label: 'Maksimum',
                    data:this.maximumchart,
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "#72E1D1",
                    fill: false,
                    lineTension: 0,
                    borderColor: '#72E1D1',
                    pointRadius: 5,
                    borderWidth: 3,
                    datalabels: {
                        formatter: function (value, context) {

                            return value.x + "," + value.y;
                        },

                        font: {
                            size: 10
                        },
                        align: "top"
                    }
                }]
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
                backgroundColor: "red"
            },

        });
        this.ctx.canvas.parentNode.style.height = '700px';
        this.ctx.canvas.parentNode.style.width = '1300px';
    };

    multiplybyfactor = (nextState) => {
        let mystate;

        if (isUndefined(nextState)) {

            mystate = this.state;
        }
        else {

            mystate = nextState;
        }
        for (let i = 0; i < this.data1.length; i++) {


            this.data1[i].x = parseFloat((this.data1copy[i].x * mystate.x).toFixed(2));
            this.data1[i].y = parseFloat((this.data1copy[i].y * mystate.y).toFixed(2));

        }


    };
    mrthales = (nextState) => {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        

        this.drawchart(nextState);
        return true;

    }

    componentDidMount() {

        this.ctx = document.getElementById('myChart').getContext('2d');
        this.drawchart();


    }

    handlechange = (name) => event => {
        let b = parseFloat(event.target.value);
        b.toFixed(3);
        b = parseFloat(b);

        this.setState({
            [name]: b
        });

        event.preventDefault();

    };

    constructor(props) {

        super(props);
        this.data1copy = JSON.parse(JSON.stringify(this.data1));
        this.datas = new Map();
        this.datas.set(0, this.minimumchart);
        this.datas.set(1, this.averagechart);
        this.datas.set(2, this.maximumchart);
        this.kesitdegerleri = [this.state.minimum, this.state.ortalama, this.statemaksimum];
    }

    
    
    render() {

        return (
            <div className="App">

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
                /><br />
                <TextField
                    id="standard-number"
                    style={{ fontSize: "26px" }}
                    label="Minimum"
                    value={this.state.minimum}
                    onChange={this.handlechange('minimum')}
                    type="number"
                    className={"y"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    style={{ fontSize: "26px" }}
                    label="Ortalama"
                    value={this.state.ortalama}
                    onChange={this.handlechange('ortalama')}
                    type="number"
                    className={"y"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    style={{ fontSize: "26px" }}
                    label="Maksimum"
                    value={this.state.maksimum}
                    onChange={this.handlechange('maksimum')}
                    type="number"
                    className={"y"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br></br>
                <div className="myChartdiv">
                    <canvas id="myChart" width="1300px" height="700px"></canvas>
                </div>
                <br />

            </div>

        );
    }
}

export default App;
