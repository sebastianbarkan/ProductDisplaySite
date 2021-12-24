import React from 'react';
import GetQuote from './components';

function App() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a href="/" className="navbar-brand text-uppercase">
                        get quote
                    </a>
                </div>
            </nav>

            <div className="py-5" />

            <GetQuote />

            <div className="py-5" />

            <footer className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a href="/" className="navbar-brand text-uppercase">
                        get quote
                    </a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default App;
