import React from 'react'
import { HashRouter } from 'react-router-dom'
import routes from 'routes.js'

const App = () => {
    return(
        <HashRouter>
            <h1>Hello</h1>
            { routes }
        </HashRouter>
    )
}

export default App