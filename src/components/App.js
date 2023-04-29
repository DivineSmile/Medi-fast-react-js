import React,{Fragment} from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';
import Products from './Products';
import {Router, Route, Switch} from 'react-router-dom';
import useProducts from './useProducts';
import Help from './Help';
import Offers from './Offers';
import Homepage from './Homepage';
import History from './History'
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import Orders from './Orders';

function App() {
  
  const {filteredProducts, cartItems, onAddCart, onRemoveCart, handleChangeSort, handleSearch, search,userLoginChange,pwdLoginChange,login,signUp,cnfPwdLoginChange,user,logout,onCheckout,orders,buy} = useProducts();
  
  return (
    <Fragment>
      <Router history = {History} >
       <Header title="MEDI-Fast" count={cartItems} user={user} logout={logout} buy={buy}/>
          <Switch>
            <Route path="/Medi-fast-react-js" exact render={()=> < Homepage buy={buy}/>} />
            <Route path="/Medi-fast-react-js/signup" render={()=> < Signup userLoginChange={userLoginChange} pwdLoginChange={pwdLoginChange} cnfPwdLoginChange={cnfPwdLoginChange} signUp = {signUp} buy={buy}/>} />
            <Route path="/Medi-fast-react-js/signin" render={()=> <Signin userLoginChange={userLoginChange} pwdLoginChange={pwdLoginChange} login={login} buy={buy}/>} />
            <Route path="/Medi-fast-react-js/products" render={()=><Products products={filteredProducts} cartItems={cartItems} onAddCart={onAddCart} onRemoveCart={onRemoveCart} handleChangeSort={handleChangeSort} handleSearch={handleSearch} search={search} onCheckout={onCheckout}/>} />
            <Route path="/Medi-fast-react-js/help" render={()=> <Help/>} />
            <Route path="/Medi-fast-react-js/offers" render={()=> <Offers/>} />
            <Route path="/Medi-fast-react-js/checkout" render={()=> <Checkout cartItems={cartItems} onAddCart={onAddCart} onRemoveCart={onRemoveCart}/>}/>
            <Route path="/Medi-fast-react-js/orderConfirmation" render={() => <OrderConfirmation/>}/>
            <Route Path="/Medi-fast-react-js/orders" render={()=> <Orders orders={orders}/>}/>
          </Switch>
            
        <Footer/>
      </Router>
    </Fragment>
  );
}

export default App;
