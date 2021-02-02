import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {isLogin} from '@/utils/isLogin.js';
import Login from './pages/Login/Login.js'
import Zone from './pages/Zone/Zone';
import myCookie from '@/utils/cookie.js';
import Error from './pages/Error/Error.js'
let oCookie = new myCookie();
oCookie.removeCookie('user')
function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Jump}></Route>
            <Route path='/login'exact component={Login}></Route>
            <Route path='/zone' exact component={Zone}></Route>
            <Route component={Error}></Route>
          </Switch>
      </BrowserRouter>
  );
}

function Jump(props){
  let bool = isLogin('user')
  let {history} = props;
  if(bool){
    history.push('/zone')
  }else{
    history.push('/login')
  }
  return null;
}

export default App;
