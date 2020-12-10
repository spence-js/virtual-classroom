import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

import routes from './routes'

const App = () => {
    return(
        <BrowserRouter>
            <div className='App'>
                <h1>Hello</h1>
                { routes }
            </div>
        </BrowserRouter>
    )
}

export default App