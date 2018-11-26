/** @flow **/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

class Screens extends Component<any> {
  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/privacy-policy'} component={PrivacyPolicy} />
        <Route exact path={'/terms-of-service'} component={TermsOfService} />
      </Switch>
    );
  }
}

export default Screens;
