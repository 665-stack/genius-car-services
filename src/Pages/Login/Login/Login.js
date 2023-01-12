import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

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
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Send email');
        }
        else {
            toast('Please enter your email address')
        }
    }
    // spinner
    if (loading || sending) {
        return <Loading></Loading>
    }




    return (
        <div className="container w-50 mx-auto">
            <PageTitle title="Login"></PageTitle>
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

            <p className='text-left mt-1'>Forget Password? <button onClick={resetPassword} className="text-primary text-decoration-none border-0 bg-white" >Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;