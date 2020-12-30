import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Image from 'react-bootstrap/Image';
import { Container } from 'semantic-ui-react';
import fossil from '../assets/images/fossil.png';
import rock from '../assets/images/rock.png';
import tree from '../assets/images/money-tree.png';
import recipe from '../assets/images/recipe-bottle.png';
import flowers from '../assets/images/watering-can.png';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class Home extends React.Component {
    render() {
        return (
            <Jumbotron className="jumbotron-home">
                <h1 className="title-home">Animal Crossing New Horizons</h1>
                <Container>
                    <h2>Daily Checklist</h2>
                    {/* falta diseño aqui, ponerlo bonito, cada task con descripcion y control de todos los task completados */}
                    <Button variant="primary" className="money-tree"><Image className="image-inside" src={tree} roundedCircle /></Button>
                    <Button variant="primary" className="recipe-bottle"><Image className="image-inside" src={recipe} roundedCircle /></Button>
                    <Button variant="primary" className="flowers"><Image className="image-inside" src={flowers} roundedCircle /></Button>
                    <ToggleButtonGroupControlled value={"fossil"} />
                    <ToggleButtonGroupControlled value={"rock"} />

                    <h2>Turnip price</h2>
                    
                </Container>
            </Jumbotron>
        )
    }
}

export default Home;


function ToggleButtonGroupControlled(props) {
    var buttons = [];
    var length;
    var item;
    const [value, setValue] = useState();
    if (props.value === "fossil") {
        length = 4;
        item = fossil;
    } else {
        length = 6;
        item = rock;
    }
    for (var i = 1; i <= length; i++) {
        buttons.push(<ToggleButton variant="primary" value={i} key={i} className={props.value}><Image className="image-inside" src={item} roundedCircle /></ToggleButton>);
    }
    const handleChange = (val) => {
        setValue(val);
        console.log("value", val);
        //control values actives
    }

    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            {buttons}
        </ToggleButtonGroup>
    );
}
