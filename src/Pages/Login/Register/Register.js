import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorElement;
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }

    }

    if (user) {
        navigate('/home')
        console.log(user);
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='container w-50 mx-auto'>

            <h2 className='text-primary text-center  mt-5'>Please Register</h2>

            <form onSubmit={handleRegister} className='register-form mt-3'>
                <div>
                    <input type="text" name='name' placeholder='Your Name' />

                    <br />

                    <input type="email" name="email" placeholder='Email Address' required />

                    <br />

                    <input type="password" name="password" placeholder='Password' required />

                    <br />

                    <input
                        onClick={() => setAgree(!agree)}
                        className='' type="checkbox" name="terms" id="terms" />

                    {/* one type of system for conditional css */}
                    {/* <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Condition</label> */}

                    {/* another type of system for conditional css  */}
                    <label className={`ps-2 ${agree ? "" : 'text-danger'}`} htmlFor="terms">Accept Terms and Condition</label>

                    <br />

                    <button
                        disabled={!agree}
                        className='w-50 mx-auto d-block mb-3 mt-2' type="submit">Register</button>
                </div>
            </form>

            {errorElement}

            <p className='text-left'>Already have an account? <Link to='/login' className="text-primary text-decoration-none" >Please Login</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;