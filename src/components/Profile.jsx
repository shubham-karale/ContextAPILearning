import React, { useContext } from "react";

import UserContext from "../context/UserContext";

// * The Profile component is a functional component that uses the useContext hook to access the user state from the UserContext. It takes in no props and returns a div element that displays the username of the user. If the user state is null, the Profile component returns a div element that displays the message "please login". If the user state is not null, the Profile component returns a div element that displays the message "Welcome" followed by the username of the user.

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
