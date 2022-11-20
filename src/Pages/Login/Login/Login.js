import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

        console.log(email, password);
    }

    // reset password
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Sent email');
    }




    return (
        <div className="container w-50 mx-auto">
            <h2 className='text-primary text-center  mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit} className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}

            <p className='text-left'>New to Genius Car? <Link to='/register' className="text-primary text-decoration-none" >Please Register</Link></p>

            <p className='text-left mt-1'>Forget Password? <Link onClick={resetPassword} className="text-primary text-decoration-none" >Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;