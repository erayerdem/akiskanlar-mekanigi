import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Chart from 'chart.js'
import './App.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { isUndefined } from 'util';



import AnchorLink from 'react-anchor-link-smooth-scroll'



export default class ChartPage extends Component {
    state = {
        x: 0.84,
        y: 0.88,
        maksimum: 2.350,
        ortalama: 1.850,
        minimum: 1.30
    };
    ıslakcevre = [0, 0, 0]
    ıslakalan = [0, 0, 0]
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
    charts = [[{
        x: 0.0,
        y: this.state.minimum
    }, {
        x: 0.0,
        y: this.state.minimum
    }], [{
        x: 0.0,
        y: this.state.ortalama
    }, {
        x: 0.0,
        y: this.state.ortalama
    }], [{
        x: 0.0,
        y: this.state.maksimum
    }, {
        x: 0.0,
        y: this.state.maksimum
    }]];
    kesitdegerleri;
    drawchart = (nextState) => {
        this.multiplybyfactor(nextState);
        this.mrthales(nextState);
        new Chart(this.ctx, {
            plugins: [ChartDataLabels],
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Bağlama Enkesiti',
                    data: this.data1,
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "red",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'red',
                    pointRadius: 3,
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
                    label: 'Minimum Su Seviyesi',
                    data: this.charts[0],
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "orange",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'orange',
                    pointRadius: 3,
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
                    label: 'Ortalama Su Seviyesi',
                    data: this.charts[1],
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "#731963",
                    fill: false,
                    lineTension: 0,
                    borderColor: '#731963',
                    pointRadius: 3,
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
                    label: 'Maksimum Su Seviyesi',
                    data: this.charts[2],
                    showLine: true,

                    pointStyle: 'circle',
                    backgroundColor: "#72E1D1",
                    fill: false,
                    lineTension: 0,
                    borderColor: '#72E1D1',
                    pointRadius: 3,
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
                        position: 'bottom',
                        scaleLabel: {
                            display: true,
                            labelString: "EŞEL SIFIR KOTU",
                            fontSize: 22,
                            padding: {
                                left: 15,
                                top: 0
                            }
                        }



                    }],
                    yAxes: [{
                        beginAtZero: true,
                        type: 'linear',
                        position: 'top',
                        scaleLabel: {
                            display: true,
                            labelString: "Y",
                            fontSize: 22
                        }

                    }

                    ],
                    backgroundColor: "red"
                },
                response: true,
                legend: {
                    labels: {
                        fontColor: "black",
                        fontSize: 22
                    }
                }
            }
        });

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

    nextstateproblem = (nextState) => {
        if (!isUndefined(nextState)) {
            this.charts = [[{

                y: nextState.minimum
            }, {

                y: nextState.minimum
            }], [{

                y: nextState.ortalama
            }, {

                y: nextState.ortalama
            }], [{

                y: nextState.maksimum
            }, {

                y: nextState.maksimum
            }]];
            this.kesitdegerleri = [nextState.minimum, nextState.ortalama, nextState.maksimum];
        }

    }
    mrthales = (nextState) => {

        this.nextstateproblem(nextState);
        for (let j = 0; j < 3; j++) {

            for (let i = 0; i < this.data1.length; i++) {
                if (this.kesitdegerleri[j] > this.data1[i].y) {

                    let uzunykenari = this.data1[i - 1].y - this.data1[i].y;
                    let kisay = this.data1[i - 1].y - this.kesitdegerleri[j];
                    let altuzunkenar = this.data1[i].x - this.data1[i - 1].x;
                    let cevap = (kisay * altuzunkenar) / uzunykenari;
                    cevap = cevap + this.data1[i - 1].x;

                    this.charts[j][0].x = parseFloat(cevap.toFixed(2));
                    for (let z = i + 1; z < this.data1.length; z++) {
                        if (this.kesitdegerleri[j] < this.data1[z].y) {
                            let uzunykenari1 = this.data1[z].y - this.data1[z - 1].y;
                            let kisay1 = this.data1[z].y - this.kesitdegerleri[j];
                            let altuzunkenar1 = this.data1[z - 1].x - this.data1[z].x;
                            let cevap1 = (kisay1 * altuzunkenar1) / uzunykenari1;
                            cevap1 = cevap1 + this.data1[z].x;
                            console.log(cevap1);
                            this.charts[j][1].x = parseFloat(cevap1.toFixed(2));
                            break;
                        }
                    }
                    break;
                }
            }
        }

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.drawchart(nextState);

        return true;

    }

    componentDidMount() {

        this.ctx = document.getElementById('myChart').getContext('2d');
        this.drawchart();
        this.ıslakcevre();


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
    ıslakcevre = () => {
        this.kesitdegerleri = [this.state.minimum, this.state.ortalama, this.state.maksimum];
        for (let i = 0; i < this.kesitdegerleri.length; i++) {
            for (let j = 0; j < this.data1.length; j++)
            
        }

    }






    constructor(props) {

        super(props);
        this.data1copy = JSON.parse(JSON.stringify(this.data1));
        this.datas = new Map();
        this.datas.set(0, this.minimumchart);
        this.datas.set(1, this.averagechart);
        this.datas.set(2, this.maximumchart);
        this.kesitdegerleri = [this.state.minimum, this.state.ortalama, this.state.maksimum];
    }



    render() {

        this.ıslakcevre();
        return (
            <div className="App">
                <section id='step1'>
                    <div className="ccc" >
                        <AnchorLink offset={() => 100} href='#step2'>Sonraki Adım</AnchorLink>

                    </div>
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
                </section>
                <section id='step2'>
                    <AnchorLink offset={() => 100} href='#step1'>Sonraki Adım</AnchorLink>
                    <h1>Minumum Islak Çevre=22m</h1>

                </section>

            </div>

        );
    }
}
