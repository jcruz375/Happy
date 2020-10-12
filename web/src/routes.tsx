import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanageMap';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" exact component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;