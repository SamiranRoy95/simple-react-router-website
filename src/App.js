
import './App.css';
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './Header';
import Service from './Service';
import Blog from './Blog';
import About from "./About";
import NotFound  from './NotFound';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        
                <Switch>
                    <Route  exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/home">
                      <Home/>
                    </Route>
                    <Route path="/service">
                      <Service/>
                    </Route>
                    <Route path="/about">
                      <About/>
                    </Route>
                    <Route path="/blog">
                      <Blog/>
                    </Route>
                    <Route path="*" component={NotFound} />

                </Switch>
                <Footer/>
            </Router>
    </div>
  );
}

export default App;
