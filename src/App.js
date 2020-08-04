import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import jwt_decode from "jwt-decode";

import "./styles/App.less";
import { ConfigureStore } from "./store/configureStore";
import Routing from "./components/routes/Routing";
import { setAuthHeader } from "./components/utils/setAuthHeader";
import { setCurrentUser, logoutUser } from "./store/actions";

const store = ConfigureStore();

if (localStorage.token) {
  setAuthHeader(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // store.dispatch(clearCurrentProfile());
    window.location.href = "/";
  }
}

function App() {
  const darkMode = useDarkMode(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing {...{ darkMode }} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
