import React from 'react'
import MultiHeader from '../../components/MultiHeader'
import MultiFooter from '../../components/MultiFooter'
function MultiContactPage() {
  return (
    <>
        <div>
            <MultiHeader />
            <div className='multi-contact-content-wrap'>
              <h1 className='multi-contact-header'>Contact <span className='multi-contact-span'>The Restoration Doctor</span> Today</h1>
              <hr className='multi-contact-hr'></hr>
              <div className='multi-contact-cards-wrap'>
                  <div className='multi-contact-card'>
                        <h1 className='multi-contact-card-header'>Phone</h1>
                        <hr className='multi-contact-card-hr'></hr>
                        <p>(XXX) XXX-XXXX</p>
                  </div>    
                  <div className='multi-contact-card'>
                        <h1 className='multi-contact-card-header'>Email</h1>
                        <hr className='multi-contact-card-hr'></hr>
                        <p>templateemail@template.com</p>
                  </div>
                  <div className='multi-contact-card'>
                        <h1 className='multi-contact-card-header'>Address</h1>
                        <hr className='multi-contact-card-hr'></hr>
                        <p>Fake Template Address, Fake State</p>
                  </div>
              </div>
            </div>
            <MultiFooter />
        </div>

    </>
  )
}

export default MultiContactPage