export const SingleCard = ({
  avatar,
  title,
  price,
  rating,
  category,
  onClick,
}) => {
  return (
    <div
      className="Singlecard"
      // style={{ width: "80%", height: "90%", margin:"auto" }}
    >
      <div>
        {" "}
        <img
          style={{
            width: "100%",
            height: "100%",
         
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          src={avatar}
          alt="img"
        />
      </div>
      <div className="details">
        {" "}
        <h2>Title: {title}</h2>
        <h3>Price: ₹ {price}</h3>
        <h3>Rating: {rating}</h3>
        <h3>Type: {category}</h3>
        <button onClick={() => onClick()}>Add to Cart</button>
      </div>
    </div>
  );
};
