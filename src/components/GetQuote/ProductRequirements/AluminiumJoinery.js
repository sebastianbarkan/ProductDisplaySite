import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { WoodImitation} from './components/WoodImitation';
import { RALColors } from './components/RALColors';
import QuoteDetails from '../QuoteDetails';
import LocaleContext from '../../../LocaleContext';
function AluminiumJoinery() {

    const [colorValue, setColorValue] = useState('White')

   const [vitrageSelect, setVitrageSelect] = useState('2 Sheets')
    
   const handleRadio = (e) => {
    let value = e.target.value
    setVitrageSelect(value)
   }

   const handleMenuWhite = (e) => {
       document.querySelector('.color-display').style.background='none'
       document.querySelector('.color-display').style.backgroundColor=e.value
       setColorValue(e.value)
   }

   const handleMenuWood = (e) => {
    document.querySelector('.color-display').style.background='none'
    document.querySelector('.color-display').style.backgroundImage=`url(${e.value[0]})`
    setColorValue(e.value[1])

    }
    const handleMenuRal = (e) => {
        document.querySelector('.color-display').style.background='none'
        document.querySelector('.color-display').style.backgroundColor=`${e.value[0]}`
        setColorValue(e.value[1])
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
        <h4 className="text-center">Aluminium Joinery</h4>
        <div className="dropdown-divider w-50 mx-auto mb-4" />
        <div className="dropdown-divider gray my-3" />
        <div className='attribute-container'>
            <form className='attribute-form'  onSubmit={handlePreventRefresh}>
            <input value='Aluminium Joinery' name='Product' className='hidden-input' onChange={handleHidden}/>
            <div className='dimensions-wrap'>
                    <label htmlFor='widthinput' className='dimension-label'>Width</label>
                    <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                    <label htmlFor='heightinput' className='dimension-label'>Height</label>
                    <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                </div>
                <label htmlFor='profile-drop' className='profile-label'>Profile</label>
                <select type='dropdown' id='profile-drop' name='Model Type'className='profile-drop'>
                    <option label='pr26'>pr26</option>
                    <option label='pr52'>pr52</option>
                    <option label='cor60'>cor60</option>
                    <option label='cor80'>cor80</option>
                    <option label='pr50'>pr50</option>
                </select>
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
                                <input type='radio' value='Thermal' name='Type' id='fvFirst' className='fvFirst'></input>
                                <label htmlFor='fvSecond' className='style-label'>Solar</label>
                                <input type='radio' name='Type' value='Solar' id='fvSecond' className='fvSecond'></input>
                            </div>
                            <h1 className='style'>Style</h1>
                            <div className='second-val'>
                                <label htmlFor='svFirst' className='style-label'>Opaque</label>
                                <input type='checkbox' value ='Opaque'name='Style' className='svFirst'></input>
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
                                <input type='radio' value='Thermal' name='Type' id='fvFirst' className='fvFirst'></input>
                                <label htmlFor='fvSecond' className='style-label'>Solar</label>
                                <input type='radio' name='Type' value='Solar' id='fvSecond' className='fvSecond'></input>
                            </div>
                            <h1 className='style'>Style</h1>
                            <div className='second-val'>
                                <label htmlFor='svFirst' className='style-label'>Opaque</label>
                                <input type='radio' name='Style' id='svFirst' className='svFirst' value='Opaque'></input>
                                <label htmlFor='svSecond' className='style-label'>Decorative</label>
                                <input type='radio' name='Style' id='svSecond' className='svSecond' value='Decorative'></input>
                                <label htmlFor='svThird' className='style-label'>Ornamental</label>
                                <input type='radio' name='Style' id='svThird' value='Ornamental'></input>
                            </div>
                        </div>
                    }
                </div>
                <div className='color-wrap'>
                    <div className='color-select'>
                        <h1 className='color-label'>Color</h1>
                        <div className='color-select-wrap'>
                            <Menu menuButton={<MenuButton className='menu-button'>Choose</MenuButton>} position='anchor' overflow='auto'>
                                <MenuItem onClick={handleMenuWhite} value='White'>White</MenuItem>
                                <SubMenu label='Wood Imitations' position='anchor' overflow='auto'>
                                    {WoodImitation.map((e,i) => <MenuItem onClick={handleMenuWood} key={i} value={[WoodImitation[i].source, WoodImitation[i].name]}><img className='color-img' src={WoodImitation[i].source} alt={WoodImitation[i].name}></img>{WoodImitation[i].name}</MenuItem>)}
                                </SubMenu>
                                <SubMenu label='RAL Colors' position='anchor' overflow='auto'>
                                    {RALColors.map((e,i) => <MenuItem onClick={handleMenuRal} value={[RALColors[i].HEX, RALColors[i].English]}key={i}><div style={{backgroundColor:`${RALColors[i].HEX}`, height:'1em', width:'1em', margin:'.3em'}}></div>{RALColors[i].English}</MenuItem>)}
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                    <div className='color-display'>
                        <h1 id='color-display-name'  name='Color'>{`${colorValue}`}</h1>
                        <input className='hidden-input' name='Color' onChange={handleHidden} value={colorValue}/>
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
                    <QuoteDetails formData={formData} title={'Aluminium Joinery'}/>
            <div className="py-4" />
    </div>
    )
}

export default AluminiumJoinery
