import React from 'react';
import './Home.css';
import CheckDaily from './CheckDaily.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Container } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
// Axios
import axios from '../../axios-island';
// UI Elements
import Spinner from '../../assets/UI/Spinner/Spinner';
// images
import fossil from '../../assets/images/fossil.png';
import rock from '../../assets/images/rock.png';
import tree from '../../assets/images/money-tree.png';
import recipe from '../../assets/images/recipe-bottle.png';
import flowers from '../../assets/images/watering-can.png';
import residents from '../../assets/images/residents.png';
import turnip from '../../assets/images/turnip.png';
import island from '../../assets/images/island.png';
import ACNH from '../../assets/images/ACNH.png';
import bells from '../../assets/images/bells.png';
import calculator from '../../assets/images/calculator.png';
import daisy from '../../assets/images/daisy-mae.png';


const regNumber = /^[0-9\b]+$/;
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
class Home extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('daily') || localStorage.getItem('fossils') || localStorage.getItem('rocks')) {
            this.state = {
                daily: JSON.parse(localStorage.getItem('daily')),
                fossils: JSON.parse(localStorage.getItem('fossils')),
                rocks: JSON.parse(localStorage.getItem('rocks')),
                purchasePrice: '',
                sellAfternoon: '',
                sellMorning: '',
                turnipStats: [],
                priceStats: '',
                loading: false,
            }
        } else {
            this.state = {
                daily: [
                    { id: 1, value: "tree", isChecked: false, image: tree },
                    { id: 2, value: "recipe", isChecked: false, image: recipe },
                    { id: 3, value: "flowers", isChecked: false, image: flowers },
                    { id: 4, value: "residents", isChecked: false, image: residents }
                ],
                fossils: [
                    { id: 1, value: "fossil1", isChecked: false, image: fossil },
                    { id: 2, value: "fossil2", isChecked: false, image: fossil },
                    { id: 3, value: "fossil3", isChecked: false, image: fossil },
                    { id: 4, value: "fossil4", isChecked: false, image: fossil }
                ],
                rocks: [
                    { id: 1, value: "rock1", isChecked: false, image: rock },
                    { id: 2, value: "rock2", isChecked: false, image: rock },
                    { id: 3, value: "rock3", isChecked: false, image: rock },
                    { id: 4, value: "rock4", isChecked: false, image: rock },
                    { id: 5, value: "rock5", isChecked: false, image: rock },
                    { id: 6, value: "rock6", isChecked: false, image: rock }
                ],
                purchasePrice: '',
                sellAfternoon: '',
                sellMorning: '',
                turnipStats: [],
                priceStats: '',
                loading: false
            }
        }
    }

    handleCheckChildElement = (event) => {
        let daily = this.state.daily;
        let fossils = this.state.fossils;
        let rocks = this.state.rocks;
        daily.forEach(day => {
            if (day.value === event.target.value)
                day.isChecked = event.target.checked
        })
        this.setState({ daily: daily });
        fossils.forEach(fossil => {
            if (fossil.value === event.target.value)
                fossil.isChecked = event.target.checked
        })
        this.setState({ fossils: fossils });
        rocks.forEach(rock => {
            if (rock.value === event.target.value)
                rock.isChecked = event.target.checked
        })
        this.setState({ rocks: rocks });
        setWithExpirityDate(daily, rocks, fossils);
    }

    purchaseSave(e) {
        this.setState({ loading: true });
        e.preventDefault();
        var date = new Date();
        const valueWeek = {
            price: this.state.purchasePrice,
            date: date.getDate() + "/" + date.getMonth() + 1 + " (" + date.getFullYear() + ")",
            day: days[date.getDay()]
        }

        if (new Date().getDay !== 0) {
            axios.post('/purchase.json', valueWeek)
                .then(() => {
                    document.getElementById("purchase-price").value = '';
                    this.setState({ purchasePrice: '' });
                    this.callPurchase();
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("Today it's not sunday!");
            document.getElementById("purchase-price").value = '';
            this.setState({ purchasePrice: '' });
        }
    }

    sellSave(e) {
        this.setState({ loading: true });
        e.preventDefault();
        var date = new Date();
        const params = {
            valueMorning: this.state.sellMorning,
            valueAfternoon: this.state.sellAfternoon,
            date: date.getDate() + "/" + date.getMonth() + 1 + " (" + date.getFullYear() + ")",
            day: days[date.getDay()]
        };
        var repeat = false;
        for (let data in this.state.turnipStats) {
            if (this.state.turnipStats[data].date === params.date) {
                repeat = true;
            }
        }
        if (!repeat) {
            axios.post('/price-stats.json', params)
                .then(() => {
                    this.callPrices();
                    document.getElementById("afternoon-price").value = '';
                    document.getElementById("morning-price").value = '';
                    this.setState({ sellMorning: '', sellAfternoon: '' });
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("You already added information today!");
            document.getElementById("afternoon-price").value = '';
            document.getElementById("morning-price").value = '';
            this.setState({ sellMorning: '', sellAfternoon: '' });
        }
    }

    handleChange(event) {
        if (event.target.value === '' || regNumber.test(event.target.value)) {
            switch (event.target.id) {
                case "purchase-price":
                    this.setState({ purchasePrice: event.target.value });
                    break;
                case "morning-price":
                    this.setState({ sellMorning: event.target.value });
                    break;
                case "afternoon-price":
                    this.setState({ sellAfternoon: event.target.value });
                    break;
                default:
                    break;
            }
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.callPurchase();
        this.callPrices();
    }

    callPurchase() {
        axios.get('/purchase.json')
            .then((response) => {
                const fetchPrice = [];
                for (let key in response.data) {
                    fetchPrice.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ priceStats: fetchPrice[fetchPrice.length - 1].price, loading: false });
            })
            .catch(error => console.log(error));
    }

    callPrices() {
        axios.get('/price-stats.json')
            .then((response) => {
                const fetchTurnips = [];
                for (let key in response.data) {
                    fetchTurnips.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ turnipStats: fetchTurnips, loading: false });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Jumbotron className="jumbotron-home">
                <h1 className="title-home">Animal Crossing New Horizons</h1>
                <Container className="container-central">
                    <h2 className="title-list">
                        <img alt="island" className="principal" src={island} />
                        Daily Checklist
                    </h2>
                    <div className="stats">
                        <h4>
                            <img alt="icon" className="secondary" src={ACNH} />
                            Money, recipes, flowers and conversation
                        </h4>
                        <div className="daily">
                            {
                                this.state.daily.map((daily, index) => {
                                    return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={daily.image} {...daily} />)
                                })
                            }
                        </div>
                        <h4>
                            <img alt="icon" className="secondary" src={ACNH} />
                            Find fossils
                        </h4>
                        <div className="fossils">
                            {
                                this.state.fossils.map((fossil, index) => {
                                    return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={fossil.image} {...fossil} />)
                                })
                            }
                        </div>
                        <h4>
                            <img alt="icon" className="secondary" src={ACNH} />
                            Hit rocks
                        </h4>
                        <div className="rocks">
                            {
                                this.state.rocks.map((rock, index) => {
                                    return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={rock.image} {...rock} />)
                                })
                            }
                        </div>
                    </div>
                </Container>
                <Container className="container-central">
                    <h2 className="title-list">
                        <img alt="turnip" className="principal" src={turnip} />
                        Turnips
                    </h2>
                    <div className="stats">
                        <h3>
                            <img alt="daisy-mae" className="principal" src={daisy} />
                            Turnip price
                    </h3>
                        <h4 className="buy-sell">
                            <img alt="bells" className="secondary" src={bells} />
                            Purchase price
                        </h4>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text><Icon name='star' size='large' /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="purchase-price"
                                placeholder="Purchase price sunday"
                                aria-label="Purchase price sunday"
                                maxLength="3"
                                value={this.state.purchasePrice}
                                onChange={this.handleChange.bind(this)}
                            />
                            <InputGroup.Append>
                                <Button variant="success" type='submit' onClick={this.purchaseSave.bind(this)} disabled={!this.state.purchasePrice}>Save</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <h4 className="buy-sell">
                            <img alt="bells" className="secondary" src={bells} />
                            Selling price
                        </h4>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text><Icon name='sun' size='large' /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="morning-price"
                                placeholder="Morning price"
                                maxLength="3"
                                value={this.state.sellMorning}
                                onChange={this.handleChange.bind(this)}
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text><Icon name='moon' size='large' /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="afternoon-price"
                                placeholder="Afternoon price"
                                maxLength="3"
                                value={this.state.sellAfternoon}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Button className="button-sell" variant="success" size="lg" onClick={this.sellSave.bind(this)} disabled={!(this.state.sellAfternoon && this.state.sellMorning)} block>Save</Button>
                        </InputGroup>
                        <h4 className="prices">
                            <img alt="calculator" className="secondary" src={calculator} />
                            Stats of turnip price
                        </h4>
                        {this.state.loading
                            ? <Spinner />
                            : <div>
                                <p className="purchase-price"><Icon name='star' /><span className="price-text">Last Daisy Mae's price:</span> {this.state.priceStats} bells</p>

                                <p className="fluctuation-price"><Icon name='star' />Turnip price fluctuation:</p>
                                <Table responsive className="table">
                                    <thead>
                                        <tr>
                                            <th className="bodyTable"></th>
                                            {
                                                this.state.turnipStats.map((stat, key) => {
                                                    return (<th className="bodyTable" key={key}>{stat.day} {stat.date}</th>)
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bodyTable">AM</td>
                                            {
                                                this.state.turnipStats.map((stat, key) => {
                                                    return (<th key={key} className="bodyTable">{stat.valueMorning}</th>)
                                                })
                                            }
                                        </tr>
                                        <tr>
                                            <td className="bodyTable">PM</td>
                                            {
                                                this.state.turnipStats.map((stat, key) => {
                                                    return (<th key={key} className="bodyTable">{stat.valueAfternoon}</th>)
                                                })
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        }
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}

export default Home;


function setWithExpirityDate(daily, rocks, fossils) {
    let minutesFinnisHour = (24 - new Date().getHours()) * 3600000;
    let hoursFinnishDay = (60 - new Date().getMinutes()) * 60000;
    let hoursReset = 5 * 3600000;
    let provisionalExpirity = new Date().getTime() + minutesFinnisHour + hoursFinnishDay + hoursReset;
    localStorage.setItem('expirityDate', provisionalExpirity);
    localStorage.setItem('daily', JSON.stringify(daily));
    localStorage.setItem('fossils', JSON.stringify(fossils));
    localStorage.setItem('rocks', JSON.stringify(rocks));
}
