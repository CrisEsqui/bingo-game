import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

    // Open the github profile in a new tab
    const openGithubProfile = () => {
        window.open('http://github.com/CrisEsqui', '_blank');
    };


    return (

        <Nav className="justify-content-center" activeKey="/game">
            <Nav.Item>
                <Nav.Link href="/">Jugar</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href='/players'>Jugadores</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link onClick={openGithubProfile}>Más proyectos</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default NavBar