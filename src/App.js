import logo from './logo.svg';


import Header from './components/Header';
import AboutMePage from './pages/AboutMePage'
  
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <AboutMePage/>
        </Route>
        {/* <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
