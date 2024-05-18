import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Service = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:5000/services')
            .then(res=>{
                setData(res.data)
            })
            .catch(()=>{
                toast.error("Something went wrong")
            })
    },[])

    return (
        <div className='mt-32'>
            <ToastContainer/>
            <h1 className='text-common-color font-semibold text-center'>Service</h1>
            <h1 className='text-4xl font-bold mt-4 text-center'>Our Service Area</h1>
            <p className='text-center max-w-[700px] mx-auto mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla obcaecati reprehenderit reiciendis excepturi maxime dolor aspernatur aperiam sint laudantium magni?</p>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    data.map(item=>{
                        return <Card item={item} key={item._id}/>
                    })
                }
            </div>
                <button className='text-common-color border-2 border-common-color p-4 mt-[50px] mx-auto block'>More Services</button>
        </div>
    );
};

export default Service;

const Card = ({item})=>{
    const {img, title, _id} = item
    return(
        <div className="card bg-base-100 border border-gray-400">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <div className='flex justify-start w-full'>
    <h2 className="card-title">{title}</h2>
    </div>
 
    <div className="card-actions justify-between w-full items-center font-semibold mt-5">  
    <h1 className='text-common-color'>Price: $20.00</h1>
      <Link to={`/checkout/${_id}`}><button className="text-common-color text-xl"><FiArrowRight /></button></Link>
    </div>
  </div>
</div>
    )   
}