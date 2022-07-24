
import { Navbar } from "../components/Navbar";


import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { FetchData } from "../Redux/products.js/action";
import {store} from "../Redux/store"
import { Card } from "../components/Card";
//import { Link } from "react-router-dom";

export const Product = () => {
   const products = useSelector((store) => store.productData.products);
   const dispatch = useDispatch();
 
   useEffect(() => {
     if (products?.length === 0) {
       dispatch(FetchData());
     }
   }, [dispatch, products?.length]);
  //  console.log(products.products);
     console.log(products);
    // console.log(products.products);
  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "85%",
          marginLeft: "200px",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          
        }}
      >
        {products.products.map((e) => {
          return (
            <div key={e._id}>
              {/* <Link to={`/products/${e._id}`}> */}
                <div>
                  <Card
                    avatar={e.avatar}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    category={e.category}
                  />
                </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <h2>Product page</h2>
    </div>
  );
};
