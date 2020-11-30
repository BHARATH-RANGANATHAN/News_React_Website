import React from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Nav from "./Nav"
import Sport from "./Components/Sports"
import Home from "./Components/Home"
import Business from "./Components/Business"
import Science from "./Components/Science"
import Technology from "./Components/Technology"
import Health from "./Components/Health"
import Entertainment from "./Components/Entertainment"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import "./styles.css"
import Search from "./Components/Search"
import Footer from "./Footer"

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Sports" component={Sport} />
      <Route path="/Business" component={Business} />
      <Route path="/Science" component={Science} />
      <Route path="/Technology" component={Technology} />
      <Route path="/Health" component={Health} />
      <Route path="/Entertainment" component={Entertainment} />
      <Route path="/Search" component={Search} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;