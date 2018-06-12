import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';
import FetchJS from './FetchJS';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={App} />
                    <Route path="/Home" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/Fetch" component={FetchJS} />
            </Switch>
        </App>
    </Router>

), document.getElementById('root'));

injectTapEventPlugin();
registerServiceWorker();
