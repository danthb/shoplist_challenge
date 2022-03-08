import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Views
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import ProductView from './components/ProductView';
//Components
import Navbar from './components/Navbar';
import Sidedrawer from './components/Sidedrawer';
import Backdrop from './components/Backdrop';


function App() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  return (
    <Router>
      <Navbar click={ () => setIsSideDrawerOpen(true)}/>
      <Sidedrawer show={ isSideDrawerOpen} click={ () => setIsSideDrawerOpen(false)}/>
      <Backdrop show={ isSideDrawerOpen} click={ () => setIsSideDrawerOpen(false)}/>
    <main className="app">
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/products" component={ProductsView} />
        <Route exact path="/product/:id" component={ProductView} />
      </Switch>
    </main>
  </Router>

  );
}

export default App;
