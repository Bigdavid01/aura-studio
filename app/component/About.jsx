import React from 'react';

const About = () => {
  return (
    <section id='about' className='bg-white px-6 py-24'>

        <div className='max-w-7xl mx-auto text-center'>

            <p className='text-sm uppercase tracking-[0.3s] text-[#d66b45] mb-5'>
                Get to Know Us
            </p>

            <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-[#171717] max-w-3xl mx-auto'>
                We Turn Ideas Into Meaningful Experiences.
            </h2>

            <p className='mt-8 text-lg  text-gray-600 leading-relaxed max-w-3xl mx-auto'>
                Aura Studio is an independent creative agency based in London, dedicated to helping businesses 
                build strong and memorable identities. We combine creativity, strategy, and mordern
                design to transform ideas into meaningful brand experiences that connects with people.
            </p>
            <div className='mt-14 grid grid-cols-1 md-grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-xl font-bold text-[#171717]'>Creative Thinking
                    </h3>
                    <p className='mt-xl text-[#404040] leading-relaxed'>
                        We approach every project with fresh ideas and thoughtful strategy.
                    </p>
                </div>

                <div>
                    <h3 className='text-xl font-bold text-[#171717]'>Strategic Design
                    </h3>
                    <p className='mt-xl text-[#404040] leading-relaxed'>
                        We create purposeful designs that communicate clearly and make brands stand out.
                    </p>
                </div>

                <div>
                    <h3 className='text-xl font-bold text-[#171717]'>Lasting Impact
                    </h3>
                    <p className='mt-xl text-[#404040] leading-relaxed'>
                        We build meaningful experiences that help businesses connect with their audience.
                    </p>
                </div>

            </div>

        </div>

    </section>
  );
}

export default About;
