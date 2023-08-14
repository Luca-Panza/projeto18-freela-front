import axios from "axios";
import { useNavigate} from "react-router-dom"
import { useState, useContext } from "react";
import { AppContext } from '/src/context/AppContext';
import AddPlantContainerSC from "./AddPlantSC";

export default function AddPlant() {
  const { user } = useContext(AppContext);
  const [plantName, setplantName] = useState("");
  const [typeId, settypeId] = useState();
  const [price, setprice] = useState(0);
  const [image, setimage] = useState("");
  const navigate = useNavigate();

  function AddPlantRequest (e) {
		e.preventDefault();

    const typeIdValue = typeId === "seed" ? 1 : typeId === "plant" ? 2 : null;

    if (typeIdValue === null) {
      alert("Type must be seed or plant!");
      return;
    }

      const config = { headers: { Authorization: user.token } };
      axios.post(`${import.meta.env.VITE_API_URL}/Addplant`, {plantName, typeId:typeIdValue, isAvailable:true, price, image}, config)

        .then((res) => {navigate("/Home")}) 
        .catch(e => alert(e.response.data.message));
    }

  return (
    <AddPlantContainerSC>
      <h1>The Green Nook</h1>
      <form onSubmit={AddPlantRequest}>
        <input 
            type="text" 
            placeholder="Plant Name" 
            value={plantName} 
            required 
            onChange={e => setplantName(e.target.value)}
            >
        </input>
        <input 
            type="text" 
            placeholder="Seed or Plant" 
            value={typeId} 
            required 
            onChange={e => settypeId(e.target.value)}
            >
        </input>
        <input 
          type="number" 
          placeholder="price" 
          value={price}
          required 
          onChange={e => setprice(e.target.value)}
          >
        </input>
        <input 
          type="text" 
          placeholder="Link to image" 
          value={image}
          required 
          onChange={e => setimage(e.target.value)}
          >
        </input>
        <button>Add plant</button>
      </form>

    </AddPlantContainerSC>
  )
}