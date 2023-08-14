import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AppContext } from '/src/context/AppContext';
import Header from "/src/components/Header";
import styled from "styled-components";

export default function MyPlantsPage() {
  const { user } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const config = { headers: { Authorization: user.token } };
    axios.get(`${import.meta.env.VITE_API_URL}/Myplants`, config)
      .then((res) => setData(res.data)) 
      .catch(e => alert(e.response.data.message));
  }, [reload]);

  function editplant(id) {

    const config = { headers: { Authorization: user.token } };
    axios.post(`${import.meta.env.VITE_API_URL}/Myplants`, { id }, config)
      .then((res) => {setReload(!reload)})
      .catch(e => alert(e.response.data.message));
  }

  return (     
    <>
      <Header/> 
      <MyPlantsContainerSC>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <img src={item.image} />
              <div>
                <h2>Type: {item.typeId}</h2>
                <h3>Price: {item.price}</h3>
                <AvailabilityDiv isAvailable={item.isAvailable} />
                <button onClick={() => editplant(item.id)}>edit plant status</button>
              </div>
            </li>
          ))}
        </ul>
      </MyPlantsContainerSC>
    </> 
  );
}

const MyPlantsContainerSC = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
  margin-left: 5%;
  margin-right: 5%;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;

    li {
      width: 150px;
      height: 250px;
      background-color: #f2f2f2;
      margin-bottom: 10px;
      border-radius: 10px;
      border: 5px solid #755715;

      img {
        width: 50%;
        margin-left: 25%;
        margin-top: 10%;
      }

      div {
        width: 100%;
        padding: 10px;
        button{
          width: 50px;
          height: 30px;
        }
      }
    }
  }
`;

const AvailabilityDiv = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isAvailable ? 'green' : 'red')};
`;
