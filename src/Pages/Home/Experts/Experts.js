import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: "Will Smith", img: expert1 },
    { id: 1, name: "Tom cruise", img: expert2 },
    { id: 1, name: "Dwayne Johnson", img: expert3 },
    { id: 1, name: "Justin Bieber", img: expert4 },
    { id: 1, name: "Cristiano Ronaldo", img: expert5 },
    { id: 1, name: "Lionel Messi", img: expert6 },
]
const Experts = () => {
    return (
        <div className='container'>

            <h2 className='text-primary text-center'>Our Experts</h2>

            <div className="row">
                {
                    experts.map(expert => <Expert
                        expert={expert}
                        key={expert.id}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;