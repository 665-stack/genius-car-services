import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }

    return (
        <div>
            <h2 className='text-primary text-center  mt-5'>Please Register</h2>

            <form onSubmit={handleRegister} className='register-form'>
                <div>
                    <input type="text" name='name' placeholder='Your Name' />

                    <br />

                    <input type="email" name="email" placeholder='Email Address' required />

                    <br />

                    <input type="password" name="password" placeholder='Password' required />

                    <br />

                    <button type="submit">Register</button>

                    <p className='text-center mt-1'>Already have an account? <Link to='/login' className="text-danger text-decoration-none" >Please Login</Link></p>

                </div>


            </form>



        </div>
    );
};

export default Register;