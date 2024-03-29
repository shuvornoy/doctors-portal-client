import React from 'react';

const SupportOption = ({ appointmentOption, setTreatment }) => {
    const { name,  slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <div className="card-actions justify-center">
                  <a href="https://meet.google.com/qja-vsgq-oqc">
                  <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                    >Join now</label>
                  </a>
                </div>
            </div>
        </div>
    );
};


export default SupportOption;