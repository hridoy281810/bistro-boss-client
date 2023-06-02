import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu,,refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = item =>{
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
                axiosSecure.delete(`/menu/${item?._id}`)
                .then(res=>{
                    console.log('first',res.data)
                    if(res.data.deletedCount>0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                    }
                    refetch()
                })
            
            }
          })
    }
    return (
        <>
          <div className='w-full'>  <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>
          <div class="overflow-x-auto w-full">
  <table class="table w-full">
    <thead>
      <tr>
        <th> # </th>
        <th>Item</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        menu.map((item,i)=><tr key={item._id}>
        <th> {i+1} </th>
        <td>
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>{item?.name} </td>
        <td>{item?.category} </td>
        <td>${item?.price}</td>
        <td>
          <button class="btn btn-ghost btn-xs">details</button>
        </td>
        <td>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white "><FaTrashAlt /></button>
        </td>
      </tr> )
      }
      
    </tbody>
   
    
  </table>
</div>
           </div>
        </>
    );
};

export default ManageItems;