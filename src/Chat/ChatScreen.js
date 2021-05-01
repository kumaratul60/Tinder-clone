import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen(props) {
  const [input, setInput] = useState("");
  const { messages, setMessages } = useState([
    {
     name: "Elon",
      image:
        "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      message: "whats here ❤️",
    },
    {
      name: "Elon",
      image:
        "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      message: "how's going on",
    },
    
    {
      name: "Elon",
      image: "...",
      message: "ooo",
    },
    {
      message: "trying to do better",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
//{ message: input } == input
    setMessages([...messages,{ message: input } ]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        {/* YOU MATCHED WITH {`${props.name}`} ON 12/12/2020 */}
        YOU MATCHED WITH ELON ON 12/12/2020
      </p>
      {/* {messages && */}
       {messages && messages.map((message) =>  
          
         message.name ? (
            <div className="chatScreen_message">
              <Avatar
                className="chatScreen_image"
                alt={ message.name}
                src={ message.image}
              />
              <p className="chatScreen_text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen_message">
              <p className="chatScreen_textUser">{message.message}</p>
            </div>
          )
        )}
       

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          placeholder=" Type a message... "
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
export default ChatScreen;
