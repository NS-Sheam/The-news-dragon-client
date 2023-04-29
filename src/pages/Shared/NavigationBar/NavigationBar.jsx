import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <ActiveLink to="/category/0">Home</ActiveLink>
                            <ActiveLink to="/about">About</ActiveLink>
                            <ActiveLink to="/career">Career</ActiveLink>
                        </Nav>
                        <Nav className='align-items-center'>
                            {
                                user ?
                                    <Nav.Link href="#deets">
                                        {user.displayName}
                                    </Nav.Link>
                                    :
                                    <Nav.Link href="#deets" title='Profile'>
                                        <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                                    </Nav.Link>

                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ?
                                        <Button onClick={handleLogOut} variant='secondary'>Logout</Button>
                                        :
                                        <Link to="/login">
                                            <Button variant='secondary'>Login</Button>
                                        </Link>

                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;