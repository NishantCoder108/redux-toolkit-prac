import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import User from "./User";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
      <div className="app-body"> 
        <Routes>
          <Route  path="/" element={<User/>}/>
          <Route  path="/userlist" element={<UserList/>}/>
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
