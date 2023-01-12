import React from 'react';
import notfound from '../../images/notfound.jpg'
import PageTitle from '../PageTitle/PageTitle';
const NotFound = () => {
    return (
        <div>
            <PageTitle title="Page not found"></PageTitle>
            <h2 className='text-primary text-center mt-5'>Mechanic is now taking rest :)</h2>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;