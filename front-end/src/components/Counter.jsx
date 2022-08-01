import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCart } from "../Redux/products/action";
//import { store } from "../Redux/store"
import axios from "axios";
export const Counter = () => {
  
  //  console.log("inintial", Cart.length);

  //     const fetchpro = async () => {
  //       const response = await axios.get("https://projects13.herokuapp.com/cart")
  //         .catch((err) => {
  //         console.log("err", err)
  //         })
  //         console.log(response.data.cartItems);
  //         // console.log(response.data.cartItems.length)
  //       dispatch(response.data.cartItems)
  //     }
  //    fetchpro()
   const Cart = useSelector((store) => store.productData.cart);
   const dispatch = useDispatch();
   //console.log(Cart.length);

   useEffect(() => {
     if (Cart?.length === 0) {
       // console.log("hello")
       dispatch(fetchCart());
     }
   }, [Cart?.length, dispatch]);

  return (
    <div>
      <div>{Cart?.length ? Cart.length : 0}</div>
    </div>
  );
};
