import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../src/screens/Homepage/Homepage'
import NavBar from '../src/components/NavBar/NavBar'
import Footer from '../src/components/Footer/Footer'
import FAQ from './screens/FAQ/FAQ';
import RsvpPage from './screens/RsvpPage/RsvpPage';
import Registry from './screens/Registry/Registry';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route exact path='/' component={Homepage} />

        <Route path='/FAQ'>
          <FAQ />
        </Route>

        <Route path='/rsvp'>
          <RsvpPage />
        </Route>

        <Route path='/registry'>
          <Registry />
        </Route>

      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
