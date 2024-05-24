
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import useAxios from '../Hooks/useAxios';
import { Helmet } from 'react-helmet-async';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const {data} = useLoaderData()
    const {title,price,_id,img} = data
    const axios = useAxios()

    const submitOrder = (e) =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const date = form.date.value 
        const email = form.email.value
     

        const data = {
            customerName : name,
            email,
            date,
            serviceId: _id,
            price : price,
            service: title,
            image: img
        }
        axios.post('/bookOrder', data)
        .then(res=>{
            toast.success('Order booked successfully')
        })
        .catch(err=>{
            toast.error('Something went wrong')
        })
    }


    return (
       <div>
              <Helmet>
        <title>Car Doctor || Checkout</title>
      </Helmet>
        <ToastContainer/>
        <PageBanner title={'Check Out'}/>
        <div className='bg-gray-100 p-8 lg:p-32 rounded-lg mb-28 mt-28'>
            <h1 className='text-xl font-bold'>Book Service : {title}</h1>
         <form className="card-body grid grid-cols-1 lg:grid-cols-2 gap-10 p-0 mt-5" onSubmit={submitOrder}>
        <div className="form-control">
          <input type="text" placeholder="Name" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="date" placeholder="Date of Order" name='date' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="Email" name='email' defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <input type='number' name='price' value={price} placeholder='Due Amount' className='input input-bordered' required/>
        </div>
        <div className="form-control mt-6 w-full col-span-1 lg:col-span-2">
          <button className="btn bg-common-color text-white w-full">Order Confirm</button>
        </div>
      </form>
      </div>
       </div>
    );
};

export default CheckOut;