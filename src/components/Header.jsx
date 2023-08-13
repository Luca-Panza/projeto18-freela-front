import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { PiPottedPlant } from 'react-icons/pi';
import logo from '/src/assets/logo.png';

export default function Header () {
  const navigate = useNavigate();

  return (
    <HeaderContainerSC>
      <div>
        <HeaderLink to="/Home">     
          <h1 >The Green Nook</h1>
          <img src={logo} alt="Logo"></img>
        </HeaderLink> 
      </div>
      <div>
        <MyPlants alt="Your Plants" onClick={() => {navigate("/MyPlants")}}/>
        <ShoppingCart alt="Shopping cart" onClick={() => {navigate("/")}}/>
        <Account alt="Account" onClick={() => {navigate("/AddPlant")}}/>
      </div>
    </HeaderContainerSC>
  );
}

const MyPlants = styled(PiPottedPlant)`
  cursor: pointer;
  font-size: 25px;
  margin-right: 10%;
`;

const Account = styled(AiOutlineUser)`
  cursor: pointer;
  font-size: 25px;
  margin-right: 10%;
`;

const ShoppingCart = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  font-size: 25px;
  margin-right: 10%;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  
  h1 {
    width: 140px;
    padding-left: 10%;
    cursor: pointer;
    font-family: "Patrick Hand", cursive;
    font-size: 20px;
    color: #FFFFFF;
  }

  img {
    width: 30px;
    cursor: pointer;
    margin-left: 5%;
  }
`;

const HeaderContainerSC = styled.header`
  width: 100%;
  height: 70px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  z-index:1;
  position:fixed;
  left: 0px;
  top: 0px;

  background: #755715;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  & > div:nth-child(1) {
  width: 50%;
  display:flex;
  align-items:center;
  }
  & > div:nth-child(2) {
    width: 50%;
    display:flex;
    justify-content:flex-end;
  }
  `;
