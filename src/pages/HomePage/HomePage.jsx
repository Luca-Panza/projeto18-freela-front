import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AppContext } from '/src/context/AppContext';
import Header from "/src/components/Header";
import styled from "styled-components";

export default function SignInPage() {
  const { user } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const config = { headers: { Authorization: user.token } };
    axios.get(`${import.meta.env.VITE_API_URL}/Home`, config)
      .then((res) => setData(res.data)) 
      .catch(e => alert(e.response.data.message));
  }, [reload]); 

  function buyPlant (id) {
    const config = { headers: { Authorization: user.token } };
    axios.put(`${import.meta.env.VITE_API_URL}/Home`, { id } ,config)

        .then((res) => {setReload(!reload)}) 
        .catch(e => alert(e.response.data.message));

    }

  return (     
    <>
    <Header/> 
      <HomePageContainerSC>
      <ul>
        {data.map((item, index) => (
          item.isAvailable === true && (
            <li key={index}>
              <img src={item.image} alt="Logo" />
              <div>
                <h2>Type: {item.typeId === 1 ? "Seed" : "Plant"}</h2>
                <h3>Price: {item.price}</h3>
                <button onClick={() => {buyPlant(item.id)}}> Buy </button>
              </div>
            </li>
          )))}
      </ul>
      </HomePageContainerSC>
    </> 
  );
}

const HomePageContainerSC = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
  margin-left:5%;
  margin-right:5%;
  ul{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap:30px;
    li{
      width: 150px;
      height: 250px;
      background-color: #f2f2f2;
      margin-bottom: 10px;

      border-radius: 10px;
      border: 5px solid #755715;
        img{
          width: 50%;
          margin-left: 25%;
          margin-top: 10%;
        }
        div{
          width: 100%;
          padding: 10px;
        }
      }
    }
`;
