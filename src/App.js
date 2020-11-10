import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpperNav from "./components/UpperNav";
import ContListView from "./screens/ContListView";
import "./theme/styles.scss";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <UpperNav />
        <Switch>
          <Route exact path="/" render={() => <ContListView />} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
