import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Regester = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    const handleAccpeted = event =>
        setAccepted(event.target.checked);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);
        createUser(email, password)
            .then(async (result) => {
                const createdUser = result.user;
                await updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photo
                })
                console.log(createdUser);
                navigate("/category/0")
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='mx-auto'>
            <Row>
                <Col className='col-md-4'>
                    <h3>Please Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter photo URL" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                            <Form.Label>Enter password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAccpeted}
                                type="checkbox"
                                name='accept'
                                label={<>Accept <Link to="/terms">terms and condition</Link></>}
                                required />
                        </Form.Group>
                        <Button
                            variant="dark"
                            type="submit"
                            className='fw-bold d-block w-100 py-2'
                            disabled={!accepted}>
                            Register
                        </Button>
                        <br />
                        <Form.Text className="fw-bold text-center d-block">
                            Already have an account? <Link to="/login" className='text-danger'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Regester;