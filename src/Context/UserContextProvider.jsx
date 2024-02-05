import React from "react";

import UserContext from "../context/UserContext"; // Fix the import path to match the actual file name

// * The UserContextProvider component is a wrapper component that provides the user state and setUser function to its children components. It uses the React Context API to provide the user state to its children components. The UserContextProvider component takes in a children prop, which is a React node that represents the children components of the UserContextProvider. It uses the UserContext.Provider component to provide the user state and setUser function to its children components. The value prop of the UserContext.Provider component is an object that contains the user state and setUser function. The user state is initialized to null, and the setUser function is used to update the user state. The UserContextProvider component returns the UserContext.Provider component with the value prop set to an object containing the user state and setUser function, and the children prop passed to it. This allows the children components of the UserContextProvider to access the user state and setUser function using the useContext hook.

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      
      // ! It Provides the user state and setUser function to its children
      components
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
