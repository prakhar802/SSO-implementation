import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Restaurant from "./basics/Resturant"
import {useState} from 'react';
function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log(user);
  const [ps,setPs]=useState(true);
  const handleRedirect=()=>{
    setPs(false);
  }
  return (
    <div className="App">
      <header className="App-header">
      {isAuthenticated ? (
        <div>
        <button onClick={(e) => logout()}>Logout </button>
        <h1>Welcome to Prakhar Jain's Restaurant</h1>
        <button onClick={handleRedirect}>Go to Home Page</button>
        {
          ps ?
          <div></div> : 
          <div><Restaurant /></div>
        }
        </div>
      ) :  (<button onClick={(e) => loginWithRedirect()}>Login</button>)}
      
      </header>
    </div>
  );
}

export default App;
