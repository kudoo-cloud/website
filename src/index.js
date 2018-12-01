/* @flow */

import '@babel/polyfill';
import 'normalize.css';
import '@kudoo/components/build/config/theme/css/kudoo-fonts.css';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme, KudooThemeProvider } from '@kudoo/components';
import { jss, JssProvider } from 'react-jss';
jss.options.insertionPoint = document.getElementById('jss-insertion-point');
import Screens from './screens';

ReactDOM.render(
  <JssProvider jss={jss}>
    <KudooThemeProvider theme={theme}>
      <Router>
        <Screens />
      </Router>
    </KudooThemeProvider>
  </JssProvider>,
  document.getElementById('root')
);
