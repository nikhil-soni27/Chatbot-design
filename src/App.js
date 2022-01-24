import "./App.css";
import React,{useState} from "react";
import {IoIosSend} from 'react-icons/io'

function App() {

  const [message, setmessage] = useState([]);
  const [messagename, setmessagename] = useState("");

  const minimize = () => {
    let chatbot = document.querySelector(".chatbot").style;
    if (chatbot.height !== "7rem") {
      chatbot.height = "7rem";
    } else {
      chatbot.height = "70vh";
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
  }  
  const addMessage=()=>{
    setmessage([
      ...message,
      {
        name: messagename
      }
    ])
    setmessagename("");
  }
  return (
    <>
    <div className="container">
      <div className="chatbot">
      <div className="nav">
        <img src="https://ai.axisbank.co.in/morfeuswebsdk/libs/websdk/images/minimize.svg" onClick={minimize}></img>
</div>
        <div className="right-sender">
            {message.map(msg => (
              <div className="msg">
              <div className="sender-side">
              <p>{msg.name}</p>
              </div>
              <div className="chat-circle"></div>
              </div>
              ))}
              </div>
        
      <form onSubmit={submitHandler}>
        <label>
          <input
            name="item"
            type="text"
            className="text"
            placeholder="Type Here"
            value={messagename}
            onChange={e => setmessagename(e.target.value)}
            />
            <IoIosSend className="send" onClick={addMessage}/>
          </label>
           </form>
            </div>
            </div>
    </>
  );
}


export default App;

