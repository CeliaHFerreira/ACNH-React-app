import React, { useState } from 'react';
import { Grid, Radio } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';

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
                                    <Card.Title>{bugs.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Location</strong>
                                        <p>{bugs.location}</p>
                                        <strong>Sell price in Nook's Cranny</strong>
                                        <p>{bugs.sell_nook}</p>
                                        <strong>Availability in {toggleState.toString()}</strong>
                                        <div>{toggleState.toString() === 'North hemisphere'
                                            ? (<p>{bugs.north.availability_array[0].months}, {bugs.north.availability_array[0].time}</p>)
                                            : (<p>{bugs.south.availability_array[0].months}, {bugs.south.availability_array[0].time}</p>)
                                        }
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}
