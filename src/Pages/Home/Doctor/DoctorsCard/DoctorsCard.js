import React from 'react';


const DoctorsCard = ({doctor}) => {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 text-center'>
            <div className='mx-3'>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card border-0">
                <img className="card-img-top imgsize" src={doctor.image} alt="Card cap"/>
                <div className="card-body">
                    <h5 className='mt-3'>{doctor.name}</h5>
                    <p className='text-secondary'>{doctor.phone}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;