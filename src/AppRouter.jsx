import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NewsRoutes } from "./routing/NewsRoutes";
import { Header, Menu } from "./components/layout";
import { Provider } from "react-redux";
import store from "./redux/store";

const AppRouter = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default AppRouter;
