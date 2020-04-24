import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aside from './components/aside';
import Index from './components/index';
import Footer from './components/footer';
import Socio from './components/socio';
import Entradas from './components/entradas';
import Poleras from './components/poleras';
import Admin from './components/admin';

function App() {
  
  return (
    <Router>
      <div className="App">
        <body>
          <Aside />
          <main>
            <Switch>
              <Route path="/" exact component={Index}/>
              <Route path="/socioPage" exact component={Socio}/>
              <Route path="/entradasPage" exact component={Entradas}/>
              <Route path="/polPage"  component={Poleras}/>
              <Route path="/admin" component={Admin}/>
            </Switch>
          </main>
          <div className="footerfake">

          </div>
          <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
