import React, { useEffect } from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import Aso from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        Aso.init()
    }, [])
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl " data-aos="fade-left" data-aos-duration="3000" alt='' />
                <div data-aos="fade-right" data-aos-duration="3000">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;