import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/home">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/allProducts">
          <AllProducts></AllProducts>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
