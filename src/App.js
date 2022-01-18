import React from 'react';
import NavigationBar from './components/Navigation';
import GetQuote from './components/GetQuote';
import { useContext, useState } from 'react';
import LocaleContext from './LocaleContext';
function App() {
    
    const [dataState, setDataState] = useState([])
    const value = {dataState, setDataState}
    
    return (
        <LocaleContext.Provider value={value}>
            <React.Fragment>
                <NavigationBar />
                <div className="py-4" />
                <GetQuote />
                <div className="py-5" />
            </React.Fragment>
        </LocaleContext.Provider>
    );
}

export default App;
