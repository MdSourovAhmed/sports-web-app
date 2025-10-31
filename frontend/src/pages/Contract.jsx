import React from 'react'
import Title from '../components/Title'
import NewsLatterBox from '../components/NewsLatterBox'

const Contract = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-gray-400'>
        <Title t1={'CONTRACT'} t2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img src="" className='w-full md:max-w-[480px] ' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Sabur Khan Market (3rd Floor) <br/> Tangail Sadar</p>
          <p className='text-gray-500'>Phone: +8801764-927457 <br/> Email: contract@letsplaypro.com </p>
          <p className='text-gray-600 font-semibold text-xl'>Carrer at LetsPlayPro</p>
          <p className='text-gray-500'>Learn more about us.</p>
          <button className='border border-black cursor-pointer px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore Us</button>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default Contract
