import React, { Component } from 'react';
import moment from 'moment';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import PortfolioContainer from './Portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import NoMatch from './Pages/no-match';
import PortfolioDetail from './Portfolio/portfolio-detail';





export default class App extends Component {
 

  
  
  render() {
    
    return (
      <div className='app'>
        
        <Router>
          <div>
          <h1>Rodideal Alexandru Portfolio</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
          <NavigationContainer />

          <Switch>
            <Route  exact path="/" component= {Home} />
            <Route  path="/about-me" component= {About} />
            <Route  path="/contact-me" component= {Contact} />
            <Route  path="/my-blog" component= {Blog} />
            <Route path="/portfolio/:slug" component= {PortfolioDetail}/>
            <Route   component= {NoMatch} />
          </Switch>
          </div>
        </Router>
       
        
</div>
    );
  }
}
