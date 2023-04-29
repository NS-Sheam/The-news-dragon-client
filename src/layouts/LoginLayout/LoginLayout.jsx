import React from 'react';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="" />
                <p className="text-secondary"><small>Journalism Without  Fear or  Favour</small></p>
                <p>{moment().format("dddd, MMM Do, YYYY")}</p>
            </div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </Container>
    );
};

export default LoginLayout;