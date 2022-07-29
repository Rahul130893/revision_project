import { fetchCart } from "../Redux/products.js/action";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";


export const Cart = () => {
 
  const Cart = useSelector((store) => store.productData.cart)
 const dispatch= useDispatch()
  console.log(Cart.length)
 
 
 
  useEffect(() => {
   if (Cart?.length === 0) {
     // console.log("hello")
     dispatch(fetchCart());
   }
 }, [Cart?.length, dispatch]);

  
  

  return (
    <div
      style={{
        width: "80%",
        // height: "600px",
        background: "whitesmoke",
        border: "1px solid red",
        margin: "auto",

        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {Cart.map((e) => (
        <div key={e._id}>
          <div
            style={{
              width: "90%",
              height: "200px",
              background: "	#F3CFC6",
              marginTop: "40px",
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              margin: "auto",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "100%",

                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              }}
            >
              <img src={e.avatar} width="100%" height="100%" alt="" />
            </div>
            <div
              style={{
                textAlign: "left",

                height: "100%",
                width: "40%",
              }}
            >
              <div style={{ marginLeft: "20%", fontFamily: "monospace" }}>
                <h2>Title:{e.title}</h2>
                <h3>Price: ₹ {e.price}</h3>
                <h3>Rating:{e.rating}</h3>
                <p>Type: {e.category}</p>
              </div>
            </div>
            <div
              style={{
                height: "100%",
                width: "40%",
                display: "flex",
              }}
            >
              <button className="cartbtn">Remove From Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
