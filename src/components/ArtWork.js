import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ArtWork({ data }) {
    const [artItem, setArtItem] = useState();
    return (
        <div>
            <p>ArtWork</p>
            <Grid>
                {data.map((artWork, i) => {
                    return (
                        <Grid.Column key={i} mobile={8} tablet={5} computer={4}>
                            <Card>
                                <Card.Img variant="top" className='image-art' src={artWork.image_url} />
                                <Card.Body>
                                    <Card.Title>{artWork.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Art name</strong>
                                        <p>{artWork.art_name}</p>
                                        <strong>Author</strong>
                                        <p>{artWork.author}</p>
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}
