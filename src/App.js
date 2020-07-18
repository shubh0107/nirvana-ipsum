import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components'
import { Nirvana, PageNotFound } from './pages';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Nirvana />
            <Footer />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
