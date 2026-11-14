import React from 'react';

const Services = () => {
  return (
    <section id='services' className='bg-[#f8f7f3] px-6 py-24'>
        <div className='max-w-7xl mx-auto text-center'>

            <p className='text-sm uppercase tracking-[0.3em] text-[#d66b45] mb-5'>
                What We Do
            </p>

            <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-[#171717] max-w-3xl mx-auto'>
                Creative solutions for Ambitious brands.
            </h2>

            <p className='mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto'>
                From building memorable identities to designing digital experiences, we help brands make a lasting impression.
            </p>

            <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-6'>

                <div className='bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition'>
                    <span className='text-[#d66b45] text-sm font-semibold'>01</span>
                    <h3 className='mt-8 text-2xl font-bold text-[#171717]'>Branding</h3>
                    <p className='mt-4 text-gray-600 leading-relaxed'>
                        We build distinctive brand identities that communicate your values, personalities and vision.
                    </p>
                </div>
                <div className='bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition'>
                    <span className='text-[#d66b45] text-sm font-semibold'>02</span>
                    <h3 className='mt-8 text-2xl font-bold text-[#171717]'>Design</h3>
                    <p className='mt-4 text-gray-600 leading-relaxed'>
                        We design intuitive and engaging digital experiences that make every interaction simple and enjoyable.
                    </p>
                </div>
                <div className='bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition'>
                    <span className='text-[#d66b45] text-sm font-semibold'>03</span>
                    <h3 className='mt-8 text-2xl font-bold text-[#171717]'>Web Design</h3>
                    <p className='mt-4 text-gray-600 leading-relaxed'>
                        We create mordern, responsive websites that bring brands to life and turn visitors into customers.
                    </p>
                </div>
            </div>

        </div>

    </section>
  );
}

export default Services;
