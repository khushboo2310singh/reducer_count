
import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState={
    cart:[],
    count:0,
    subTotal:0,
    totalPrice: 0,
    totalQuantity:0,
};


const cartSlice = createSlice(
    {
        name:'cart',
        initialState,
       reducers:{
        addProduct:(state,action)=>{
          
            const obj={...action.payload, quantity:1}
            const records = state.cart;
            const index = records.findIndex(row=>row.id === obj.id);
            state.count = state.count + 1;
            console.log( "---",state.count);
            if(index===-1)
            {
                records.push(obj);
            }
            else 
            {
                //records[index].q=records[index].q+obj.q;
                records[index].quantity += obj.quantity;
            }
            state.cart=records; 
            toast.success('Added to cart', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            

        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
      
        removeProduct:(state,action)=>{
            state.cart.splice(action.payload,1);
            toast.success('deleted from bag', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
        },
       
        decreaseProductQuantity:(state,action)=>{
            state.cart = state.cart.map((product) => {
                if (product.id === action.payload) {
                  if(product.quantity==1)
                  return {...product,quantity:product.quantity}
                  return { ...product, quantity: product.quantity - 1 };
                }
                return product;
              });
        },
        increaseProductQuantity:(state,action)=>{
            state.cart = state.cart.map((product) => {
                if (product.id === action.payload) {
                  return { ...product, quantity: product.quantity + 1 };
                }
                return product;
              });
        }
       }
    }
);

export const {addProduct , removeProduct,addPrice,totalQuantity,count, getCartTotal,increaseProductQuantity, decreaseProductQuantity}=cartSlice.actions;
export default cartSlice.reducer;