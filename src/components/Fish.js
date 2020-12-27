import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Fish({ data }) {
    return (
        <div>
            <p>Fish</p>
            <Grid columns={3}>
                {data.map((fish, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Image src={fish.image_url} />
                                <Card.Content>
                                    <Card.Header>{fish.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Location</strong>
                                        <p>{fish.location}</p>
                                        <strong>Shadow size</strong>
                                        <p>{fish.shadow_size}</p>
                                        <strong>Availability in north</strong>
                                        <p>{fish.north.months}</p>
                                        <strong>Availability in south</strong>
                                        <p>{fish.south.months}</p>
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
