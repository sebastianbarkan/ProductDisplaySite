import React from 'react';
import { useState, useRef, useEffect, useContext} from 'react';
import emailjs from '@emailjs/browser';
import LocaleContext from '../../LocaleContext';

const QuoteDetails = (props) => {
    const [buttonVal, setButtonVal] = useState(1)
    const dataState = useContext(LocaleContext)
    const handleAdd = () => {
        setButtonVal(buttonVal + 1)
    }
    const handleMinus = () => {
        if (buttonVal <= 1) {
            return
        } else {
            setButtonVal(buttonVal - 1)
        }
    }
    const form= useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3au5vue', form.current, 'user_D3rg4ERge2aQP4CwIA2PS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  };

  const emailHandle = () => {
      return 
  }
    return (
        <div className='quote-wrap'>
            {dataState.dataState.map((e, i) => {return <div className="quote-details">
                <div className='quote-header'>
                    <h4 className="quote-text">Quote</h4>
                    <div className='quote-button-details'>
                        <h1 id='quantity'>Quantity:</h1> 
                        <h1 className='quantity-display' value={buttonVal} name='Quantity'>{buttonVal}</h1>
                        <button className='add-button' onClick={handleAdd}>Add</button>
                        <button className='minus-button' onClick={handleMinus}>Subtract</button>
                    </div>
                </div>
                <div className="dropdown-divider w-25 mx-auto mb-3" />
                    <div className='cart-display'>
                        {dataState.dataState.length > 0 ?
                                dataState.dataState[i].map((e, i) => 
                                <div className='data-item' key={i}>
                                    <h1 className='first-data'>{e[0]}</h1>
                                    <h1 className='second-data'>{e[1]}</h1>
                                </div>)
                        :
                        null}
                    </div>
                <div>  
            </div>
            </div>})}
        
            {dataState.dataState.length > 0 ? 
                <div className='form-wrap'>
                    <form ref={form} onSubmit={sendEmail} className='email-send-form'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" className='form-item'/>
                        <label>Email</label>
                        <input type="email" name="email" className='form-item'/>
                        <label>Message</label>
                        <textarea name="message" />
                        <input type='text' className='hidden' onChange={emailHandle} name='quote' value={dataState.dataState}/>
                        <input type='text' className='hidden' onChange={emailHandle} name='quantity' value={buttonVal} />
                        <input type="submit" value="Send"  className='form-button'/>
                    </form>
                </div>
                 :
                 null
            }
        </div>
    );
};

export default QuoteDetails;
