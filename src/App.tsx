import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./components/Home";
import Users from "./components/Users";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Container>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/counter' component={Counter} exact />
            <Route path='/users' component={Users} exact />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
