import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
import bkash from '../../../assets/images/BKash_Logo.svg';
import nagat from '../../../assets/images/Nagad.svg';
import roket from '../../../assets/images/ro.png';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div className='px-6 xl:px-0'>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
            <div className='flex gap-4'>
                <img className='md:h-[70px] h-[50px] cursor-pointer' src={bkash} alt="bkash" />
                <img className='md:h-[70px] h-[50px] cursor-pointer' src={nagat} alt="nagat" />
                <img className='md:h-[50px] h-[40px] cursor-pointer' src={roket} alt="roket" />
            </div>
        </div>
    );
};

export default Payment;