import styled from "styled-components";

const SingInContainerSC = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(./src/assets/3flowerpots.gif);
  background-repeat: no-repeat;
  background-size: 50vh;
  background-position: center bottom;
  h1 {
    position: relative;
    top: -15%;

    font-family: "Patrick Hand", cursive;
    font-weight: 400;
    font-size: 45px;
    line-height: 25px;
    color: #755715;
  }
  a {
    text-decoration: none;
    font-family: "Patrick Hand", cursive;
    font-size: 20px;
    color: #755715;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    border-radius: 5px;

    input[type="email"],
    [type="password"] {
      width: 300px;
      height: 45px;
      border-radius: 5px;

      background: rgba(255, 255, 255, 0.6);
      border: 1px solid #d5d5d5;

      font-family: "Gaegu", cursive;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
    }
    button {
      width: 250px;
      height: 45px;
      border-radius: 5px;
      margin-bottom: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: "Gaegu", cursive;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      background: rgba(255, 255, 255, 0.6);
      border: 1px solid #d5d5d5;

      color: #7b778b;
      transition-duration: 0.4s;
    }
    button:hover {
      background-color: #755715;
      opacity: 0.6;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default SingInContainerSC;
