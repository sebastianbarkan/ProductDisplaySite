import React from 'react'
import { BlindModels } from './components/BlindModels'
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import QuoteDetails from '../QuoteDetails';
import { useState, useContext } from 'react';
import LocaleContext from '../../../LocaleContext';
function Blinds() {
    const [model, setModel] = useState('')
    const [keyVal, setKeyVal] = useState('')
    const handleModel = (e) => {
        setModel(e.value[0])
        setKeyVal(e.value[1])
    }
    const [formData, setFormData] = useState([])
    const newContext = useContext(LocaleContext)
    
    
    const handlePreventRefresh = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        let dataArr = []
        
        for (let pair of data.entries()){
            dataArr.push([pair[0], pair[1]])
            
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
            <h4 className="text-center">Blinds</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />
            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'>
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Blinds' name='Product' className='hidden-input' onChange={handleHidden}/>
                 <div className='dimensions-wrap'>
                            <label htmlFor='widthinput' className='dimension-label'>Length</label>
                            <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                            <label htmlFor='heightinput' className='dimension-label'>Projection</label>
                            <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                 </div>
                 <div className='model-select-wrap'>
                                <Menu menuButton={<MenuButton className='menu-button'>Choose Model</MenuButton>} position='anchor' overflow='auto'>
                                        {BlindModels.map((e,i) =>{return <MenuItem onClick={handleModel} key={i} value={[BlindModels[i].source, i]} name={BlindModels[i].name}><img className='model-img' src={BlindModels[i].source} alt={BlindModels[i].name}></img></MenuItem>})}
                                </Menu>
                    </div>
                    <div className='model-display'>
                        <img src={model} alt=''></img>
                        <input className='hidden-input' name='Model Number' onChange={handleHidden} value={keyVal}/>
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
                    <QuoteDetails formData={formData} title={'Blinds'}/>
               <div className="py-4" />
        </div>
    )
}

export default Blinds
