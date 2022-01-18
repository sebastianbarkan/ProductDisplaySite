import React from 'react';
import { useState, useContext } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { RALColors } from './components/RALColors';
import QuoteDetails from '../QuoteDetails';
import LocaleContext from '../../../LocaleContext';


const WoodJoinery = () => {
   const [colorValue, setColorValue] = useState('Oak')
   const [colorValueWood, setColorValueWood] = useState('')
   const [platingDisplay, setPlatingDisplay] = useState(false)
   const [vitrageSelect, setVitrageSelect] = useState('2 Sheets')
    
   const handleRadio = (e) => {
    let value = e.target.value
    setVitrageSelect(value)
   }

   const handleMenuOak = (e) => {
       document.querySelector('.color-displaywood').style.backgroundColor='none'
       document.querySelector('.color-displaywood').style.backgroundImage='none'
       document.querySelector('.color-displaywood').style.backgroundImage=`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zIggtr2AgyGaUfXFMTILI6t1smQKgQa6aA&usqp=CAU'})`
       setColorValue(e.value)
   }
   const handleMenuPine = (e) => {
    document.querySelector('.color-displaywood').style.backgroundColor='none'
    document.querySelector('.color-displaywood').style.backgroundImage='none'
    document.querySelector('.color-displaywood').style.backgroundImage=`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzgqeJSBTnnJnrf4mfJKMGNKNnPRbLjYjSw&usqp=CAU'})`
    setColorValue(e.value)
}

const handlePlating = (e) => {
   if (e.target.id === 'platingyes') {
       setPlatingDisplay(true)
   } else if (e.target.id === 'platingno'){
       setColorValueWood('')
       setPlatingDisplay(false)
   }
}
const handleMenuRal = (e) => {
    document.querySelector('.plating-color').style.background='none'
    document.querySelector('.plating-color').style.backgroundColor=`${e.value[0]}`
    setColorValueWood(e.value[1])

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
            <h4 className="text-center">Laminated Wood Joinery</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />
            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'>
               
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Wood Joinery' name='Product' className='hidden-input' onChange={handleHidden}/>
                <div className='dimensions-wrap'>
                    <label htmlFor='widthinput' className='dimension-label'>Width</label>
                    <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
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
                                    <input type='checkbox' name='Style' value='Opaque' className='svFirst'></input>
                                    <label htmlFor='svSecond' className='style-label'>Decorative</label>
                                    <input type='checkbox' name='Style' value='Decorative' className='svSecond'></input>
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
                                    <input type='radio' name='Type' value='Solar' id='fvSecond' className='fvSecond'></input>
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
                    <div className='plated-container'>
                        <h1>Add Aluminium Plating?</h1>
                        <div className='plating-wrap'>
                            <label htmlFor='platingno' className='plating-label'>No</label>
                            <input type='radio' name='Plating?' id='platingno' className='plating-radio' value='no'onClick={handlePlating} defaultChecked></input>
                            <label htmlFor='platingyes' className='plating-label' >Yes</label>
                            <input type='radio' name='Plating?' id='platingyes' value='yes' className='plating-radio' onClick={handlePlating}></input>
                            {platingDisplay ?
                            
                              <Menu menuButton={<MenuButton className='menu-button wood'>Choose Color</MenuButton>} position='anchor' overflow='auto'>
                                  <SubMenu label='RAL Colors' position='anchor' overflow='auto'>
                                        {RALColors.map((e,i) =>{return <MenuItem onClick={handleMenuRal} value={[RALColors[i].HEX, RALColors[i].English]}key={i}><div style={{backgroundColor:`${RALColors[i].HEX}`, height:'1em', width:'1em', margin:'.3em'}}></div>{RALColors[i].English}</MenuItem>})}
                                    </SubMenu>
                             </Menu>
                             
                    
                            :null
                            }
                            {platingDisplay ?
                                <div className='plating-color'>
                                    <h1 id='color-display-namewood'>{`${colorValueWood}`}</h1>
                                    <input className='hidden-input' name='Color' onChange={handleHidden} value={colorValue}/>
                                </div>
                                :null
                            }
        
                        </div>
                    </div>
                    <div className='color-wrap'>
                        <div className='color-select'>
                            <h1 className='color-label'>Color</h1>
                            <div className='color-select-wrap'>
                                <Menu menuButton={<MenuButton className='menu-button'>Choose</MenuButton>} position='anchor' overflow='auto'>
                                    <MenuItem onClick={handleMenuOak} value='Oak'>Oak</MenuItem>
                                    <MenuItem onClick={handleMenuPine} value='Northern Pine'>Northern Pine</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='color-displaywood'>
                            <h1 id='color-display-name' name='Color' value={colorValue}>{`${colorValue}`}</h1>
                        </div>
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
                    <QuoteDetails formData={formData} title={'Wooden Joinery'}/>
            <div className="py-4" />
            
        </div>
    );
};

export default WoodJoinery;
