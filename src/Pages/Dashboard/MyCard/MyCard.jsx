import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCard = () => {
    const [cart,refetch] = useCart()
    console.log(cart)
    // how dose reduce work
const total = cart.reduce((sum,item ) => item.price+ sum, 0)

const handleDelete = item=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${item._id}`,{
                        method:'DELETE'
                    })
                    .then(res=> res.json())
                    .then(data =>{
                        if(data.deletedCount > 0){
                            refetch()
                        }
                    })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      })
}
    return (
       <div className='w-full'> 
         <Helmet>
                <title> Bistro Boss | MYCart</title>
            </Helmet>
           <div className='font-semibold flex justify-evenly h-[60px] items-center    '>
            <h3 className='text-3xl uppercase'>Total Items: {cart.length}</h3>
            <h3 className='text-3xl uppercase'>Total Price: ${total}</h3>
         <Link to='/dashboard/payment'><button className="btn btn-warning btn-small uppercase">Pay</button></Link>
           </div>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr >
        <th>
         #
        </th>
        <th>Food Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,i) => (
            <tr key={item._id}>
        <th>
        {i+1}
        </th>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
         {item.name} </td>
        <td className='text-end'>${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white "><FaTrashAlt /></button>
        </th>
      </tr>
        ) )
      }
      
    
    </tbody>
  
    
  </table>
</div>
       </div>
    );
};

export default MyCard;