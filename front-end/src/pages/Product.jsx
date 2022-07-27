//import { Navbar } from "../components/Navbar";
//import axios from "axios"
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { FetchData } from "../Redux/products.js/action";
import { store } from "../Redux/store";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

export const Product = () => {
  const Products = useSelector((store) => store.productData.products);
  const dispatch = useDispatch();
//   const fetchpro = async () => {
//     const response = await axios.get("https://projects13.herokuapp.com/product")
//       .catch((err) => {
//       console.log("err", err)
//       })
//     console.log(response.data.products);
//     dispatch(response.data.products)
//   }
//  fetchpro()
//console.log("inigtial", Products);
 // console.log(store.getState());

  useEffect(() => {
    if (Products?.length === 0) {   
       dispatch(FetchData())
     }
  },[dispatch, Products?.length]);
 
  //  console.log("final", Products);
  
   
  return (
    <div>
      {Products.length===0? <div>....loading</div>:null}

       <div
        style={{
          width: "85%",
          marginLeft: "200px",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {Products.map((e) => {
          return (
            <div  key={e._id}>
              <Link to={`/products/${e._id}`} style={{textDecoration:"none"}}> 
              <div>
                <Card
                  avatar={e.avatar}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  category={e.category}
                />
              </div>
               </Link> 
           </div>
          );
        })}
      </div> 

      <h2>Product page</h2>
    </div>
  );
};
