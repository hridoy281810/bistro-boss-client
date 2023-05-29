import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [,refetch] = useCart()
    const {image,price,recipe,name,_id} = item;
    const location = useLocation()
    const handleAddToCard = item =>{
console.log('clg1',item)
if(user && user.email){
  console.log(1)
  const cartItem = {menuItemId: _id,image,price,name, email: user.email}
  fetch(`http://localhost:5000/carts`,{
   method: 'POST',
   headers:{
    'content-type': 'application/json'
   },

   body: JSON.stringify(cartItem)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      refetch(); // refetch cart to update the number of item in the cart 
      Swal.fire(
        'Food added on the cart',
        'You clicked the button!',
        'success'
      )
    }
  })
}else{
  console.log(2)
  Swal.fire({
    title: 'Please login to order the food',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Login Now'
  }).then((result) => {
    if (result.isConfirmed) {
    navigate('/login',{state:{ from: location }})
    }
  })
}

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='w-full' src={image} alt="Shoes" /></figure>
        <p className='bg-slate-600 absolute right-0 mr-4 mt-4 px-4 rounded text-white'>${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <Link  className='flex justify-center'><button onClick={()=>handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100  mt-4 ">ADD TO Card</button></Link>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;