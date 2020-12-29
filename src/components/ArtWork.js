import React, { useState } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function ArtWork({ data }) {
    const [artItem, setArtItem] = useState();
    return (
        <div>
            <p>ArtWork</p>
            <Grid>
                {data.map((artWork, i) => {
                    let fake;
                    fake = (artWork.has_fake) ?
                        <h5>Can be fake</h5>
                        : <h5>Always real</h5>;
                    return (
                        <Grid.Column key={i} mobile={8} tablet={5} computer={4}>
                            <Card>
                                <Image className='image-art' src={artWork.image_url} />
                                <Card.Content>
                                    <Card.Header>{artWork.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Art name</strong>
                                        <p>{artWork.art_name}</p>
                                        <strong>Author</strong>
                                        <p>{artWork.author}</p>
                                        {fake}
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
