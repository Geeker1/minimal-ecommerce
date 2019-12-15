import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Layout from './components/Layout';

const Category = lazy(()=>import('./pages/Categories'));

const Routes = ()=>{
    return <Router>
    <Layout/>
    <Suspense fallback={<div>Loading....</div>}>
    <Switch>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/categories" component={Category}/>
        <Route path="" component={Home} />
    </Switch>
    </Suspense>
</Router>
}

export default Routes
