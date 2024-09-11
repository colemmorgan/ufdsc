import React from 'react';

type NavProps = {
    
};

const Nav:React.FC<NavProps> = () => {
    
    return (
        <nav className='shadow-nav bg-white h-[68px] flex justify-between items-center px-10 fixed top-0 left-0 right-0 z-10'>
            <figure className='w-36'>
                <img src="/photos/dsc.png" alt="" />
            </figure>
            <ul className='flex gap-6 text-black text-sm '>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Officers</a></li>
                <li><a href="">Become a Member</a></li>
            </ul>

        </nav>
    )
}
export default Nav;