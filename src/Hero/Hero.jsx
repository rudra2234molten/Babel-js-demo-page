import React from 'react'

function Hero() {
  return (
    <>
      <section className='h-[95vh] w-[100vw] bg-[url(https://babeljs.io/assets/images/babel-black-55a58566f5eb08323296afab89589da9.svg)] bg-center bg-no-repeat bg-cover relative'>
        <div className='h-full w-full absolute bg-[#3b3c38] opacity-95 '></div>
        <div className='h-auto w-full text-amber-50 absolute text-center md:top-20 top-12'>
          <h1 className='bg-[#626980] p-3 uppercase md:max-w-[20%] md:ml-auto md:rounded-tl-4xl md:rounded-bl-4xl'>Get Babel Holiday Apparel 👕</h1>
          <h1 className='text-[#f5da55] lg:text-[4rem] md:text-[3rem] sm:text-5xl w-[70%] m-auto text-3xl font-bold'>Babel is a JavaScript compiler.</h1>
          <h4 className='sm:text-3xl text-[1.2rem] font-semibold pb-15 pt-2.5'>Use next generation JavaScript, today.</h4>
          <p className='bg-[#eeda7c] md:max-w-[45rem] max-w-[28rem]  m-auto p-2.5 rounded-3xl'><span className='font-bold text-black'>Babel 7.26 is released!</span><span className='text-neutral-800'>Please read our <span className='underline cursor-pointer'>blog post</span> for highlights and <span className='underline cursor-pointer'>changelog</span> for more details!</span></p>
          <div className='grid md:grid-cols-2 text-left justify-center  h-auto sm:w-[60%] m-auto mt-5'>
            <div className='border-gray-500 border-2 h-40 sm:h-68 bg-[#1d1f21]'>
              <h3 className='bg-[#353634] md:py-3 md:px-5 py-2 text-center sm:text-left text-[#b3afa7] font-bold'>Put in next-gen JavaScript</h3>
              <p className='typing-animation md:p-5 p-5'><span className='text-[#a47e8f]'>let</span> yourTurn = <span className='text-[#a47e8f]'>throw</span> <span className='text-[#aeb05c] font-semibold'>"some code in here!"</span></p>
            </div>
            <div className='border-gray-500 border-2 h-40 sm:h-68 bg-[#1d1f21]'>
              <h3 className='bg-[#353634] md:py-3 md:px-5 py-2 text-center sm:text-left text-[#b3afa7] font-bold'>Put in next-gen JavaScript</h3>
              <p className='typing-animation md:p-5 p-5'><span className='text-[#a47e8f]'>let</span> yourTurn = <span className='text-[#a47e8f]'>function</span> (e) {'{'} <br /> <span className='text-[#a47e8f]'>throw</span> e; <br /> {'}'};(<span className='text-[#aeb05c] font-semibold'>"some code in here!"</span>);</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero