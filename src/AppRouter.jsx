import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NewsRoutes } from "./routing/NewsRoutes";
import { Header, Menu } from "./components/layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Menu />
      <Switch>
        {NewsRoutes.map((r) => (
          <Route
            exact={r.path === "/"}
            path={r.path}
            component={(props) => r.component(props)}
            key={r.text}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
