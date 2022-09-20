import React, {useState} from "react";
import Register from "./Register"

const Login = () => {
  const [userid, setuserId] = useState("");
  const [userpwd, setuserPwd] = useState("");
  const onChange = (e) => {

  };
  const onSubmit = (e) => {
    e.preventDefault();

  };
  return(
    <>
      <form onSubmit={onSubmit}>
        <input 
          name="uid"
          type="text" 
          placeholder="ID plz :)"
          value={userid}
          required 
        />
        <input 
          name="pwd"
          type="password" 
          placeholder="PUT YOUR PASSWORD"
          value={userpwd}
          required 
        />
        <input type="submit" value={}>
      </form>
      <div className="SignUp">
        
      </div>
    </>
  );
};

export default Login;