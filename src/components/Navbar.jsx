import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {GrProjects} from 'react-icons/gr'

const Navbar = () => {

    // toggle for the nav display
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };
    
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a 
                            href="#main" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>

                        <a 
                            href="#main" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <GoPerson size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>

                        <a 
                            href="#main" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <GrProjects size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>

                        <a 
                            href="#main" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contacts</span>
                        </a>

                    </div>
                )
                : (
                    ''
                )}

                <div>
                    
                </div>
        </div>
    );
};

export default Navbar;