import React from 'react';
import { Link } from 'gatsby';
import Header from '../../components/header';
import MultiHeader from '../../components/MultiHeader'
import MultiFooter from '../../components/Multifooter'

function MultiTemplate({location}) {
      console.log(location)
      return (
        <>
            <div className='multi-header'>
                  <MultiHeader number={location.state.phoneInput}></MultiHeader>
                  <div className='multi-company-description-wrap'>
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
                        <div className='multi-company-description-3-wrap'>
                              <div className='multi-company-description-3-container'>
                                    <h1 className='multi-company-description-3-title'>Why Choose the Restoration Doctor?</h1>
                                    <div className='multi-company-description-3-content'>
                                          <div>
                                                <p className='multi-company-description-3-text'>
                                                      As a water damage company that has helped countless families, we know the stress and panic that is involved when dealing with a water damage emergency. We also know you have options when looking for a water damage restoration company near you. We thank you for choosing The Restoration Doctor for all your cleanup needs.
                                                </p>
                                                <div className='multi-company-description-3-bottomcontent'>
                                                 <div className='multi-company-description-3-buttonwrap'>
                                                      <div className='multi-company-description-3-linkwrap-1'>
                                                            {/*<Link className='multi-company-description-3-link-1'>About Us</Link>*/}
                                                      </div>
                                                      <div className='multi-company-description-3-linkwrap-2'>
                                                            {/*<Link className='multi-company-description-3-link-2'>Our Services</Link>*/}
                                                      </div>
                                                </div>
                                    </div>

                                          </div>
                                          
                                          <div className='multi-company-description-3-sidecontent'>
                                        
                                          </div>
                                          
                                    </div>
                            
                                  
                              </div>
                        </div>
                        <div className='multi-company-description-wrap'>
                              <div className='multi-company-description-container'>
                                    <h1 className='multi-company-description-title'>Top-Rated Restoration</h1>
                                    <p className='multi-company-description'>
                                          As a water damage company that has helped countless families in Auburn Hills MI, we know the stress and panic that is involved when dealing with a water damage emergency. We also know you have options when looking for a water damage restoration company near you. We thank you for choosing The Restoration Doctor for all your cleanup needs. If you’re experiencing a flooding crisis, call us immediately!
                                    </p>
                              </div>
                        </div>
                        <div className='multi-company-description-wrap'>
                              <div className='multi-company-description-container'>
                                    <h1 className='multi-company-description-title'>Top-Rated Restoration</h1>
                                    <p className='multi-company-description'>
                                          As a water damage company that has helped countless families in Auburn Hills MI, we know the stress and panic that is involved when dealing with a water damage emergency. We also know you have options when looking for a water damage restoration company near you. We thank you for choosing The Restoration Doctor for all your cleanup needs. If you’re experiencing a flooding crisis, call us immediately!
                                    </p>
                              </div>
                        </div>
                        <div className='multi-company-img-wrap'>
                              <div className='multi-company-img-container'>

                              </div>
                        </div>
                     
                  </div>
            </div>
            
            <MultiFooter />
        </>
  );
}

export default MultiTemplate