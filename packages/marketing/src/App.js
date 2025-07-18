import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma', // instead of jss1, jss2... will be ma1, ma2
})

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
};