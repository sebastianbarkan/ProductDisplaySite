import React from 'react'
import ColorSelect from './Dynamics/ColorSelect';
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
import { useState, useContext } from 'react';
import QuoteDetails from '../QuoteDetails';
import LocaleContext from '../../../LocaleContext';

function InsectNet() {

    const [colorValue, setColorValue] = useState('White')
    const handleMenuWhite = (e) => {
        document.querySelector('.color-displayinsect').style.background='none'
        document.querySelector('.color-displayinsect').style.backgroundColor=e.value
        setColorValue(e.value)
    }
 
    const handleMenuWood = (e) => {
     document.querySelector('.color-displayinsect').style.background='none'
     document.querySelector('.color-displayinsect').style.backgroundImage=`url(${e.value[0]})`
     setColorValue(e.value[1])
 
     }
     const handleMenuRal = (e) => {
         document.querySelector('.color-displayinsect').style.background='none'
         document.querySelector('.color-displayinsect').style.backgroundColor=`${e.value[0]}`
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
            <h4 className="text-center">Insect Nets</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />

            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'>
                <form className='attribute-form' onSubmit={handlePreventRefresh}>
                <input value='Insect Net' name='Product' className='hidden-input' onChange={handleHidden}/>
                    <div className='dimensions-wrap'>
                        <label htmlFor='widthinput' className='dimension-label'>Width</label>
                        <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                        <label htmlFor='heightinput' className='dimension-label'>Height</label>
                        <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                    </div>
                    <div className='exterior-overlap'>
                            <label htmlFor='fixed' className='textile-label'>Fixed</label>
                            <input type='radio' name='Overlap Type' value='Fixed' id='fixed' className='aplicated-radio'></input>
                            <label htmlFor='hinged' className='textile-label'>Hinged</label>
                            <input type='radio' name='Overlap Type' value='Hinged' id='hinged' className='overlap-radio hinged'></input>
                            <label htmlFor='roller' className='textile-label'>Roller</label>
                            <input type='radio' name='Overlap Type' value='Roller' id='roller' className='aplicated-radio'></input>
                            <label htmlFor='pleated' className='textile-label'>Pleated</label>
                            <input type='radio' name='Overlap Type' value='Pleated'id='pleated' className='overlap-radio'></input>
                    </div>
                    <div className='color-wrap'>
                            <div className='color-select'>
                                <h1 className='color-label'>Color</h1>
                                <div className='color-select-wrap'>
                                    <Menu menuButton={<MenuButton className='menu-button'>Choose</MenuButton>} position='anchor' overflow='auto'>
                                        <MenuItem onClick={handleMenuWhite} value='White'>White</MenuItem>
                                        <SubMenu label='Wood Imitations' position='anchor' overflow='auto'>
                                            {WoodImitation.map((e,i) =>{return <MenuItem onClick={handleMenuWood} key={i} value={[WoodImitation[i].source, WoodImitation[i].name]}><img className='color-img' src={WoodImitation[i].source} alt={WoodImitation[i].name}></img>{WoodImitation[i].name}</MenuItem>})}
                                        </SubMenu>
                                        <SubMenu label='RAL Colors' position='anchor' overflow='auto'>
                                            {RALColors.map((e,i) =>{return <MenuItem onClick={handleMenuRal} value={[RALColors[i].HEX, RALColors[i].English]}key={i}><div style={{backgroundColor:`${RALColors[i].HEX}`, height:'1em', width:'1em', margin:'.3em'}}></div>{RALColors[i].English}</MenuItem>})}
                                        </SubMenu>
                                    </Menu>
                                </div>
                            </div>
                            <div className='color-displayinsect'>
                                <h1 id='color-display-name'>{`${colorValue}`}</h1>
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
                    <QuoteDetails formData={formData} title={'Insect Nets'}/>
                <div className="py-4" />
            </div>
    )
}

export default InsectNet 