import React, { useContext } from 'react'
import { theme } from '../Theme'

function Main_content() {
  let { tm } = useContext(theme)
  return (
    <>
      <section className={`text-center ${tm==='light' ? 'bg-[#1b1b1d] text-white' : 'bg-white'} h-[150vh]`}>
        <p className='md:w-[55%] m-auto text-[1.2rem] pt-10'>Learn more about Babel with our <span className='text-[#EEDA7C] hover:underline cursor-pointer'>getting started guide</span> or check out some <span className='text-[#EEDA7C] hover:underline cursor-pointer'>videos</span> on the people and concepts behind it.</p>
        <h1 className='text-[1.2rem] font-bold pt-20'>Current Sponsors</h1>
        <p className='md:w-[36%] m-auto pt-5'>We're a small group of <span className='text-[#EEDA7C] hover:underline cursor-pointer'>volunteers</span> that spend their free time maintaining this project, funded by the community. If Babel has benefited you in your work, becoming a <span className='text-[#EEDA7C] hover:underline cursor-pointer'>contributor</span> or <span className='text-[#EEDA7C] hover:underline cursor-pointer'>sponsoring</span> might just be a great way to give back!</p>
        <h1 className='text-[1.4rem] font-bold pt-5 pb-2'>Base Support</h1>
        <p>are currently pledging or have donated an average of {'>'}$2000/month in the last year</p>
        <div className='flex justify-center gap-5 pt-5'>
          <img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="" />
          <img src="https://images.opencollective.com/igalia/1c2e7cb/logo.png" alt="" />
        </div>
        <h1 className='text-[1.5rem] font-bold pt-10 pb-5'>Gold</h1>
        <p>are currently pledging or have donated an average of $1000-$2000/month in the last year</p>
        <div className='flex justify-center h-25 gap-5 mt-10'>
          <img src="https://images.opencollective.com/buy-google-reviews-usa/78797fd/logo.png" alt="" />
          <img src="https://images.opencollective.com/oc-javascript-fund/4e5d7a5/logo.png" alt="" />
          <img src="https://avatars.githubusercontent.com/u/1885080?s=200&v=4" alt="" />
          <img src="https://avatars.githubusercontent.com/u/3853301?s=200&v=4" alt="" />
        </div>
        <h1 className='text-[1.4rem] font-bold pt-10 py-5'>Silver</h1>
        <p className='pb-5'>are currently pledging or have donated an average of $500-$1000/month in the last year</p>
        <div className='flex h-12 justify-center gap-5 cursor-pointer w-[25vw] m-auto'>
          <img src="https://images.opencollective.com/codecademy/d56a48d/logo.png" alt="" /><img src="https://images.opencollective.com/turtlebet-nettikasinot/d4e220c/logo.png" alt="" /><img src="https://images.opencollective.com/sanity_io/558f87f/logo.png" alt="" /><img src="https://images.opencollective.com/media-mister/908143d/logo.png" alt="" /><img src="https://avatars.githubusercontent.com/u/9889795?s=200&v=4" alt="" /><img src="https://github.com/user-attachments/assets/002949fe-aa5e-4311-b77f-7f2c905e91f5" alt="" />
        </div>
      </section>
    </>
  )
}

export default Main_content