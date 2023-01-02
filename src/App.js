import './App.css';
import { useDispatch } from "react-redux";
import {useEffect} from "react";
import { getAllPosts } from "./store/Action/TestAction";
import  Users from "./Components/Users"

function App() {
  const dispatch =useDispatch();
  
  useEffect(()=>{
    dispatch(getAllPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>This My App</h1>
      <Users/>
    </div>
  );
}

export default App;
