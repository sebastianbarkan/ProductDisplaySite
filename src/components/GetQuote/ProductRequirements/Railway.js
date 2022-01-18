import React from 'react'
import { useState, useEffect, useContext } from 'react'
import LocaleContext from '../../../LocaleContext';
import QuoteDetails from '../QuoteDetails';
export default function Railway() {
    
    const [formData, setFormData] = useState([])
    const newContext = useContext(LocaleContext)
    
    const handlePreventRefresh = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        let dataArr = []
        
        for (let pair of data.entries()){
            dataArr.push([pair[0], pair[1]])
            console.log(pair)
        }
        
        setFormData(dataArr)
        const contextArr = newContext.dataState
        contextArr.push(dataArr)
        newContext.setDataState(contextArr)
        return false;
    }
    const handleHidden = () => {
        return 
    }


  
    return (
        <div>
              <h4 className="text-center">Railway</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />
            <div className="dropdown-divider gray my-3" />
              <div className='attribute-container'>
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Railway' name='Product' className='hidden-input' onChange={handleHidden}/>
              <div className='dimensions-wrap-railway'>
                    <label htmlFor='widthinput' className='dimension-label'>Width</label>
                    <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                    <label htmlFor='heightinput' className='dimension-label'>Height</label>
                    <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                </div>
                <div className='mentions-wrap'>
                    <label htmlFor='mentionsText' value='Additional Details' className='mentions-label'> Additional Details</label> 
                    <textarea type='textarea' id='mentionsText' className='mentions-text' name='Comments'></textarea>
                </div>
                <div className='file-wrap'>
                        <label htmlFor="myfile">Select a file:</label>
                        <input type="file" id="myfile" ></input> 
                        
                    </div>
                    <button type='submit' className='submit-button'>Add to Cart</button>  
                </form>
            </div>
            <div className="dropdown-divider gray my-3" />
            <div className="py-4" />
                    <QuoteDetails formData={formData} title={'Railway'}/>
            <div className="py-4" />
        </div>
    )
}
