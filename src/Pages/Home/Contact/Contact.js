import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className='contact-container'>
        <div className="container mx-auto text-center">
          <div className='form_container'>
            <div className='mb-5'>
              <h5 className='text-primary text-3xl font-bold'>CONTACT US</h5>
              <h1 className='text-[18px] font-[700]'>Always Contact With Us</h1>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
    );
};

export default Contact;