import React, { useState } from 'react';
import { Radio, Card, Grid, Image } from 'semantic-ui-react';

export default function Fish({ data }) {
    const [toggleState, setToggled] = useState('North hemisphere');

    function toggleNorthSouth() {
        setToggled(toggleState === 'North hemisphere' ? 'South hemisphere' : 'North hemisphere');
    }

    return (
        <div>
            <h1>Fish</h1>
            <Radio toggle onClick={toggleNorthSouth} label={toggleState.toString()} className="toggle" />
            <Grid>
                {data.map((fish, i) => {
                    return (
                        <Grid.Column key={i} mobile={16} tablet={8} computer={5}>
                            <Card>
                                <Image className="image-fish" src={fish.image_url} />
                                <Card.Content>
                                    <Card.Header>{fish.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Location</strong>
                                        <p>{fish.location}</p>
                                        <strong>Shadow size</strong>
                                        <p>{fish.shadow_size}</p>
                                        <strong>Sell price in Nook's Cranny</strong>
                                        <p>{fish.sell_nook}</p>
                                        <strong>Availability in {toggleState.toString()}</strong>
                                        <div>{toggleState.toString() === 'North hemisphere'
                                            ? (<p>{fish.north.availability_array[0].months}, {fish.north.availability_array[0].time}</p>)
                                            : (<p>{fish.south.availability_array[0].months}, {fish.south.availability_array[0].time}</p>)
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
