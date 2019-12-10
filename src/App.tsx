import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <Layout/>
            <Switch>
            	<Route path="/about" component={About}/>
            	<Route path="/login" component={Login}/>
            	<Route path="/signup" component={SignUp}/>
            	<Route path="/contact" component={Contact}/>
                <Route path="/categories" component={Category}/>
                <Route path="" component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
