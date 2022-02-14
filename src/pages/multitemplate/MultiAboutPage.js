import React, { useState } from 'react'
import MultiHeader from '../../components/MultiHeader'
import MultiFooter from '../../components/Multifooter'

function MultiAboutPage() {
  const [headerText, setHeaderText] = useState('About Us')
  return (
    <>
      <MultiHeader headerText={headerText}/>
      <div className='multi-about-content-wrap'>
          <h1 className='multi-about-title'>#1 Water <span className='multi-about-span'>Restoration Company</span></h1>
          <p className='multi-about-text'>	
            As a water damage company that has helped countless families, we know the stress and panic that is involved when dealing with a water damage emergency. We also know you have options when looking for a water damage restoration company near you. We thank you for choosing The Restoration Doctor for all your cleanup needs. If you’re experiencing a flooding crisis, call us immediately!
          </p>
          <div className='multi-about-items-wrap'>
            <h2 className='multi-about-item'>24/7 Emergency Service</h2>
            <h2 className='multi-about-item'>We Work Directly with Your Insurance</h2>
            <h2 className='multi-about-item'>Easy Financing</h2>
          </div>
      </div>
      <div className='multi-about-content-2-wrap'>
          <div className='multi-about-content-2-left'>
              <div className='multi-about-content-2-container'>             
                <h3 className='multi-about-content-2-toptitle'>Helping You</h3>
                <hr className='multi-about-hr'></hr>
                <h2 className='multi-about-content-2-bottomtitle'>Getting Back on Your Feet</h2>
              </div>
                <p className='multi-about-content-2-left-text'>	
                    At The Restoration Doctor, we are on call 24/7 with a water removal specialist available around the clock. We guarantee water removal in three hours or less. This is on average 3 times faster than our competitors. By responding quickly to flooding in your home, you can reduce the overall cost of the water damage repair. The Restoration Doctor is ready to handle all of your flood damage cleanup needs in a timely and cost effective manner.
                    <hr className='multi-about-hr-2'></hr>
                    We stand by you through every part of the process including water extraction, water restoration, and any other water removal services that your crisis requires. You get the best residential or commercial property restoration with The Restoration Doctor’s water mitigation services. Contact us today for any water or flood damage cleanup emergency, and our friendly staff will be on-site in under 2 hours.
                </p>
          </div>
          <div className='multi-about-content-2-right'>

          </div>
      </div>
      <div className='multi-testimonial-wrap-about'>
                              <div className='multi-testimonial-container'>
                                    <h3>Testimonials</h3>
                                    <hr className='multi-testimonial-hr'></hr>
                                    <h1 className='multi-testimonial-subheading'>From Our <span id='multiTestimonialSpan'>Customers</span></h1>
                                    <div className='multi-testimonial-item'>
                                          <p>To say the Restoration Doctor did an amazing job is an understatement. Not only did they restore my house within the promised time frame, they also did all the work of dealing with my insurance. Thanks for everything.</p>
                                          <h3 className='multi-testimonial-author'>-Stephanie A.</h3>
                                    </div>
                                    <div className='multi-testimonial-item'>
                                          <p>To say the Restoration Doctor did an amazing job is an understatement. Not only did they restore my house within the promised time frame, they also did all the work of dealing with my insurance. Thanks for everything.</p>
                                          <h3 className='multi-testimonial-author'>-Stephanie A.</h3>
                                    </div>
                              </div>      
                        </div>
      <MultiFooter />
    </>
  )
}

export default MultiAboutPage