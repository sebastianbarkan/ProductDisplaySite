import React from 'react';
import { Link } from 'gatsby';
import Header from '../../components/header';
import MultiHeader from '../../components/MultiHeader'
import MultiFooter from '../../components/MultiFooter'
function MultiTemplate() {
  return (
        <>
            <div className='multi-header'>
                  <MultiHeader />
                  <div className='multi-company-description-wrap'>
                        <div className='multi-company-description-container'>
                              <h1 className='multi-company-description-title'>Top-Rated Restoration</h1>
                              <p className='multi-company-description'>
                                    As a water damage company that has helped countless families in Auburn Hills MI, we know the stress and panic that is involved when dealing with a water damage emergency. We also know you have options when looking for a water damage restoration company near you. We thank you for choosing The Restoration Doctor for all your cleanup needs. If you’re experiencing a flooding crisis, call us immediately!
                              </p>
                        </div>
                        <div className='multi-company-description-wrap-2'>
                              <div className='multi-company-description-container-2'>
                                    <img src='https://www.restorationdoctorus.com/wp-content/uploads/2020/11/water-damage-restoration-company.jpg' alt=''></img>
                                    <div className='multi-company-description-2-text'>
                                          <h1>	Broken, Burst, & Frozen Pipes in Auburn Hills MI </h1>
                                          <p>
                                                Winter can be the most devastating time of year for emergencies in Auburn Hills MI. Over a quarter of a million American homes each year will suffer from damage due to frozen or burst pipes. A frozen, broken or leaky pipe are all inconveniences that can lead to major headaches for your home. Ignoring these repairs can be extremely costly as liquids can lead to an unstable structure and damage of your valuables. If you are experiencing a burst or frozen pipe or any other flooding, give us a call so we can get started on the cleanup as soon as possible.
                                                <br></br>
                                                Water pipe bursts are common in areas of extreme winter cold and high winds that drive the wind chill well below freezing temperatures. Pipes that lack proper insulation and are exposed to the winter’s cold are far more likely to create a need for restoration. Homes that are left vacant with no regulating of heat or poorly insulated walls can be a common culprit of frozen water pipes and frozen water lines in the winter time. Broken pipes can also be common cause of damage, causing gallons to come flooding through your living rooms, bedrooms, kitchen and bathroom.      
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className='multi-testimonial-wrap'>
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
                  </div>
            </div>
            <MultiFooter />
        </>
  );
}

export default MultiTemplate