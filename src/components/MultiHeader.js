import React from 'react';
import { Link } from 'gatsby';
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import { useState } from 'react';
function MultiHeader(props) {

    return (
      <>
        <div className='multi-header'>
            <div className='multi-header-top'>
                <h3 className='multi-header-top-text'>24/7 Emergency Response</h3>
                <div className='multi-header-phone-wrap'>
                    <FaPhoneAlt id='phoneIcon'></FaPhoneAlt>
                    <h2>{props.number}</h2>
                </div>
            </div>
            <div className='multi-header-bottom'>
                <h1 id='multiHeaderLogo'>Logo</h1>
                <Link to='/multitemplate/MultiTemplate/' className='multi-header-bottom-link'>Home</Link>
                <Link to='/multitemplate/MultiServicePage/' className='multi-header-bottom-link'>Services</Link>
                <Link to='/multitemplate/MultiAboutPage/'className='multi-header-bottom-link'>About</Link>
                <Link to='/multitemplate/MultiContactPage/' className='multi-header-bottom-link'>Contact</Link>
            </div>
            <div className='multi-header-hero'>
                <div className='multi-header-hero-content'>
                    <h1 className='multi-header-hero-title'>Water and Fire Damage Restoration</h1>
                </div>
            </div>
        </div>
      </>
  )
}
  export default MultiHeader;
