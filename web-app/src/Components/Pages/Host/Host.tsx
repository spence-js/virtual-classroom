import React, { useState } from 'react'
import axios from 'axios'


const Host = () => {

    const [example, setExample] = useState('what does the server say?')

    const sendGet = () => {
        axios.get('/api/getHello')
            .then((response) => {
                setExample(response.data)
            })
    }

    return(
        <div>
            <p>Host</p>
            <p>{ example }</p>
            <button onClick={() => sendGet()}>click on me!</button>
        </div>
    )
}

export default Host