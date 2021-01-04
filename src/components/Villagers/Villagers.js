import React from 'react';
import './Villagers.css';
import { Grid } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Villagers({ data }) {
    return (
        <div>
            <h1>Villagers</h1>
            <Grid>
                {data.map((villager, i) => {
                    return (
                        <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                            <Card>
                                <Card.Img variant="top" className="image-villager" src={villager.image_url} />
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Card.Title>{villager.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                {villager.species}
                                            </Card.Subtitle>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Gender</h6>
                                            <p>{villager.gender}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Personality</h6>
                                            <p>{villager.personality}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6>Birthday</h6>
                                            <p>{villager.birthday_day} {villager.birthday_month}</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h6> Catchphrase</h6>
                                            <p>{villager.phrase}</p>
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
