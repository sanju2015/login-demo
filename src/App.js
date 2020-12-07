import './App.css';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './Navbar';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import User from './User';

function App() {

  //const history = useHistory();
  //   if (!sessionStorage.getItem('auth-token')) {
  //     console.log('no auth token set');
  //     //do something like redirect to login page
  // } else {
  //     const authToken = '123456abcdef';
  //     if (sessionStorage.getItem('auth-token') === authToken) {
  //         console.log('good token. Log in.');
  //         history.push("/");
          
  //         //do something like redirect to todo page
  //     } else {
  //         console.log('bad token.')
  //         history.push('/login');
          
  //         //do something like redirect to login page
  //     }
  // }
  
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/user" component={User} />
          </Switch>
          
        </div>
    </BrowserRouter>
  );
}

export default App;
