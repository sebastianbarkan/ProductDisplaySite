import React from 'react';
import NavigationBar from './components/Navigation';
import GetQuote from './components/GetQuote';

function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="py-4" />
            <GetQuote />
            <div className="py-5" />
        </React.Fragment>
    );
}

export default App;
