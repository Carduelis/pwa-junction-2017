import "./styles/style.less";
// import "./index.ejs";
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import store from './store';
const rootElement = document.getElementById('root');

render(<Root store={store} />, rootElement);
// router(rootElement);
