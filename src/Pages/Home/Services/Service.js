import React from 'react';
import AOS from 'aos';

const Service = ({service}) => {
    const {name, description , img} = service;
    return (
        <div className="card bg-base-100 hover:bg-slate-700 text-white shadow-xl " data-aos="fade-up"
     data-aos-duration="3000">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;