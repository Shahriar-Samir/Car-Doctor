import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import useAxios from "../Hooks/useAxios";

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const axios = useAxios()
    const [data,setData] = useState([])
    const [count,setCount] = useState(0)
    useEffect(()=>{
        axios.get(`/myOrders?email=${user?.email}`, {withCredentials:true})
        .then(res=>{
            setData(res.data)
            setCount(res.data.length)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const cancelOrder = (_id)=>{
        setCount(count-1)
        document.getElementById(_id).style.display = 'none'
        axios.delete(`/deleteBooking?email=${user?.email}&_id=${_id}`)
        .then(res=>{
            toast.success("Order canceled")
        })
        .catch(err=>{
            console.log(err)
            toast.error('Something went wrong')
        })
    }

    return (
        <div className="overflow-x-auto mt-16 mb-16">
          <ToastContainer/>
      { count> 0 ?<table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
          {
       data.map(item=>{
                return <>
                  <tr id={item._id}>
              <td>
                <div className="flex items-center gap-3">
                    <div className="w-[200px] max-w-[150px]">
                      <img className="w-full" src={item.image} />
                    </div>
                  <div>
                    <div className="font-bold">{item.service}</div>
                  </div>
                </div>
              </td>
              <td>
                {item.customerName}
                <br/>
              </td>
              <td>${item.price}</td>
              <th>
                <button className="btn bg-red-600 text-white" onClick={()=>{ cancelOrder(item._id)}}>Cancel</button>
              </th>
            </tr>
                </>
            }) 
          } 
         
          </tbody>

          
        </table> : <div className="h-[50vh]">
                    <p className="text-center">You have not ordered any service</p>
                </div>}
      </div>
    );
};

export default MyOrders;