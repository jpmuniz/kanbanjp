import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Board from "./components/board/index";
import Form from "./components/form/index";
import List from "./components/list/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Board} />
        <Route path="/List" component={List} />
        <Route path="/Form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
