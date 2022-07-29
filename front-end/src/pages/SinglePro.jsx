import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {  Single_FetchData } from "../Redux/products.js/action";
import { AddProCart } from "../Redux/products.js/action";
import { SingleCard } from "../components/SingleCard";

export const SinglePro = () => {
 
  const currentProduct = useSelector((store) => store.productData.currentProduct);
  const { _id } = useParams();

  //console.log(_id);
  const dispatch = useDispatch();
  //console.log("initial",currentProduct)
  useEffect(() => {
    if (_id) {
      dispatch(Single_FetchData(_id));
    } 
  }, [dispatch, _id]);
  //console.log("final",currentProduct);

  const addHandler = () => {
    alert("product added");
    currentProduct && dispatch(AddProCart(currentProduct));
  };

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
