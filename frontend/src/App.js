import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
    <Header />

    <main>
      <h1 style={{paddingTop: '.8rem'}}>Welcome to Tech-Store</h1> 
      
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
      </Switch>
      
    </main>

    <Footer />

    </Router>
  );
}

export default App;
