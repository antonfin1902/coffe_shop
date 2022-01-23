import logo from './logo.svg';
import './App.css';
import 'bootstrap'
import Login from "./components/user/login"
import Main from "./components/Main"
import Admin from "./components/userAuth/Admin"
import Customer from "./components/userAuth/Customer"
import Header from './components/Header/Header';
import Footer from './components/Footer';
import {Switch,Route} from "react-router-dom"
import Hompage from './components/home/Homepage';
import Cart from './components/cart/Cart';
import {useState} from "react"
import CartProvider from './store/CartProvider';
import CreateItem from './components/Meals/MealItem/CreateItem';
import EditItem from './components/Item/EditItem';
function App() {
let x=2;
const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
 <CartProvider>{cartIsShown && <Cart onClose={hideCartHandler} />}   
  <Header onShowCart={showCartHandler}></Header> 
<Main >
<Switch>
<Route path="/" exact={true}>
            {/* <Hompage /> */}
            <Login/>
          </Route>

          
<Route path="/admin" exact={true}>
            <Admin />
          </Route>
          <Route path="/admin/create-item" exact={true}>
            <CreateItem />
          </Route>
          <Route path="/admin/edit-item/:id" exact={true}>
            <EditItem />
          </Route>

  <Route path="/customer">
      <Customer />
  </Route>


</Switch>
  
</Main>

<Footer/>
</CartProvider>
    </div>
  );
}

export default App;
