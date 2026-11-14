import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='bg-white px-6 py-24'>

        <div className='max-w-7xl mx-auto text-center'>
            <p className='text-sm uppercase tracking-[0.3em] text-[#d66b45] mb-5'> Get In Touch</p>

            <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-[#171717] max-w-3xl mx-auto'>
                Let's Create Something Greate Together.
            </h2>

            <p className='mt-6 text-lg text-[#404040] leading-relaxed max-w-2xl mx-auto'>
                Have a project in mind or want to explore a creative partnership? We'd love to hear from you. Let's have a conversation.
            </p>
            <div className='mt-12 max-w-2xl mx-auto text-left'>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-[#171717] mb-2'>Your Name</label>
                        <input type="text"id='name'name='name'placeholder='Enter your name'
                        className='w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#d66b45] 
                        transition text-[#d66b45]' required />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-[#171717] mb-2'>Email Address</label>
                        <input type="email"id='email'name='email'placeholder='Enter Enter your Email Address'
                        className='w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#d66b45] 
                        transition text-[#d66b45]' required />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-[#171717] mb-2'>Your message</label>
                        <textarea id='message' name='message' rows='5' placeholder='Tell us about your project...'
                        className='w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#d6645] transition resize-none text-[#d66b45]' required/>
                    </div>
                    <button type='submit' className='w-full bg-[#171717] text-white py-4 rounded-xl text-sm
                    font-medim hover:bg-[#d66b45] transition text-center'>Send Message</button>
                </form>

            </div>
        </div>

    </section>
  );
}

export default Contact;
