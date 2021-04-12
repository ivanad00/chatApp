import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
// ChatEngine is component

import "./App.css";
import LoginForm from "./components/LoginForm";

const projectID = "62dff17d-f8b8-4ccc-a7ef-52301a72300a";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="ivana"
      userSecret="123abc"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
