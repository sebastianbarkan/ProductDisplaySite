import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import {FaGoogle} from  '@react-icons/all-files/fa/FaGoogle'

import React from 'react'

 function MultiFooter() {
 return (
    <>
        <div className='multi-footer-container'>
            <div className='multi-footer-top'>
                    <h1 className='multi-footer-top-text'>Emergency Cleanup and Restoration</h1>
                    <FaPhoneAlt className='multi-footer-top-icon'/>
                    <h1 className='multi-footer-top-number'>(XXX) XXX-XXXX</h1>
            </div>
            <div className='multi-footer-center'>
                <div className='multi-footer-center-links-container'>
                    <div className='multi-footer-center-links-wrap'>
                        <p className='multi-footer-center-link'>Clinton Township</p>
                        <p className='multi-footer-center-link'>Detroit MI</p>
                        <p className='multi-footer-center-link'>Farmington Hills MI</p>
                        <p className='multi-footer-center-link'>Fraser MI</p>
                    </div>
                    <div className='multi-footer-center-links-wrap'>
                        <p className='multi-footer-center-link'>Clinton Township</p>
                        <p className='multi-footer-center-link'>Detroit MI</p>
                        <p className='multi-footer-center-link'>Farmington Hills MI</p>
                        <p className='multi-footer-center-link'>Fraser MI</p>
                    </div>
                </div>
            </div>
            <div className='multi-footer-bottom'>
                <h1>LOGO</h1>
                <div className='multi-footer-bottom-center'>
                    <h4 className='multi-footer-bottom-center-link'>(XXX) XXX-XXXX</h4>
                    <h4 className='multi-footer-bottom-center-link'>exampletemplate@gmail.com</h4>
                    <h4 className='multi-footer-bottom-center-link'>View Our Service Area</h4>
                </div>
                <div className='multi-footer-icons-wrap'>
                    <FaLinkedin className='multi-footer-center-icon'/>
                    <FaFacebookF className='multi-footer-center-icon'/>
                    <FaGoogle className='multi-footer-center-icon'/>
                </div>
                
            </div>
        </div>

    </>
  )
}

export default MultiFooter