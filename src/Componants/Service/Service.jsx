import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Pages/ServiceCard/ServiceCard';

const Service = () => {
    const [data,setData]=useState([])

useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
        },[])

    return (
        <div className='mt-36 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {data.map(ser=><ServiceCard
        key={ser._id}
        ser={ser}
        ></ServiceCard>)}
        </div>
    );
};

export default Service;