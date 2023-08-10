import axios from "axios";
import { Link, useNavigate} from "react-router-dom"
import { useState, useContext } from "react";
import { AppContext } from '/src/context/AppContext';
import SingInContainerSC from "./SignInSC";

export default function SignInPage() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function confirmLogin (e) {
		e.preventDefault();

    axios.post(`${import.meta.env.VITE_API_URL}/signIn`, {email, password})

        .then((res) => {
          setUser(res.data)
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/Home")
          }) 
        .catch(e => alert(e.response.data.message));

    }

  return (
    <SingInContainerSC>
      <h1>The Green Nook</h1>
      <form onSubmit={confirmLogin}>
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
        <button>Sign In</button>
      </form>

      <Link to={'/signUp'}>
        Don't have an account? Register!
      </Link>
    </SingInContainerSC>
  )
}