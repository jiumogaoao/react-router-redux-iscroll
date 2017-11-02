import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/';
let store = createStore(todoApp);
store.dispatch({
    type:"Add_Default"
})
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Route path="/" component={App}/>
</BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
