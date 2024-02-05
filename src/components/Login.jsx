import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

// * The Login component is a functional component that uses the useState hook to manage the username and password state. It takes in no props and returns a div element that contains two input elements for the username and password, and a button element to submit the form. The value of the input elements is set to the username and password state, and the onChange event handler is used to update the username and password state when the user types in the input elements. The handleSubmit function is called when the form is submitted, and it prevents the default form submission behavior. It then calls the setUser function from the UserContext to update the user state with the username and password entered by the user.

// Notes: useContext is used for fetching values from UserContext

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // setUser comes from UserContextProvider files
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); // ! Sending Details to the UserContextProvider
  };
  return (
    <div className="mt-3">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
