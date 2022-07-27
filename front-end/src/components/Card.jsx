

export const Card = ({avatar,title, price, rating, category}) => {
    return (
      <div
        className="card"
        style={{ width: "290px", height: "500px", marginTop: "50px" }}
      >
        <img
          style={{ width: "270px", height: "280px", margin: "10px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px "}}
          src={avatar}
          alt="img"
        />
        <p>Title:{title}</p>
        <h3>Price: ₹ {price}</h3>
        <h3>Rating:{rating}</h3>
        <p>Type: {category}</p>
      </div>
    );
}