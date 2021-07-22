import logo from './logo.svg';


import Header from './components/Header';
import AboutMePage from './pages/AboutMePage'
  
import { Route, Switch } from 'react-router-dom';

import PortfolioPage from './pages/PortfolioPage'

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
        {/* <Route path='/favorites'>
          <FavoritesPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
