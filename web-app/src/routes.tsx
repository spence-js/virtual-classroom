import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Host from './Components/Pages/Host/Host'
import Participant from './Components/Pages/Participant/Participant'

export default (
    <Switch>
        <Route path='/Host' component={ Host } />
        <Route path='/Participant' component={ Participant } />
    </Switch>
)