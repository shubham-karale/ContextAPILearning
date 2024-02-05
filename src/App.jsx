import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

// * Notes: What ever you write in the UserContextProvider will be available to all the children components of the UserContextProvider

function App() {
  return (
    <UserContextProvider>
      <div className="text-2xl bg-gray-400 text-white flex flex-col gap-4 justify-center items-center mt-2">
        <h1>Welcome to Context API Learnings</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
