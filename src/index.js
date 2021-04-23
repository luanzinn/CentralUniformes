import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import Post from "./pages/Post"

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();


//ReactDOM.render(
//    <Router>
//        <div>
//            <main>
//                <Route exact path="/" component={Home} />
//                <Route path="/about" component={About} />
//            </main>
//        </div>
//   </Router>, 
//    document.getElementById("root")
//    
//)
