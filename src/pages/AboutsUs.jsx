import React from "react";
import "../css/about.min.css"; // 引入您的 CSS

const AboutUs = () => {
  return (
    <div className="qa-body">
      <QASection />
      <AboutSection />
    </div>
  );
};

const QASection = () => (
  <div className="qa-section">
    <div className="qa-container">
      <img src="./images/Ellipse 29.png" alt="背景圖形" className="background-image" />
      <h1 className="qa">ABOUT US</h1>
      <h2 className="qa-title">關於我們</h2>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="about">
    <AboutVision />
    <AboutOverview />
    <AboutHistory />
  </div>
);

const AboutVision = () => (
  <div className="about1">
    <img src="./images/關於1.png" alt="關於1" className="about-image1" />
    <div className="text1">
      <h3>公司願景</h3>
      <p>
        HappyWork，我們致力於提供高效、靈活的共享辦公空間，助您拓展事業與人脈，實現工作與生活的平衡。我們的據點遍布全台北、中、南三大區，無論在哪裡，都能輕鬆找到適合的工作環境，與志同道合的人一起成長。
      </p>
    </div>
  </div>
);

const AboutOverview = () => (
  <div className="about2">
    <div className="text2">
      <h3>公司概要</h3>
      <div className="about-container">
        <div className="text3">
          <p>公司名</p>
          <p>負責人</p>
          <p>創立日期</p>
          <p>員工人數</p>
          <p>TEL</p>
          <p>FAX</p>
          <p>所在地</p>
        </div>
        <div className="divider"></div>
        <div className="text4">
          <p>Happy Work</p>
          <p>DAHLIA KELLEY</p>
          <p>2024 3.15</p>
          <p>70人</p>
          <p>02-xxxx-ooo</p>
          <p>02-xxxx-ooo</p>
          <p>台北市........</p>
        </div>
      </div>
    </div>
    <img src="./images/關於2.png" alt="關於2" className="about-image2" />
  </div>
);

const AboutHistory = () => (
  <div className="about3">
    <img src="./images/關於3.png" alt="關於3" className="about-image3" />
    <div className="text5">
      <h3>據點歷史</h3>
      <div className="about-container">
        <div className="text6">
          <p>2024 3.</p>
          <p>2024 6.</p>
          <p>2024 11.</p>
          <p>2024 12.</p>
        </div>
        <div className="divider"></div>
        <div className="text7">
          <p>台北市第一間據點設立</p>
          <p>台北市第二間市政府據點設立</p>
          <p>竹北第一間據點設立</p>
          <p>高雄市第一間巨蛋據點設立</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
