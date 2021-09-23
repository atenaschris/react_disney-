import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";
import DetailPage from "./components/DetailPage";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {userName ? (
            <Route path="/detail/:MovieId">
              <DetailPage />
            </Route>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
