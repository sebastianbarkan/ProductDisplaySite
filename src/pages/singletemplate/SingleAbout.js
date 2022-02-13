import * as React from 'react';
import {Link} from 'gatsby';

function SingleAbout() {
  return (
      <>
            <div className='single-header'>
                    <h1 id='singleLogo'>LOGO</h1>
                    <Link className='link' to='/singletemplate/Singletemplate/'><h2 className='single-header-link'>Home</h2></Link>
                    <Link className='link'><h2 className='single-header-link'><strong>Services</strong></h2></Link>
                    <Link className='link' to='/singletemplate/SingleAbout/'><h2 className='single-header-link'>About</h2></Link>
                    <Link className='link' to='/singletemplate/SingleBlog/'><h2 className='single-header-link'>Blog</h2></Link>
                    <Link className='link' to='/singletemplate/SingleContact/'><h2 className='single-header-link'>Contact</h2></Link>
                    <button id='singleNumber'><h2>(xxx)xxx-xxxx</h2></button>
            </div>
            
            <div className='single-about-hero-wrap'>
                <div className='single-about-hero'>
                    <div className='single-about-label-wrap'>
                        <h1 id='singleAboutLabel'>Who We Are</h1>
                    </div>
                    <div className='single-about-number-wrap'>
                        <div className='single-about-number'>
                                <h2>Toll Free Call</h2>
                                <h1>+1 (XXX) XXX-XXXX</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single-about-content'>
                <div className='single-about-content-text'>
                    <h1 id='singleAboutContentLabel'>Who We Are</h1>
                    <p id='singleAboutText'>
                            Our name is Friendly Arbor Restoration. We are a local water damage restoration and fire cleanup company, though that’s not the half of it. We provide a comprehensive approach to property restoration. We have created four articles that paint a picture of our restoration services. This page shares more about who we are.

                            Why We’re Different
                            Founded by two friends more than three decades ago, Friendly Arbor Restoration focuses on one thing: you. We want to deliver exceptional customer service, and we believe we do it better than the competition. We are committed to honesty, integrity, transparency, and reliability. We follow the highest standards of ethical business practices in all we do. We believe in treating our customers like family and our employees like part of that family.

                            We Stand Behind What We Do
                            We offer warranties on all work we do. We don’t think you should have to pay for work we did and then you have to pay a second time for bad work. We stand behind every job we do. We think that’s the right thing to do. We are proud to say we have never had a customer service complaint filed against us.

                            We’ve Built an Award-Winning Team
                            We are proud to be an award-winning company. We’re recognized in several categories for our restoration services. We’ve been voted the Best Restoration Company in the Grand Rapids area. We’re also recognized for our customer service by the Better Business Bureau. We are a five-star rated company by the BBB and even have a few “Award of Excellence” distinctions from them.

                            Absolutely, we are friendly.
                            We are also known for our friendly service. We believe that every customer deserves our attention and our time. We don’t believe in one-size-fits-all customer service. We want to meet you where you are, listen to your needs, and serve you the best way that we know how.

                            What We Do
                            Our work is secondary only to serving you and the needs of your property. We believe that makes us different. We believe it makes us better. We believe it’s the right thing to do. We want you to know that you, your home or business, and your family are our most important asset. We are here to help you cope with a disaster and recover as quickly as possible.

                            We’ve had decades of experience and practice in all aspects of restoration. We can help you after water damage and fire damage but we can also help you after a burglary, a natural disaster, or any other type of property damage please call us.
                    </p>
                </div>
                <div className='single-about-content-img-wrap'>
                    <img className="singleAboutContentImg" src='http://friendlyarborrestoration.com/wp-content/uploads/2021/12/mathew-schwartz-8xhnoY5ua9o-unsplash-scaled.jpg' alt=''></img>
                    <img className="singleAboutContentImg" src='http://friendlyarborrestoration.com/wp-content/uploads/2021/12/mathew-schwartz-8xhnoY5ua9o-unsplash-scaled.jpg' alt=''></img>
                    <img className="singleAboutContentImg" src='http://friendlyarborrestoration.com/wp-content/uploads/2021/12/mathew-schwartz-8xhnoY5ua9o-unsplash-scaled.jpg' alt=''></img>
                    <img className="singleAboutContentImg" src='http://friendlyarborrestoration.com/wp-content/uploads/2021/12/mathew-schwartz-8xhnoY5ua9o-unsplash-scaled.jpg' alt=''></img>
                    <img className="singleAboutContentImg" src='http://friendlyarborrestoration.com/wp-content/uploads/2021/12/mathew-schwartz-8xhnoY5ua9o-unsplash-scaled.jpg' alt=''></img>
                </div>
            </div>

            <div className='single-footer'>
                <p>Copyright © 2022 Ann Arbor Water, Flood, and Fire Damage Restoration</p>
                <p>Call 24/7: (734) 802-2678</p>
            </div>    
      </>
  );
}

export default SingleAbout