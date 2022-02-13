import { Link } from 'gatsby';
import * as React from 'react';

 function Singletemplate() {
   return (
        <>
            <div className='single-background'>
                <div className='single-header'>
                    <h1 id='singleLogo'>LOGO</h1>
                    <Link className='link'><h2 className='single-header-link'>Home</h2></Link>
                    <Link className='link'><h2 className='single-header-link'><strong>Services</strong></h2></Link>
                    <Link className='link' to='/singletemplate/SingleAbout/'><h2 className='single-header-link'>About</h2></Link>
                    <Link className='link' to='/singletemplate/SingleBlog/'><h2 className='single-header-link'>Blog</h2></Link>
                    <Link className='link' to='/singletemplate/SingleContact/'><h2 className='single-header-link'>Contact</h2></Link>
                    <button id='singleNumber'><h2>(xxx)xxx-xxxx</h2></button>
                </div>
                <div className='single-hero-content'>
                    <h1 id='singleHeroDescriptor'>Water & Fire Property Restoration</h1> 
                    <h1 id='singleHeroLocation'>in Ann Arbor, MI</h1>
                    <p id='singleHeroLabel'>Friendly Arbor Restoration Offers Water Damage, Fire Damage, Mold Remediation Services, Flood Damage Restoration, and More In Ann Arbor, Michigan.</p>
                </div>
            </div>
            <div className='single-business-description'>
                <div className='single-business-left'>
                    <img src='https://friendlyarborrestoration.com/wp-content/uploads/2021/12/daniel-tausis-loeqHoa1uWY-unsplash-1024x684.jpg' alt='' className='single-business-img'></img>
                </div>
                <div className='single-business-right'>
                    <h1>Your Local Ann Arbor Restoration Company</h1>
                    <p className='single-business-text'>

                        Have you or your business experienced water or fire damage?
                        Water damage can come from many sources. A broken pipe, sewage backup, or even a leaky roof can cause water damage to your home or commercial space. When this happens, you need the help of professionals who are experienced in property restoration. 

                        Friendly Arbor Restoration specializes in residential and commercial restoration across Ann Arbor. We have a wide range of clients, including hotels, apartment complexes, schools, churches and hospitals. No matter the size or scope of the water damage issue, we have the tools, equipment and expertise to get the job done right.

                        Contact us today for a free estimate!

                        Our water damage services include:

                        Water Removal
                        Water mitigation
                        Structural drying
                        Documentation & record keeping
                        Water Testing
                        Mold Remediation
                        Organization & Debris Removal

                        Contact us today for a free consultation on how we can help you get back to normal after water or fire damage strikes.

                        24-Hour Emergency Water Damage Restoration & Property Management Services
                        We understand that stormy weather can make it hard to plan ahead for emergencies. That’s why we provide 24-hour emergency service to help when water damage strikes. We’ve been providing property management services in Michigan since 1985, so we’re well equipped to handle any management situation you may find yourself facing. In addition to providing property management services, we also:
                    </p>
                </div>
            </div>

            <div className='single-services-content'>
                    <h1 id='singleServicesLabel'>Our Services</h1>
                    <div className='single-service-items'>
                        <div className='single-services-item'>
                            <div className='single-service-item-content'>
                                <h1 className='single-service-item-label'>Water Damage Restoration</h1>
                                <button className='single-service-item-button'>Learn More</button>
                            </div>
                        </div>
                        <div className='single-services-item'>
                                <div className='single-service-item-content'>
                                    <h1 className='single-service-item-label'>Fire Damage Restoration</h1>
                                    <button className='single-service-item-button'>Learn More</button>
                                </div>
                        </div>
                        <div className='single-services-item'>
                                <div className='single-service-item-content'>
                                    <h1 className='single-service-item-label'>Mold Removal Services</h1>
                                    <button className='single-service-item-button'>Learn More</button>
                                </div>
                        </div>
                        <div className='single-services-item'>
                                <div className='single-service-item-content'>
                                    <h1 className='single-service-item-label'>Flood Damage Restoration</h1>
                                    <button className='single-service-item-button'>Learn More</button>
                                </div>
                        </div>
                    </div>
            </div>

            <div className='single-review-wrap'>
                <h1 className='single-review-label'>Customer Reviews</h1>
                <div className='single-review-content-wrap'>
                    <div className='single-review-item'>
                        <p className='single-review-text'>"My house had a pipe burst and there was water damage throughout a couple of rooms. I had no idea what to do and thought I was going to have to live out of a hotel for at least a month. Fortunately, I was able to get in touch with Friendly Arbor Restoration. They explained how everything would go and what their pricing structure would be. Their estimate was very reasonable and within two days, they had most of the water damage issues resolved. I'm so grateful for what they did for me and can't recommend them enough!"</p>
                        <h1 className='single-review-name'>Nicole G.</h1>
                    </div>
                    <div className='single-review-item'>
                    <p className='single-review-text'>"My house flooded and I had no idea where to start. My wife and I did our research online, and we came across Friendly Arbor Restoration. They walked me through the entire process and were so patient while explaining everything. Their pricing structure was very fair, and they were incredibly flexible. I was able to get everything taken care of before I had to leave for a trip, and they stayed"</p>
                        <h1 className='single-review-name'>Lewis A.</h1>
                    </div>
                    <div className='single-review-item'>
                    <p className='single-review-text'>"It was a pleasure to deal with Friendly Arbor Restoration when we needed our home cleaned after a fire. They were extremely responsive, helpful and compassionate throughout the process, and really made sure we were happy with the work they were doing. Once the cleaning was complete, they left it to us to decide whether or not we wanted them to replace the carpet and other drywall damaged by the fire. Unlike another company we dealt with that was pushy, they let us do what we wanted to do with the cleaned areas of the house, which I appreciated."</p>
                        <h1 className='single-review-name'>Andy T.</h1>
                    </div>
                </div>
            </div>

            <div className='single-footer'>
                <p>Copyright © 2022 Ann Arbor Water, Flood, and Fire Damage Restoration</p>
                <p>Call 24/7: (734) 802-2678</p>
            </div>    

        </>
    );
}


export default Singletemplate