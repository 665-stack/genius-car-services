import React from 'react';
import useServices from '../../Hooks/useServices';
import './ManageService.css';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto mt-2'>
            <h2>Manage your services</h2>
            <div className='mt-3'>
                {
                    services.map(service =>
                        <div key={service._id}>
                            <h5>{service.name} <button onClick={() => handleDelete(service._id)} className='delete-btn'>X</button></h5>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageServices;