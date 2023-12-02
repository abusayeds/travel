import React from 'react';
import img from '../../../public/travel logo.jpg'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faX } from '@fortawesome/free-solid-svg-icons';


const NavberPage = () => {
    return (
        <div className=' flex items-center w-5/6 m-auto justify-between '>
           
            
             <div className=' flex items-center gap-10 '>
              <Image className='w-12' src={img}></Image>
              <div className='flex items-center gap-2'>

                <p className='text-xl font-bold'>Travel </p>
                <small className='h-4 w-4'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></small>
                
            
              </div>
            
             
          
            
             
            </div> 
            <div className='flex justify-between gap-20'>
            <p>Login </p>
            <p>Profile</p>
            </div>
            
        </div>
    );
};

export default NavberPage;