import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';
import { useFormik } from 'formik';

function Singletemplateinput() {
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


  return(
      <>
        <Header></Header>
        <Link to='/'>go back</Link>
        <Link to='/singletemplate/Singletemplate'>single template</Link>
        <form className='multi-input-form' onSubmit={formik.handleSubmit}>

<label htmlFor="logoSingle">Logo URL/Path</label>

<input

  id="logoSingle"

  name="logoSingle"

  type="logoSingle"

  onChange={formik.handleChange}

  value={formik.values.logoSingle}

/>

<label htmlFor="heroCompanyDescripton">Hero Company-Description</label>

<input

  id="heroCompanyDescripton"

  name="heroCompanyDescripton"

  type="text"

  onChange={formik.handleChange}

  value={formik.values.heroCompanyDescripton}

/>  

<label htmlFor="heroCompanyLocation">Hero Company-Location</label>

<input

  id="heroCompanyLocation"

  name="heroCompanyLocation"

  type="text"

  onChange={formik.handleChange}

  value={formik.values.heroCompanyLocation}

/>



<label htmlFor="mainLeftImage">Main Left Image</label>

<input

  id="mainLeftImage"

  name="mainLeftImage"

  type="text"

  onChange={formik.handleChange}

  value={formik.values.mainLeftImage}

/>



<label htmlFor="companyHeaderRightDisplay">Company Header Right Display</label>

<input

  id="companyHeaderRightDisplay"

  name="companyHeaderRightDisplay"

  type="companyHeaderRightDisplay"

  onChange={formik.handleChange}

  value={formik.values.companyHeaderRightDisplay}

/>

<label htmlFor="heroText">Hero Text</label>

<input

  id="heroText"

  name="heroText"

  type="heroText"

  onChange={formik.handleChange}

  value={formik.values.heroText}

/>


<label htmlFor="companyDescriptionRightDisplay">Company Descritpion Right Display</label>

<input

  id="companyDescriptionRightDisplay"

  name="companyDescriptionRightDisplay"

  type="companyDescriptionRightDisplay"

  onChange={formik.handleChange}

  value={formik.values.companyDescriptionRightDisplay}

/>


<label htmlFor="copyrightSingle">Copyright</label>

<input

  id="copyrightSingle"

  name="copyrightSingle"

  type="copyrightSingle"

  onChange={formik.handleChange}

  value={formik.values.copyrightSingle}

/>
<label htmlFor="hoursSingle">Hours</label>

<input

  id="hoursSingle"

  name="hoursSingle"

  type="hoursSingle"

  onChange={formik.handleChange}

  value={formik.values.hoursSingle}

/>


<button type="submit">Submit</button>

</form>
      </>
  );
}

export default Singletemplateinput