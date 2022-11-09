import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { Button, Form } from 'react-bootstrap';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()

    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center  mt-5'>Please Register</h2>

            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-2'>Already have an account? <Link to='/login' className="text-danger text-decoration-none" >Please Login</Link></p>
            </Form>


        </div>
    );
};

export default Register;