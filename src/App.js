import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/signUp";
import './App.css';

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login authContext={authContext} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

// testing Auth
const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 500);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 500);
  }
};
const authContext = createContext();
const useAuth = () => {
  return useContext(authContext);
}
const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };
  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };
  return {
    user,
    signin,
    signout
  };
}

export default App;
