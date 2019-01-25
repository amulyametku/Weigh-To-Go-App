import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from  "./components/App";

const render = Component => ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

render(App);