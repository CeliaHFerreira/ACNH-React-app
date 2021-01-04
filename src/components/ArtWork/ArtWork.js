import React from 'react';
import './ArtWork.css';
import { Grid } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function ArtWork({ data }) {
    return (
        <div>
            <p>ArtWork</p>
            <Grid>
                {data.map((artWork, i) => {
                    let button;
                    let collapse;
                    if (artWork.has_fake) {
                        button = <CustomToggle>View fake</CustomToggle>;
                        collapse = <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Img variant="top" className='image-art' src={artWork.fake_image_url} />
                                <Card.Subtitle className="mb-2 text-muted">
                                    {artWork.authenticity}
                                </Card.Subtitle>
                            </Card.Body>
                        </Accordion.Collapse>
                    } else {
                        button = <Button className="button-art" variant="success" size="lg" disabled>Always real</Button>;
                    }
                    return (
                        <Grid.Column key={i} mobile={8} tablet={5} computer={4}>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Title} variant="link" eventKey="0">
                                        <Card.Img variant="top" className='image-art' src={artWork.image_url} />
                                        <Card.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <Card.Title>{artWork.name}</Card.Title>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Art name</h6>
                                                    <p className="subtitle-item">{artWork.art_name}</p>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Author</h6>
                                                    <p className="subtitle-item">{artWork.author}</p>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                        {button}
                                    </Accordion.Toggle>
                                    {collapse}
                                </Card>
                            </Accordion>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}

function CustomToggle({ children, eventKey }) {
    return (
        <Button className="button-art" variant="warning" size="lg">
            {children}
        </Button>
    );
}
