import { Route, Switch } from 'react-router-dom';

import './App.css';
import Splash from './components/Splash.js'

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Splash}/>
    </Switch>
  </div>
)

export default App;
