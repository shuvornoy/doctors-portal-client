import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import SupportOption from './SupportOption';
import Banner from '../Home/Banner/Banner';
import InfoCards from '../Home/InfoCards/InfoCards';

const Support = () => {
    
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('https://modul-71-doctors-portal-server.vercel.app/v2/appointmentOptions?date=');
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>

    }
    
    return (
        <div className='my-32'>
            <h1 className='text-center text-3xl font-bold text-primary'>Our Supported Doctor</h1>

        

             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <SupportOption
                        key={option._id}
                        appointmentOption={option}
                    ></SupportOption>) 
                }
            </div>
        </div>
    );
};

export default Support;