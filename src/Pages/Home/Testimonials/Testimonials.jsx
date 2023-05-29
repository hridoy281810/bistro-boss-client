import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import group from '../../../assets/icon/Group.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/review')
     .then(res => res.json())
     .then(data =>{
        setReviews(data)
     })
    },[])
    return (
        <div className="my-20">
            <SectionTitle 
            subHeading={'What Our Clients Say'}
            heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {
        reviews.map(review =>   <SwiperSlide key={review._id} >
            <div className="flex flex-col items-center my-16 mx-20  ">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />  
    <img className="pt-6" src={group} alt="" />
           <p className="py-6">{review.details}</p>
           <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)
      }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;