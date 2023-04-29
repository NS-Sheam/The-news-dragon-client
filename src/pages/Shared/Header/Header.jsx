import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {

    const { user } = useContext(AuthContext);
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <Link to="/category/0">
                    <img className='img-fluid' src={logo} alt="" />
                </Link>
                <p className="text-secondary"><small>Journalism Without  Fear or  Favour</small></p>
                <p>{moment().format("dddd, MMM Do, YYYY")}</p>
            </div>
            <div className='d-flex mb-2'>
                <Button variant='danger'>Latest</Button>
                <Marquee gradient={true} gradientWidth={100} className='text-danger' speed={100}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaeca-dti iusto repellendus magni temporibus error, explicabo distinctio,</Marquee>
            </div>
        </Container>
    );
};

export default Header;