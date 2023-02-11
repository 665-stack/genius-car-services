import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='text-center'>
            <h2>You can add a service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;