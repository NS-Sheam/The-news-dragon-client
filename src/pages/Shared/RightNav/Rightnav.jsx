import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"


const Rightnav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary w-100 mb-2"> <FaGoogle/> Login with Google</Button>
            <Button variant="outline-secondary w-100"><FaGithub/> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='btn btn-outline-secondary' variant='outline-secondary mb-2'><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item className='btn btn-outline-secondary mb-2'><FaTwitter/> twiteer</ListGroup.Item>
                    <ListGroup.Item className='btn btn-outline-secondary mb-2'><FaInstagram/> instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div className='position-relative'>
                    <img src={bg} alt="" />
                    <div className='position-absolute top-0 text-white text-center p-4'>
                        <h2 className=' mb-4'>Create an Amazing Newspaper</h2>
                        <p className='fs-5 mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button variant='danger p-3 fs-5'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightnav;