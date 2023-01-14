import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <h2 className='text-center mt-5'>This is About us.</h2>

            <div className='text-center'>
                <iframe title='uniqueTitle' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0375004901452!2d90.36053012695312!3d23.817265499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15e75b8b11b%3A0x21e9fd93251daaae!2sMotorhead%20BD%20Service%20Center!5e0!3m2!1sen!2sbd!4v1673686277743!5m2!1sen!2sbd" width="600" height="450" loading="lazy" ></iframe>
            </div>
        </div>
    );
};

export default About;