import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/myOrders?email=${user?.email}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const cancelOrder = (_id)=>{
        axios.delete(`http://localhost:5000/deleteBooking?email=${user?.email}&_id=${_id}`)
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
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
            data.map(item=>{
                return <>
                  <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                    <div className="max-w-[150px]">
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

          
        </table>
      </div>
    );
};

export default MyOrders;