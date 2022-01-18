import React from 'react'
import { canopyModels } from './components/canopyModels'
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
function Canopy() {
    const [model, setModel] = useState('')
    const [keyVal, setKeyVal] = useState('')
    const handleModel = (e) => {
        setModel(e.value[0])
        setKeyVal(e.value[1])
        console.log(e)
    }
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
            
            <h4 className="text-center">Canopy</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />
            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'>
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Canopy' name='Product' className='hidden-input' onChange={handleHidden}/>
                    <div className='dimensions-wrap'>
                        <label htmlFor='widthinput' className='dimension-label'>Width</label>
                        <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                        <label htmlFor='heightinput' className='dimension-label'>Height</label>
                        <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                    </div>
                    <h1 className='radio-label'>Action Type</h1>
                    <div className='exterior-overlap'>
                        <label htmlFor='aplicated' className='exterior-overlap-label'>Manual</label>
                        <input type='radio' name='Type' id='aplicated' value='Manual' className='aplicated-radio'></input>
                        <label htmlFor='overlap' className='exterior-overlap-label'>Electric</label>
                        <input type='radio' name='Type' value='Electric' id='overlap' className='overlap-radio'></input>
                    </div>
                    <div className='model-select-wrap'>
                                <Menu menuButton={<MenuButton className='menu-button'>Choose Model</MenuButton>} position='anchor' overflow='auto'>
                                        {canopyModels.map((e,i) =>{return <MenuItem onClick={handleModel} key={i} value={[canopyModels[i].source, i]} name={canopyModels[i].name}><img className='model-img' src={canopyModels[i].source} alt={canopyModels[i].name}></img></MenuItem>})}
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
                    <QuoteDetails formData={formData} title={'Canopy'}/>
                <div className="py-4" />
        </div>
    )
}

export default Canopy
