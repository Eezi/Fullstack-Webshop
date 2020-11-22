import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <Router>
    <Header />

    <main>
      <h1 style={{paddingTop: '.8rem'}}>Welcome to Tech-Store</h1> 
      
      <Switch>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
      
    </main>

    <Footer />

    </Router>
  );
}

export default App;
