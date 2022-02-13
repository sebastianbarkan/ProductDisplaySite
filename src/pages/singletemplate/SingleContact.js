import React from 'react';
import {Link} from 'gatsby';
function SingleContact() {
  return (
      <>
            <div className='single-header'>
                    <h1 id='singleLogo'>LOGO</h1>
                    <Link className='link' to='/singletemplate/Singletemplate/'><h2 className='single-header-link'>Home</h2></Link>
                        <select id='singleDropdown'>
                            <option value="" disabled selected className='single-header-link'>Services</option>
                            <option value='Flood Damage Restoration'>link</option>
                        </select>
                    <Link className='link' to='/singletemplate/SingleAbout/'><h2 className='single-header-link'>About</h2></Link>
                    <Link className='link' to='/singletemplate/SingleBlog/'><h2 className='single-header-link'>Blog</h2></Link>
                    <Link className='link' to='/singletemplate/SingleContact/'><h2 className='single-header-link'>Contact</h2></Link>
                    <button id='singleNumber'><h2>(xxx)xxx-xxxx</h2></button>
            </div>

            <div className='single-contact-wrap'>
                <div className='single-contact-hero'>
                    <div className='single-contact-content-wrap'>
                        <div className='single-contact-label-wrap'>
                            <h1 id='singleContactLabel'>Contact</h1>
                        </div>
                        <div className='single-contact-number-wrap'>
                            <div className='single-contact-number'>
                                    <h2>Toll Free Call</h2>
                                    <h1>+1 (XXX) XXX-XXXX</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-contact-content'>
                    <div className='single-contact-info'>
                        <h1 id='contactInfo'>Contact Us</h1>
                        <div className='contact-number-wrap'>
                            <p id='contactNumber'>(xxx) xxx-xxxx</p>
                            <p id='contactHours'>24/7/365</p>
                        </div>
                        <h1 id='followInfo'>Follow Us</h1>
                        <div className='contact-follow-wrap'>
                            <p className='contact-follow-icon'>X</p>
                            <p className='contact-follow-icon'>X</p>
                            <p className='contact-follow-icon'>X</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single-footer'>
                <p>Copyright © 2022 Ann Arbor Water, Flood, and Fire Damage Restoration</p>
                <p>Call 24/7: (734) 802-2678</p>
            </div>    
      </>
  )
}

export default SingleContact;
