import logo from './logo.svg';
import './App.css';
import {   BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Addproducts from './components/Addproducts';
import UpdateProducts from './components/UpdateProducts';

import Profile from './components/Profile';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Protected from './components/Protected';
import Login from './components/Login';


    function App() {
      return (
        <div className="App">
        <BrowserRouter>
        <Header/>
             <Routes>
                <Route element={<Protected/>}>
               
                <Route path='/' element={<Product/>}> Product</Route>
                <Route path='/addproducts' element={<Addproducts/>}> Add Products</Route>
                <Route path='/updateproducts/:id' element={<UpdateProducts/>}> Update Products</Route>
                <Route path='/profile' element={<Profile/>}>Profile</Route>
              
                </Route>
                <Route path='/signup' element={<Signup/>}>  Signup</Route>
                <Route path='/login' element={<Login/>}>Login</Route>
             
             </Routes>
        </BrowserRouter>
        <Footer/>
    
        </div>
      );
    }

export default App;
