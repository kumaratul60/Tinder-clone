import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
 import Chats from "./Chat/Chats";
 import ChatScreen from "./Chat/ChatScreen";
import TinderCards from "./TinderCard/TinderCards";
import SwipeButtons from "./SwipeButton/SwipeButtons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path  = "/chat/:person">
        <Header backButton = "/chat"/>
        <ChatScreen/>
        </Route>
          <Route path="/chat">
          <Header backButton = "/"/>
          <Chats/>
          </Route>
          <Route path="/">
          <Header />
           <TinderCards/>
           <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
