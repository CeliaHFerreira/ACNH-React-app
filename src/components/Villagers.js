import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Villagers({ data }) {
    return (
        <div>
            <p>Villagers</p>
            <Grid>
                {data.map((villager, i) => {
                    return (
                        <Grid.Column key={i} mobile={9} tablet={8} computer={4}>
                            <Card>
                                <Image className="image-villager"src={villager.image_url}/>
                                <Card.Content>
                                    <Card.Header>{villager.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Specie</strong>
                                        <p>{villager.species}</p>
                                        <strong>Gender</strong>
                                        <p>{villager.gender}</p>
                                        <strong>Personality</strong>
                                        <p>{villager.personality}</p>
                                        <strong>Birthday</strong>
                                        <p>{villager.birthday_day} {villager.birthday_month}</p>
                                        <strong>Catchphrase</strong>
                                        <p>{villager.phrase}</p>
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
