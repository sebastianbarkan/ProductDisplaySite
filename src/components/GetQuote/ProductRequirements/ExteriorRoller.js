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
import QuoteDetails from '../QuoteDetails';
import { useState, useContext } from 'react';
import LocaleContext from '../../../LocaleContext';

function ExteriorRoller() {
    const [colorValue, setColorValue] = useState('White')
    const handleMenuWhite = (e) => {
        document.querySelector('.color-displayroller').style.background='none'
        document.querySelector('.color-displayroller').style.backgroundColor=e.value
        setColorValue(e.value)
    }
 
    const handleMenuWood = (e) => {
     document.querySelector('.color-displayroller').style.background='none'
     document.querySelector('.color-displayroller').style.backgroundImage=`url(${e.value[0]})`
     setColorValue(e.value[1])
 
     }
     const handleMenuRal = (e) => {
         document.querySelector('.color-displayroller').style.background='none'
         document.querySelector('.color-displayroller').style.backgroundColor=`${e.value[0]}`
         setColorValue(e.value[1])
     
         }
         const [formData, setFormData] = useState([])
         const newContext= useContext(LocaleContext)
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
              <h4 className="text-center">Exterior Roller</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />

            <div className="dropdown-divider gray my-3" />
            <div className='attribute-container'></div>
            <div className='attribute-container'>
            <form className='attribute-form' onSubmit={handlePreventRefresh}>
            <input value='Exterior Roller' name='Product' className='hidden-input' onChange={handleHidden}/>
                <div className='dimensions-wrap'>
                    <label htmlFor='widthinput' className='dimension-label'>Width</label>
                    <input type='text' name='Width' id='widthInput' className='dimension-input left-dimension'></input>
                    <label htmlFor='heightinput' className='dimension-label'>Height</label>
                    <input type='text' name='Height' id='heightInput' className='dimension-input'></input>
                </div>
                <h1 className='radio-label'>Style</h1>
                <div className='exterior-overlap'>
                        <label htmlFor='aplicated' className='exterior-overlap-label'>Opaque</label>
                        <input type='radio' name='Style' id='aplicated' value='Opaque' className='aplicated-radio'></input>
                        <label htmlFor='overlap' className='exterior-overlap-label'>Decorative</label>
                        <input type='radio' name='Style' value='Decorative'id='overlap' className='overlap-radio'></input>
                </div>
                <h1 className='radio-label'>Action Type</h1>
                <div className='exterior-overlap'>
                        <label htmlFor='aplicated' className='exterior-overlap-label'>Manual</label>
                        <input type='radio' name='Type' id='aplicated' value='Manual' className='aplicated-radio'></input>
                        <label htmlFor='overlap' className='exterior-overlap-label'>Electric</label>
                        <input type='radio' name='Type' value='Electric'id='overlap' className='overlap-radio'></input>
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
                        <div className='color-displayroller'>
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
                    <QuoteDetails formData={formData} title={'Exterior Roller'}/>
            <div className="py-4" />
        </div>
    )
}

export default ExteriorRoller
    