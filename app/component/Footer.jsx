import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#171717] text-white px-6 py-12'>
        <div className='max-w-7xl mx-auto'>

            <div className='flex flex-col md:flex-row justify-between items-center gap-8  '>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>AURA
                        <span className='text-[#d66b45]'>.</span>
                    </h2>
                    <p className='mt-2 text-gray-300 text-sm'>
                        Bringing Ideas to Life.
                    </p>
                </div>
                <p className='text-gray-300 text-sm'>London, United Kingdom</p>
            </div>

            <div className='mt-10 pt-8 border border-gray-700 flex flex-col md:flex-row justify-between
             px-8 py-8 items-ceneter gap-5 md:px-50'>
                <div className='flex gap-6 text-sm text-gray-300 '>
                    <a href='#home' className='hoveer:text-[#d66b45] transition '>Home</a>
                    <a href='#about' className='hoveer:text-[#d66b45] transition'>About</a>
                    <a href='#services' className='hoveer:text-[#d66b45] transition'>Services</a>
                    <a href='#contact' className='hoveer:text-[#d66b45] transition'>Contact</a>
                </div>
                <p className='text-gray-400 text-sm'>
                    &copy; 2026 Aura Studio. All rights reserved.
                </p>
            </div>
        </div>

    </footer>
  );
}

export default Footer;
