import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Route to='/' component={HomeScreen} exact />
    <Route to='/product/:id' component={ProductScreen} />
    </main>

    <Footer />
    </Router>

  );
}

export default App;
