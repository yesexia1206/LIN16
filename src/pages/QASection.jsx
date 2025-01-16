import React, { useState, useEffect } from "react";
import "../css/qa.min.css";
import Footer from "../Footer";

const QAItem = ({ question, answer, index }) => {
  return (
    <div
      className="qa-item"
      data-index={index}
      style={{ "--index": index }} // 傳遞索引給CSS
    >
      <p>Ｑ：{question}</p>
      <p>Ａ：{answer}</p>
    </div>
  );
};

const QASection = () => {
  const qaList = [
    { question: "租辦公室一定要加入會員嗎？", answer: "沒有會員也可以租下任何方案。" },
    { question: "不使用了還能退租嗎？", answer: "過了當月三分之一即無法退款，請見諒。" },
    { question: "有提供私人使用的辦公設備嗎？", answer: "除私人辦公室，其他皆需要共同使用。" },
    { question: "能夠協助收發包裹？", answer: "ＨＷ皆有收發室可幫忙收發包裹和信件。" },
    { question: "有提供門禁卡嗎？", answer: "每位使用者皆附有一張門禁卡。" },
    { question: "六日是否營業？", answer: "營業時間為週一～週六08:00～10:00" },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // 等待一段時間後開始顯示動畫
    }, 100); // 可調整起始延遲時間
    return () => clearTimeout(timer);
  }, []);

  return (<>
    <div className="qa-body">
      <div className="qa-section">
        <div className="qa-container">
          <img
            src="./images/Ellipse 29.png"
            alt="背景圖形"
            className="background-image"
          />
          <h1 className="qa">Q&A</h1>
          <h2 className="qa-title">常見問題</h2>
        </div>
      </div>

      <div className="qa-qa">
        {qaList.map((qa, index) => (
          <QAItem
            key={index}
            question={qa.question}
            answer={qa.answer}
            index={visible ? index : -1} // 傳遞索引給CSS
          />
        ))}
      </div>
    </div>
    <div style={{marginTop:'125vh'}}>
    <Footer/>
    </div>
    </>
  );
};

export default QASection;