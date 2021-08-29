import logo from './logo.svg';


import Header from './components/Header';
import AboutMePage from './pages/AboutMePage'
import Footer from './components/Footer'
  
import { Route, Router, Switch } from 'react-router-dom';

import PortfolioPage from './pages/PortfolioPage';

import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Header/>
          <Switch>
            <Route path='/portfolio' exact>
              <PortfolioPage />
            </Route>
            <Route path='/'>
              <AboutMePage/>
            </Route>
          </Switch>
      <Footer/>
    </div>
  );
}

export default App;
