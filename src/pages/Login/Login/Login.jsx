import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='passwords' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit" className='fw-bold d-block w-100 py-2'>
                    Login
                </Button>
                <br />
                <Form.Text className="fw-bold text-center d-block">
                    Don't have an account? <Link to="/register" className='text-danger'>Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;