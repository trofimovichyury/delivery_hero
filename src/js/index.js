import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { getToken } from './utils/Api';
import App from './components/App';

getToken()
    .then(() => {
        render((
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ), document.getElementById('root'));
    });

