import React from 'react';
import { useState, useContext } from 'react';
import LocaleContext from '../../../LocaleContext';
import QuoteDetails from '../QuoteDetails';
const thicknessSize = ['24', '34', '40', '48', ' 52'];


 

const Glass = () => {
    const [vitrageSelect, setVitrageSelect] = useState('2 Sheets')
    const handleRadio = (e) => {
        let value = e.target.value
        setVitrageSelect(value)
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
    return(
        <div>
        <h4 className="text-center">Glass</h4>
        <div className="dropdown-divider w-50 mx-auto mb-4" />

        <div className="dropdown-divider gray my-3" />
        <div className='attribute-container'>

            <form className='attribute-form' onSubmit={handlePreventRefresh}>
            <input value='Glass' name='Product' className='hidden-input' onChange={handleHidden}/>
                <div className='dimensions-wrap'>
                    <label htmlFor='widthinput' className='dimension-label'>Width</label>
                    <input type='text' name='Height' id='widthInput' className='dimension-input left-dimension'></input>
                    <label htmlFor='heightinput' className='dimension-label'>Height</label>
                    <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                </div>
                <div className='vitrage-container'>
                    <div className='vitrage-radio-wrap'>
                        <div className='vw-first'>
                            <label htmlFor='2-sheets' className={vitrageSelect === '2 Sheets' ?' vitrage-label-select': 'vitrage-label'}>2 Sheets</label>
                            <input type='radio' name='Number of Sheets' value='2 Sheets' id='2-sheets' className={vitrageSelect === '2 Sheets' ? 'vitrage-radio-first hide' : 'vitrage-radio-first'} onChange={handleRadio} defaultChecked></input>
                        </div>
                        <div className='vw-second'>
                            <label htmlFor='3-sheets'className={vitrageSelect === '3 Sheets' ?' vitrage-label-select': 'vitrage-label'}>3 Sheets</label>
                            <input type='radio' name='Number of Sheets' value='3 Sheets' id='3-sheets' className={vitrageSelect === '3 Sheets' ? 'vitrage-radio-second hide' : 'vitrage-radio-second'} onChange={handleRadio}></input>
                        </div>
                    </div>
                    {vitrageSelect === '2 Sheets' ?
                        <div className='twoSheets'>
                            <h1 className='type'>Type</h1>
                            <div className='first-val'>
                                <label htmlFor='fvFirst' className='style-label'>Thermal</label>
                                <input type='radio' name='Type' value='Thermal' id='fvFirst' className='fvFirst'></input>
                                <label htmlFor='fvSecond' className='style-label'>Solar</label>
                                <input type='radio' name='Type' value='Solar' id='fvSecond' className='fvSecond'></input>
                            </div>
                            <h1 className='style'>Style</h1>
                            <div className='second-val'>
                                <label htmlFor='svFirst' className='style-label'>Opaque</label>
                                <input type='checkbox' name='Style'value='Opaque' className='svFirst'></input>
                                <label htmlFor='svSecond' className='style-label'>Decorative</label>
                                <input type='checkbox' name='Style' value='Decorative'className='svSecond'></input>
                                <label htmlFor='svThird' className='style-label'>Ornamental</label>
                                <input type='checkbox' name='Style' value='Ornamental'></input>
                            </div>
                            
                        </div>
                        :
                        <div className='threeSheets'>
                            <h1 className='type'>Type</h1>
                            <div className='first-val'>
                                <label htmlFor='fvFirst' className='style-label'>Thermal</label>
                                <input type='radio' name='Type' value='Thermal' id='fvFirst' className='fvFirst'></input>
                                <label htmlFor='fvSecond' className='style-label'>Solar</label>
                                <input type='radio' name='Type'value='Solar' id='fvSecond' className='fvSecond'></input>
                            </div>
                            <h1 className='style'>Style</h1>
                            <div className='second-val'>
                                <label htmlFor='svFirst' className='style-label'>Opaque</label>
                                <input type='radio' name='Style' value='Opaque' id='svFirst' className='svFirst'></input>
                                <label htmlFor='svSecond' className='style-label'>Decorative</label>
                                <input type='radio' name='Style' value='Decorative' id='svSecond' className='svSecond'></input>
                                <label htmlFor='svThird' className='style-label'>Ornamental</label>
                                <input type='radio' name='Style' value='Ornamental' id='svThird'></input>
                            </div>    
                        </div>
                    }
                </div>
                <div className='thickness-wrap'>
                    <label htmlFor='thicknessDrop' className='thickness-label'>Thickness</label>
                    <select type='dropdown' name='Thickness' id='thicknessDrop'>
                        <option label='24'>24</option>
                        <option label='34'>34</option>
                        <option label='40'>40</option>
                        <option label='48'>48</option>
                        <option label='52'>52</option>
                    </select>
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
                    <QuoteDetails formData={formData} title={'Glass'}/>
            <div className="py-4" />
    
    </div>
    )    
};
    

export default Glass;