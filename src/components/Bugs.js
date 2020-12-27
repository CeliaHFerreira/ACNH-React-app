import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Bugs({ data }) {
    return (
        <div>
            <p>Bugs</p>
            <Grid columns={3}>
                {data.map((bugs, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Image src={bugs.image_url} />
                                <Card.Content>
                                    <Card.Header>{bugs.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Location</strong>
                                        <p>{bugs.location}</p>
                                        <strong>Sell price</strong>
                                        <p>{bugs.sell_nook}</p>
                                        <strong>Availability in north</strong>
                                        <p>{bugs.north.months}</p>
                                        <strong>Availability in south</strong>
                                        <p>{bugs.south.months}</p>
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
