import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Villagers({ data }) {
    return (
        <div>
            <p>Villagers</p>
            <Grid columns={3}>
                {data.map((villager, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Image src={villager.image_url}/>
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
