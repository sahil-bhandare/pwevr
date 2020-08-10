import React from 'react';
import './styles/homepage.css';
import Homepage from './components/homepage.jsx';
import About from './components/about.jsx';
import Products from './components/products.jsx';
import MobileApp from './components/mobileapp.jsx';
import Services from './components/services.jsx';
import Subscribe from './components/subscribe.jsx';
import Error404 from './components/error404.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
       <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/mobileapp" component={MobileApp} />
          <Route path="/services" component={Services} />
          <Route path="/subscribe" component={Subscribe} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
