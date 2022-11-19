import React from 'react';
import googleIcon from '../../../images/Google/google.png'
import facebookIcon from '../../../images/Facebook/facebook.png'
import githubIcon from '../../../images/Github/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='bg-dark w-50 '></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50 '></div>
            </div>

            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className=" btn btn-white btn-outline-dark  border border-dark  w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={googleIcon} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className=" btn btn-white btn-outline-dark border border-dark w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={facebookIcon} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button className=" btn btn-white btn-outline-dark border  border-dark w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={githubIcon} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;