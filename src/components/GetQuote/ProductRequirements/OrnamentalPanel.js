import React from 'react'
import { SteelModels } from './components/SteelModels'
import { AluminiumModels } from './components/AluminiumModels'
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useState, useEffect, useContext } from 'react';
import QuoteDetails from '../QuoteDetails';
import LocaleContext from '../../../LocaleContext';
function OrnamentalPanel() {
    const [modelType, setModelType] = useState('aluminium')
    const [keyVal, setKeyVal] = useState('')
    const handleModelType = (e) => {
        let value = e.target.value
        setModelType(value)
   }
   const [model, setModel] = useState('')
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

useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
}, [formData])

    return (
        <div>
            <h4 className="text-center">Ornamental Panel</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />
            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'>
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Onramental Panel' name='Product' className='hidden-input' onChange={handleHidden}/>
                <div className='insertion-radio-wrap'>
                        <label htmlFor='aluminum' className='insertion-radio-label'>Aluminium</label>
                        <input type='radio' name='Metal Type' id='aluminium' className='aplicated-radio' onChange={handleModelType} value='aluminium'></input>
                        <label htmlFor='steel' className='insertion-radio-label'>Stainless Steel</label>
                        <input type='radio' name='Metal Type' id='steel' className='overlap-radio' onChange={handleModelType} value=' stainless steel'></input>
                    </div>
                    <div className='model-select-wrap'>
                               { modelType === 'aluminium' ? <Menu menuButton={<MenuButton className='menu-button'>Choose Model</MenuButton>} position='anchor' overflow='auto'>
                                        {AluminiumModels.map((e,i) =>{return <MenuItem key={i} onClick={handleModel} value={[AluminiumModels[i].source, i]} name={AluminiumModels[i].name}><img className='model-img' src={AluminiumModels[i].source} alt={AluminiumModels[i].name}></img></MenuItem>})}
                                </Menu>
                                :
                                <Menu menuButton={<MenuButton className='menu-button'>Choose Model</MenuButton>} position='anchor' overflow='auto'>
                                    {SteelModels.map((e,i) =>{return <MenuItem key={i} onClick={handleModel} value={[SteelModels[i].source, i]} name={SteelModels[i].name}><img className='model-img' src={SteelModels[i].source} alt={SteelModels[i].name}></img></MenuItem>})}
                                </Menu>
                                }

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
                    <QuoteDetails formData={formData} title={'Ornamental Panel'}/>
            <div className="py-4" />
        </div>
    )
}

export default OrnamentalPanel
