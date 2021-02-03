import React from 'react';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom'
import Login from './pages/Login/Login.js'
import Zone from './pages/Zone/Zone';
import Error from './pages/Error/Error.js'
import ProtectRoute from './components/ProtectRoute/ProtectRoute'
function App() {
  return (
      <BrowserRouter>
          <Switch>
            {/* <Route path='/' exact component={Jump}></Route> */}
            <Redirect to='/zone' from='/' exact/>
            <Route path='/login' exact component={Login}></Route>
            <ProtectRoute path='/zone'  exact component={Zone}></ProtectRoute>
            <Route component={Error}></Route>
          </Switch>
      </BrowserRouter>
  );
}
export default App;
