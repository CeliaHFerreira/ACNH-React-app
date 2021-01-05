import React, { useState } from 'react';
import './Bugs.css';
import { Grid, Radio } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Bugs({ data }) {
    const [toggleState, setToggled] = useState('North hemisphere');

    function toggleNorthSouth() {
        setToggled(toggleState === 'North hemisphere' ? 'South hemisphere' : 'North hemisphere');
    }
    return (
        <div>
            <h1>Bugs</h1>
            <Radio toggle onClick={toggleNorthSouth} label={toggleState.toString()} className="toggle" />
            <Grid>
                {data.map((bugs, i) => {
                    return (
                        <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                            <Card>
                                <Card.Img variant="top" className='image-bugs' src={bugs.image_url} />
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Card.Title>{bugs.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                {bugs.location}
                                            </Card.Subtitle>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Sell price in Nook's Cranny</h6>
                                            <p>{bugs.sell_nook}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Availability in {toggleState.toString()}</h6>
                                            {toggleState.toString() === 'North hemisphere'
                                                ? (<p>{bugs.north.availability_array[0].months}, {bugs.north.availability_array[0].time}</p>)
                                                : (<p>{bugs.south.availability_array[0].months}, {bugs.south.availability_array[0].time}</p>)
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
