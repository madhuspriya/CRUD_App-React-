import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUsers from "./components/users/AddUsers";
import EditUsers from "./components/users/EditUsers";
import ViewUsers from "./components/users/ViewUsers";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/users/add" component={AddUsers}></Route>
          <Route exact path="/users/edit/:id" component={EditUsers}></Route>
          <Route exact path="/users/ViewUsers/:id" component={ViewUsers}></Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
