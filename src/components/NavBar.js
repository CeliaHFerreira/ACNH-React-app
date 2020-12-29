import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ACNH from '../assets/images/ACNH.png'

export default function NavBar() {
    return (
        <Menu stackable>
            <Container>
                <Link to='/'>
                    <Menu.Item className="title" name="Animal Crossing New Horizons">
                    <img className="principal" src={ACNH} />
                    Animal Crossing New Horizons
                    </Menu.Item>
                </Link>
                <Link to='/villagers'>
                    <Menu.Item name="Villagers" />
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
            </Container>
        </Menu>
    )
}
