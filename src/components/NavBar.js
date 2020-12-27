import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="Animal Crossing New Horizons" />
                </Link>
                <Link to='/fish'>
                    <Menu.Item name="Fish" />
                </Link>
                <Link to='/bugs'>
                    <Menu.Item name="Bugs" />
                </Link>
                <Link to='/artwork'>
                    <Menu.Item name="ArtWork" />
                </Link>
                <Link to='/villagers'>
                    <Menu.Item name="Villagers" />
                </Link>
            </Container>
        </Menu>
    )
}
