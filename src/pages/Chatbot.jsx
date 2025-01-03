import React, { useState } from "react";
import "../css/robot.min.css";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // 控制聊天機器人是否展開
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbot = () => setIsVisible(!isVisible); // 切換顯示狀態

  const sendMessage = () => {
    if (userInput.trim() === "") return; // 避免發送空訊息
    setMessages([...messages, { sender: "user", text: userInput }]);
    setUserInput(""); // 清空輸入框
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 阻止默认的换行行为
      sendMessage(); // 调用发送消息函数
    }
  };

  return (
    <div>
      {/* 小图标按钮 */}
      {!isVisible && (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <img src="/images/consult.png" alt="Chat Icon" className="chat-icon" />
        </button>
      )}

      {/* 聊天機器人主體 */}
      {isVisible && (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>快樂共享辦公室</span>
            <button className="close-button" onClick={toggleChatbot}>
              ✖
            </button>
          </div>
          <div className="chatbox">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress} // 新增：监听按键事件
              placeholder="輸入訊息..."
            />
            <button onClick={sendMessage}>發送</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
