import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby'
import { useState } from 'react'
import { useFormik } from 'formik';

function Multitemplateinput() {
  
  const formik = useFormik({

    initialValues: {

      phoneInput: '',

      topHeaderText: '',

      logoPath: '',

      heroText: '',

      testimonialSubHeading:'',

      mainContentTitleOne: '',

      mainContentTextOne: '',

      mainContentTitleTwo: '',

      mainContentTextTwo: '',

      mainContentTitleThree: '',

      mainContentTextThree: '',
    
      mainContentBottomImage: '',

      footerTopText: '',

      email: '',
    },

    onSubmit: values => {

      console.log(values)

    },

  });

  return (
    
    <>
      <Header></Header>
      <Link to='/'>go back</Link>
      <Link to='/multitemplate/MultiTemplate/' state={formik.values}>multi template</Link>
      <form className='multi-input-form' onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email</label>

        <input

          id="email"

          name="email"

          type="email"

          onChange={formik.handleChange}

          value={formik.values.email}

        />
        <label htmlFor="footerTopText">Footer Top Text</label>

        <input

          id="footerTopText"

          name="footerTopText"

          type="text"

          onChange={formik.handleChange}

          value={formik.values.footerTopText}

        />  
        <label htmlFor="phoneInput">Phone Number Input</label>

        <input

          id="phoneInput"

          name="phoneInput"

          type="text"

          onChange={formik.handleChange}

          value={formik.values.phoneInput}

        />



        <label htmlFor="topHeaderText">Top Header Text</label>

        <input

          id="topHeaderText"

          name="topHeaderText"

          type="text"

          onChange={formik.handleChange}

          value={formik.values.topHeaderText}

        />



        <label htmlFor="logoPath">Logo URL/Path</label>

        <input

          id="logoPath"

          name="logoPath"

          type="logoPath"

          onChange={formik.handleChange}

          value={formik.values.logoPath}

        />

        <label htmlFor="heroText">Hero Text</label>

        <input

          id="heroText"

          name="heroText"

          type="heroText"

          onChange={formik.handleChange}

          value={formik.values.heroText}

        />


        <label htmlFor="testimonialSubHeading">Testimonial Sub-Heading</label>

        <input

          id="testimonialSubHeading"

          name="testimonialSubHeading"

          type="testimonialSubHeading"

          onChange={formik.handleChange}

          value={formik.values.testimonialSubHeading}

        />


        <label htmlFor="mainContentTitleOne">Main Content Title-One</label>

        <input

          id="mainContentTitleOne"

          name="mainContentTitleOne"

          type="mainContentTitleOne"

          onChange={formik.handleChange}

          value={formik.values.mainContentTitleOne}

        />
        <label htmlFor="mainContentTextOne">Main Content Text-One</label>

        <input

          id="mainContentTextOne"

          name="mainContentTextOne"

          type="mainContentTextOne"

          onChange={formik.handleChange}

          value={formik.values.mainContentTextOne}

        />
        <label htmlFor="mainContentTitleTwo">Main Content Title-Two</label>

        <input

          id="mainContentTitleTwo"

          name="mainContentTitleTwo"

          type="mainContentTitleTwo"

          onChange={formik.handleChange}

          value={formik.values.mainContentTitleTwo}

        />
        <label htmlFor="mainContentTextTwo">Main Content Text-Two</label>

        <input

          id="mainContentTextTwo"

          name="mainContentTextTwo"

          type="mainContentTextTwo"

          onChange={formik.handleChange}

          value={formik.values.mainContentTextTwo}

        />
        <label htmlFor="mainContentTitleThree">Main Content Title-Three</label>

        <input

          id="mainContentTitleThree"

          name="mainContentTitleThree"

          type="mainContentTitleThree"

          onChange={formik.handleChange}

          value={formik.values.mainContentTitleThree}

        />
        <label htmlFor="mainContentTextThree">Main Content Text-Three</label>

        <input

          id="mainContentTextThree"

          name="mainContentTextThree"

          type="mainContentTextThree"

          onChange={formik.handleChange}

          value={formik.values.mainContentTextThree}

        />


        <button type="submit">Submit</button>

      </form>
      
    </>

  )
}

export default Multitemplateinput;