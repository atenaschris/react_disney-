import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
              <Login/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
