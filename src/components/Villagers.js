import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';

export default function Villagers({ data }) {
    return (
        <div>
            <p>Villagers</p>
            <Grid>
                {data.map((villager, i) => {
                    return (
                        <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                            <Card>
                                <Card.Img variant="top" className="image-villager" src={villager.image_url} />
                                <Card.Body>
                                    <Card.Title>{villager.name}</Card.Title>
                                    <Card.Text>
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
