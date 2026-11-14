import React from 'react';

const Home = () => {
  return (
    <section id='home' className='min-h-screen bg-[#f8f7f3] px-6 py-20'>

        <div className='max-w-5xl mx-auto text-center flex flex-col items-center'>

            <p className='text-sm uppercase text-[#404040] mb-6'>
                Independent creative agency - London
            </p>

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#171717]
            leading-tight max-w-5xl'>
            We Create Brands That Leave a Lasting Impression.
            </h1>

            <p className='mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed'>
                We help ambitious brands find their voice through thoughtfull branding, intuitive
                digital experiences, and beautiful web design.
            </p>
            <div className='mt-10 flex flex-wrap items-center gap-4'>

                <a href='#services' className=' w-full bg-[#171717] text-white px-8 py-4 rounded-full text-sm 
                font-medium hover:bg-[#d66b45] transition'> Explore our Services</a>

                <a href='#contact' className=' w-full border border-[#171717] text-[#171717] px-8 py-4 rounded-full
                text-sm font-medium hover:bg-[#171717] hover:text-white transition'> Let's talk</a>

            </div>
        </div>
    </section>
  );
}

export default Home;
