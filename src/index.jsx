import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import productsReducer from './productSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import authReducer from './authSlice'
import categoriesReducer from './categoriesSlice'
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store= configureStore(
    {
        reducer:{
            products:productsReducer,
            cart:cartReducer,
            wish:wishlistReducer,
            categories:categoriesReducer,
            auth:authReducer,
            
        }
    }
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render( <Provider store={store}>
    <App /></Provider>);