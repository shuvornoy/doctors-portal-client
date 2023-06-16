import React from 'react';
import about from '../../assets/images/about-left-image.png';
import { FiHelpCircle } from 'react-icons/fi';
import { GiLovers } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';

const About = () => {
    return (
        <div className='mx-5 py-[100px]'>
            <p className='text-[24px] font-medium text-[#636161] text-center'>More about us-</p>
            <h2 className='text-[60px] font-bold leading-[72px] text-center'>About Us</h2>
            <hr className='mt-[50px] h-[2px] bg-slate-500' />

            <div className='flex items-center mt-[100px]'>
                <div>
                    <img src={about} alt="about" />
                </div>
                <div>
                    <p className='text-[24px] font-medium text-[#636161]'>GET INFO-</p>
                    <div className='flex gap-6 mt-[30px]'>
                        <div className='w-[64px] h-[64px] rounded-full bg-white hover:text-white hover:bg-[#8dc2f1] border-[2px] border-[#8dc2f1] flex justify-center items-start'><span className='mt-2'> <FiHelpCircle size={40} /></span></div>
                        <div className='w-[600px]'>
                            <h2 className='text-[18px] font-bold'>HEALTH IS WEALTH</h2>
                            <p className='text-[16px] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque accusantium suscipit exercitationem.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-[50px]'>
                        <div className='w-[64px] h-[64px] rounded-full hover:text-white bg-white hover:bg-[#8dc2f1] border-[2px] border-[#8dc2f1] flex justify-center items-start'><span className='mt-2'><RiCustomerService2Fill size={40} /></span></div>
                        <div className='w-[600px]'>
                            <h2 className='text-[18px] font-bold'>CONTACT 7/24H</h2>
                            <p className='text-[16px] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque accusantium suscipit exercitationem.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-[50px]'>
                        <div className='w-[64px] h-[64px] rounded-full hover:text-white bg-white hover:bg-[#8dc2f1] border-[2px] border-[#8dc2f1] flex justify-center items-start'><span className='mt-2'><GiLovers size={40} /></span></div>
                        <div className='w-[600px]'>
                            <h2 className='text-[18px] font-bold'>HEALTH IS WEALTH</h2>
                            <p className='text-[16px] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque accusantium suscipit exercitationem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;