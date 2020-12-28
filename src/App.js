import "./App.css";
import Home from "./Components/Desktop-Home/Home";
import About from "./Components/Desktop-About/About";
import Contact from "./Components/Desktop-Contact/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
