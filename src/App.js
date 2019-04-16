import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Chart from 'chart.js'
import './App.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

class App extends Component {
    state = {
        x: 0.84,
        y: 0.88,
        maksimum: 235.0,
        ortalama: 185.0,
        minimum: 130
    };
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
    data2 = [{
        x: 0.0,
        y: 0.0
    }, {
        x: 0.0,
        y: 0.0
    }

    ];
    data2copy;
    data3 = [{
        x: 0.0,
        y: 0.0
    }, {
        x: 0.0,
        y: 0.0
    }

    ];
    data3copy;
    data4 = [{
        x: 0.0,
        y: 0.0
    }, {
        x: 0.0,
        y: 0.0
    }

    ];
    data4copy;

    drawchart = () => {
        this.multiplybyfactor();
        let myChart = new Chart(this.ctx, {
            plugins: [ChartDataLabels],
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'BAĞLAMA ENKESİTİ',
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
                            console.log(value.x);
                            return value.x + "," + value.y;
                        },

                        font: {
                            size: 10
                        },
                        align: "top"
                    }

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
                backgroundColor: "red"
            },

        });
        this.ctx.canvas.parentNode.style.height = '700px';
        this.ctx.canvas.parentNode.style.width = '1300px';
    };

    multiplybyfactor = () => {

        for (let i = 0; i < this.data1.length; i++) {
            this.data1[i].x = parseFloat(this.data1copy[i].x * this.state.x).toFixed(3);
            this.data1[i].y = parseFloat(this.data1copy[i].y * this.state.y).toFixed(3);

        }

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.drawchart();
        return true;
    }

    componentDidMount() {

        this.ctx = document.getElementById('myChart').getContext('2d');
        this.drawchart();


    }

    handlechange = (name) => event => {

        this.setState({
            [name]: [parseFloat(event.target.value)]
        });
        event.preventDefault();

    }

    constructor(props) {

        super(props);
        this.data1copy = JSON.parse(JSON.stringify(this.data1));
        this.data2copy = JSON.parse(JSON.stringify(this.data2));
        this.data3copy = JSON.parse(JSON.stringify(this.data3));
        this.data4copy = JSON.parse(JSON.stringify(this.data4));
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
                    style={{fontSize: "26px"}}
                    label="Y KATSAYISI"
                    value={this.state.y}
                    onChange={this.handlechange('y')}
                    type="number"
                    className={"y"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br/>
                <TextField
                    id="standard-number"
                    style={{fontSize: "26px"}}
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
                    style={{fontSize: "26px"}}
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
                    style={{fontSize: "26px"}}
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
                <br/>

            </div>

        );
    }
}

export default App;
