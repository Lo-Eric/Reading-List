import { Route, Switch } from 'react-router-dom';

import './App.css';
import Splash from './components/Splash.js'


const App = () => (
    <div className="App">
      <Switch>
        <Route path="/" component={Splash}/>
        {/* <Route path="/personal-list" component={BooksList}/> */}
      </Switch>
    </div>
  
)

export default App;
