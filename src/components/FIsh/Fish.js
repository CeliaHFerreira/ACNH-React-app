import React, { useState } from 'react';
import './Fish.css';
import { Radio, Grid, } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Fish({ data }) {
    let hemisphere = sessionStorage.getItem('hemisphere');
    if (!hemisphere) {
        hemisphere = 'North hemisphere';
    }
    const [toggleState, setToggled] = useState(hemisphere);
    sessionStorage.setItem('hemisphere', toggleState);
    let selectNS = toggleState === 'North hemisphere' ? false : true;

    function toggleNorthSouth() {
        setToggled(toggleState === 'North hemisphere' ? 'South hemisphere' : 'North hemisphere');
    }

    return (
        <div>
            <h1>Fish</h1>
            <Radio toggle onClick={toggleNorthSouth} label={toggleState.toString()} checked={selectNS} className="toggle" />
            <Grid>
                {data.map((fish, i) => {
                    return (
                        <Grid.Column key={i} mobile={16} tablet={8} computer={5}>
                            <Card>
                                <Card.Img variant="top" className="image-fish" src={fish.image_url} />
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Card.Title>{fish.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                {fish.location}
                                            </Card.Subtitle>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Shadow size</h6>
                                            <p>{fish.shadow_size}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Sell price in Nook's Cranny</h6>
                                            <p>{fish.sell_nook}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Availability in {toggleState.toString()}</h6>
                                            {toggleState.toString() === 'North hemisphere'
                                                ? (<p>{fish.north.availability_array[0].months}, {fish.north.availability_array[0].time}</p>)
                                                : (<p>{fish.south.availability_array[0].months}, {fish.south.availability_array[0].time}</p>)
                                            }
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}
