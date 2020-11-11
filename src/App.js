import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Components/Home";

// style

import GlobalStyle from "./theme/GlobalStyle";
import Countdown from "./Components/Countdown";
import Start from "./Components/Start";

function App() {
  const location = useLocation();
  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path="/conte">
          <Start />
        </Route>
        <Route path="/horloge">
          <Countdown />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
