import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Single_FetchData } from "../Redux/products/action";
import { AddProCart } from "../Redux/products/action";
import { SingleCard } from "../components/SingleCard";
import { fetchCart } from "../Redux/products/action";
import Axios from "axios";
import { store } from "../Redux/store";
import { useState } from "react";

//import { Counter } from "../components/Counter";

export const SinglePro = () => {
  const currentProduct = useSelector(
    (store) => store.productData.currentProduct
  );
  const Error = useSelector((store) => store.productData.error);
 const [error, setError]= useState(Error)
  const { _id } = useParams();
  const dispatch = useDispatch();



  
  useEffect(() => {
    if (_id) {
      dispatch(Single_FetchData(_id)); 
    }
   
  }, [dispatch, _id]);
 


  const addHandler = () => {
     currentProduct && dispatch(AddProCart(currentProduct)) 
    
  
  
  };
 
    //  const fetchItem = async (currentProduct) => {
    //    Axios.post("https://projects13.herokuapp.com/cart", currentProduct)
    //      .then((r) => console.log(r.data)
    //        )
    //       .catch((e) => e.message
    //       )

    //   }
     // fetchItem(currentProduct)

     return (
       <div>
         <div
           style={{
             width: "75%",
             // border: "1px solid gray",
             height: "700px",
             margin: "auto",
           }}
         >
           <SingleCard
             avatar={currentProduct.avatar}
             title={currentProduct.title}
             price={currentProduct.price}
             rating={currentProduct.rating}
             category={currentProduct.category}
             onClick={addHandler}
           />
         </div>
       </div>
     );
   };
