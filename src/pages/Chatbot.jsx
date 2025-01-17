import React, { useState } from "react";
import "../css/robot.min.css";

const Chatbot = () => {
  // const [isVisible, setIsVisible] = useState(false); // 控制聊天機器人是否展開
  // const [messages, setMessages] = useState([]);
  // const [userInput, setUserInput] = useState("");

  // const toggleChatbot = () => setIsVisible(!isVisible); // 切換顯示狀態

  // const sendMessage = () => {
  //   if (userInput.trim() === "") return; // 避免發送空訊息
  //   setMessages([...messages, { sender: "user", text: userInput }]);
  //   setUserInput(""); // 清空輸入框
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault(); // 阻止默认的换行行为
  //     sendMessage(); // 调用发送消息函数
  //   }
  // };

  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // 切換聊天機器人顯示狀態
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  // 發送消息
  const sendMessage = () => {
    const message = userInput.trim(); // 去除多餘空白
    if (message === "") return; // 如果輸入為空則不執行

    // 新增使用者的訊息
    addMessage("user", message);

    // 模擬機器人回應
    setTimeout(() => {
      addMessage("bot", "這是機器人的回應！");
    }, 500); // 延遲回應時間

    // 清空輸入框
    setUserInput("");
  };

  // 新增訊息到聊天框
  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender, text }
    ]);
  };

  // 處理輸入框的變更
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // 處理按鍵事件
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 避免預設換行行為
      sendMessage();
    }
  };
  return (
    // <div>
    //   {/* 小图标按钮 */}
    //   {!isVisible && (
    //     <button className="chatbot-icon" onClick={toggleChatbot}>
    //       <img src="./images/consult.png" alt="Chat Icon" className="chat-icon" />
    //     </button>
    //   )}

    //   {/* 聊天機器人主體 */}
    //   {isVisible && (
    //     <div className="chatbot-container">
    //       <div className="chat-header">
    //         <span>快樂共享辦公室</span>
    //         <button className="close-button" onClick={toggleChatbot}>
    //           ✖
    //         </button>
    //       </div>
    //       <div className="chatbox">
    //         {messages.map((msg, index) => (
    //           <div
    //             key={index}
    //             className={`message ${msg.sender === "user" ? "user" : "bot"}`}
    //           >
    //             {msg.text}
    //           </div>
    //         ))}
    //       </div>
    //       <div className="input-container">
    //         <input
    //           type="text"
    //           value={userInput}
    //           onChange={(e) => setUserInput(e.target.value)}
    //           onKeyDown={handleKeyPress} // 新增：监听按键事件
    //           placeholder="輸入訊息..."
    //         />
    //         <button onClick={sendMessage}>發送</button>
    //       </div>
    //     </div>
    //   )}
    // </div>

    // <div id="BOT">

    //   <button id="chatbot-icon" className="chatbot-icon">
    //     <img src="./images/consult.png" alt="Chat Icon" className="chat-icon" />
    //   </button>


    //   <div id="chatbot-container" className="chatbot-container" style={{ display: 'none' }}>
    //     <div className="chat-header">
    //       <span>快樂共享辦公室</span>
    //       <button id="close-button" className="close-button">✖</button>
    //     </div>
    //     <div id="chatbox" className="chatbox"></div>
    //     <div className="input-container">
    //       <input id="user-input" type="text" placeholder="輸入訊息..." />
    //       <button id="send-button">發送</button>
    //     </div>
    //   </div>
    // </div>

    <div id="BOT">
    {/* Chatbot Icon */}
    <button id="chatbot-icon" className="chatbot-icon" onClick={toggleChatbot}>
      <img src="./images/consult.png" alt="Chat Icon" className="chat-icon" />
    </button>

    {/* Chatbot Container */}
    <div
      id="chatbot-container"
      className="chatbot-container"
      style={{ display: isChatbotVisible ? "flex" : "none" }} // 根據狀態切換顯示或隱藏
    >
      <div className="chat-header">
        <span>快樂共享辦公室</span>
        <button id="close-button" className="close-button" onClick={toggleChatbot}>
          ✖
        </button>
      </div>

      {/* Chatbox */}
      <div id="chatbox" className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="input-container">
        <input
          id="user-input"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="輸入訊息..."
        />
        <button id="send-button" onClick={sendMessage}>
          發送
        </button>
      </div>
    </div>
  </div>
  );
};

export default Chatbot;
