import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';

// TODO: provide publish key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
console.log(stripePromise)
const Payment = () => {
    const [cart,] = useCart()
    const total = cart.reduce((sum,item)=>sum + item.price,0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <SectionTitle subHeading={"please process"} heading={"Payment"}></SectionTitle>
            <h2 className='text-3xl'>Taka o taka tumi uira uira aso</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;