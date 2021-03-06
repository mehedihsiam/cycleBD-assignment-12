import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Order from './pages/Order/Order';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute exact path="/booking/:id">
            <Order></Order>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
