import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { history } from './history';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/store';
const Login = React.lazy(() =>
  import('./Components/LoginComponent'));
const Signup = React.lazy(() =>
  import('./Components/SignupComponent'));

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <Suspense fallback={
          <div>
            {`Loading...`}
          </div>
        }>
          <Switch>
            <Route component={Login} path="/login" exact={true} />
            <Route component={Signup} path="/signup" exact={true} />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
