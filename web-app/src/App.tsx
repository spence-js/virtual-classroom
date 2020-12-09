import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

const App = () => {
    return(
        <BrowserRouter>
            <h1>Hello</h1>
            { routes }
        </BrowserRouter>
    )
}

export default App