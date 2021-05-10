import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Documentation from './Pages/Documentation';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Books from './Pages/Books';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/documentation">
            <Documentation />
          </Route>
          <Route path="/book/:bookSlug">
            <Books />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
