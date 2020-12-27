import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function ArtWork({data}) {
    return (
        <div>
            <p>ArtWork</p>
            <Grid columns={3}>
                {data.map((artWork, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{artWork.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Art Namw</strong>
                                        <p>{artWork.art_name}</p>
                                        <strong>Author</strong>
                                        <p>{artWork.author}</p>
                                        <strong>Authenticity</strong>
                                        <p>{artWork.authenticity}</p>
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
