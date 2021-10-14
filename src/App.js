import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Experts from './Pages/Home/Experts/Experts';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">

     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/Booking/:serviceId'>
            <Booking></Booking>

          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/experts'>
           <Experts></Experts>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
