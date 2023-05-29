import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image from '../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <div className='py-8 '>
            <SectionTitle 
          subHeading={'Should Try-'} heading={'CHEF RECOMMENDS'}
        ></SectionTitle>
       
 <div className=' md:grid grid-cols-3'>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
  <div className="flex flex-col justify-center py-8 px-10">
    <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
    <p className='text-center '>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex justify-center mt-6 ">
    <button className="btn btn-outline border-0 border-b-4 text-orange-400 ">add to cart</button>
    </div>
  </div>
</div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
  <div className="flex flex-col justify-center py-8 px-10">
    <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
    <p className='text-center '>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex justify-center mt-6 ">
    <button className="btn btn-outline border-0 border-b-4 text-orange-400 ">add to cart</button>
    </div>
  </div>
</div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
  <div className="flex flex-col justify-center py-8 px-10">
    <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
    <p className='text-center '>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex justify-center mt-6 ">
    <button className="btn btn-outline border-0 border-b-4 text-orange-400 ">add to cart</button>
    </div>
  </div>
</div>
 </div>
        </div>
    );
};

export default ChefRecommends;