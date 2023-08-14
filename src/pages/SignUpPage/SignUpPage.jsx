import axios from "axios";
import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import SingUpContainerSC from "./SignUpSC";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  function confirmRegister (e) {
		e.preventDefault();
    if(password !== confirmPassword) return alert("Different passwords, try again!");
      
      axios.post(`${import.meta.env.VITE_API_URL}/signUp`, {name, email, password, confirmPassword})

        .then((res) => {alert(res.data); navigate("/")}) 
        .catch(e => alert(e.response.data.message));
    }

  return (
    <SingUpContainerSC>
      <h1>The Green Nook</h1>
      <form onSubmit={confirmRegister}>
        <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            required 
            onChange={e => setName(e.target.value)}
            >
        </input>
        <input 
            type="email" 
            placeholder="E-mail" 
            value={email} 
            required 
            onChange={e => setEmail(e.target.value)}
            >
        </input>
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          required 
          onChange={e => setPassword(e.target.value)}
          >
        </input>
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          required 
          onChange={e => setconfirmPassword(e.target.value)}
          >
        </input>
        <button>Sign Up</button>
      </form>

      <Link to={'/'}>
        Already have an account? Log in!
      </Link>
    </SingUpContainerSC>
  )
}