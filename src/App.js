import logo from './logo.svg';


import Header from './components/Header';
import AboutMePage from './pages/AboutMePage'
  
import { Route, Switch } from 'react-router-dom';

import PortfolioPage from './pages/PortfolioPage';

import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <AboutMePage/>
        </Route>
        <Route path='/portfolio' exact>
          <PortfolioPage />
        </Route>
        <Route path='/contact'>
          <ContactPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
