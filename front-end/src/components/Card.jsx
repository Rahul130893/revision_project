

export const Card = ({avatar,title, price, rating, category}) => {
    return (
      <div
        className="card"
        style={{ width: "290px", height: "500px", marginTop: "50px" }}
      >
        <img
          style={{ width: "270px", height: "300px", margin: "10px" }}
          src={avatar}
          alt="img"
        />
        <p>{title}</p>
        <h3>{price}</h3>
        <h3>{rating}</h3>
        <p>{category}</p>
      </div>
    );
}