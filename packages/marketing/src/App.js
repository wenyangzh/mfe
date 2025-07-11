import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma', // instead of jss1, jss2... will be ma1, ma2
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
};