import React from 'react';

const ServiceCard = ({ser}) => {

    return (
        <div className="card bg-white shadow-sm">
            <figure>
                <img
                className='h-36 p-5'
                src={ser.image}
                alt="Shoes" />
                
            </figure>
            <div className="p-5 my-2 flex flex-col items-center w-full">
                <h2 className="card-title">{ser.name}</h2>
                <p className='text-sm text-stone-700'>{ser.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary btn-block my-2">Explore Now</button>
                </div>
            </div>
</div>
    );
};

export default ServiceCard;