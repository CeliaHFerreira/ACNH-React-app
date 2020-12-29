import React, { useState } from 'react';
import { Radio, Card, Grid, Image } from 'semantic-ui-react';

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
                                <Image className='image-bugs' src={bugs.image_url} />
                                <Card.Content>
                                    <Card.Header>{bugs.name}</Card.Header>
                                    <Card.Description>
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
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}
