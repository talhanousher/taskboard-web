// import React, { Component } from 'react';
// import { ConnectedRouter } from 'connected-react-router';
// import { Redirect, Switch } from 'react-router';
// import { Route } from 'react-router-dom';
// import { history } from './history';
// import Login from './Components/LoginComponent';
// import Signup from './Components/SignupComponent';
// import { Provider } from 'react-redux';
// import { configureStore } from './Redux/store';

// class Main extends Component {

//     render() {
//         const store = configureStore();
//         return (
//             <Provider store={store}>
//                 <ConnectedRouter history={history} >
//                     <Switch>
//                         <Route component={Login} path="/login" exact={true} />
//                         <Route component={Signup} path="/signup" exact={true} />
//                     </Switch>
//                     <Redirect to="/login" />
//                 </ConnectedRouter>
//             </Provider>
//         );
//     }
// }

// export default Main;