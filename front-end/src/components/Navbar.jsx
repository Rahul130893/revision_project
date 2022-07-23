import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;

  height: 70px;
  background-color: #1976d2;
  color: whitesmoke;
`;
const Left = styled.div`
  flex: 2;

  border: 1px solid red;
`;

const Right = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  gap: 10%;
`;

const Logo = styled.div`
  margin: auto;
  width: 80%;
  letter-spacing: 0.3rem;
  font-weight: 700;
  font-family: monospace;
  text-align: center;
  border: 1px solid green;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const LogoTag = styled.h1``;

const Menu = styled.h3``;
const Count = styled.p`
  color: yellow;
  font-weight: 500;
  margin-top: -70px;
  margin-left: 10px;
`;
const Cart = styled.div`
  /* border: 1px solid black; */
  height: 100%;
`;
export const Navbar = () => {
  return (
    <Container>
      <Left>
        <Link to={"/"} style={{ textDecoration: "none", color: "whitesmoke" }}>
          <Logo>
            <LogoTag>MY OWN PROJECT</LogoTag>
          </Logo>
        </Link>
      </Left>
      <Right>
        <Link
          to={"/product"}
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <Menu>Products</Menu>
        </Link>

        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <Menu>Register</Menu>
        </Link>
        <Link
          to={"/signin"}
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <Menu>SignIn</Menu>
        </Link>

        <Link to={"/cart"}>
          <Cart>
            <ShoppingCartOutlinedIcon
              style={{
                width: "30px",
                height: "30px",
                padding: "15px",
                textDecoration: "none",
                color: "whitesmoke",
              }}
            />
            <Count>1</Count>
          </Cart>
        </Link>
      </Right>
    </Container>
  );
};
