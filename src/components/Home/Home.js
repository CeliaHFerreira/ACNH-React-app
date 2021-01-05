import React from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'semantic-ui-react';
import fossil from '../../assets/images/fossil.png';
import rock from '../../assets/images/rock.png';
import tree from '../../assets/images/money-tree.png';
import recipe from '../../assets/images/recipe-bottle.png';
import flowers from '../../assets/images/watering-can.png';
import residents from '../../assets/images/residents.png';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CheckDaily from './CheckDaily.js';
import { Icon } from 'semantic-ui-react';


class Home extends React.Component {
    constructor(props) {
        super(props)
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
            ]
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
    }

    render() {
        return (
            <Jumbotron className="jumbotron-home">
                <h1 className="title-home">Animal Crossing New Horizons</h1>
                <Container className="container-central">
                    <h2>Daily Checklist</h2>
                    <h4>Money, recipes, flowers and conversation</h4>
                    <div className="daily">
                        {
                            this.state.daily.map((daily, index) => {
                                return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={daily.image} {...daily} />)
                            })
                        }
                    </div>
                    <h4>Find fossils</h4>
                    <div className="fossils">
                        {
                            this.state.fossils.map((fossil, index) => {
                                return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={fossil.image} {...fossil} />)
                            })
                        }
                    </div>
                    <h4>Break rocks</h4>
                    <div className="rocks">
                        {
                            this.state.rocks.map((rock, index) => {
                                return (<CheckDaily key={index} handleCheckChildElement={this.handleCheckChildElement} image={rock.image} {...rock} />)
                            })
                        }
                    </div>
                </Container>
                <Container className="container-central">
                    <h2>Turnip price</h2>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text><Icon name='sun' size='large' /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Morning price"
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text><Icon name='moon' size='large' /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Afternoon price"
                        />
                    </InputGroup>
                    <h4>Stats of turnip price</h4>
                </Container>
            </Jumbotron>

        )
    }
}

export default Home;
