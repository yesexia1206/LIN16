import React, { useEffect } from "react";
import "../css/contac.min.css";
import { initializeModalLogic } from "../assets/111.js";
import Chatbot from "./Chatbot.jsx";
import Footer from "../Footer.jsx";
import Topbar from "../Topbar.jsx";

const ReservationForm = () => {
  useEffect(() => {
    initializeModalLogic(); // 初始化外部邏輯
  }, []); // 僅在組件掛載時執行一次

  return (<>
    <Topbar />
    <div className="c-body">
      <div className="container2">
        <img src="./images/Ellipse 29.png" alt="背景圖形" className="background-image-contact" />
        <h1 className="contact-h1">CONTACT</h1>
        <h2 className="contact-title">預約參觀</h2>
      </div>

      <form id="member-form" title="會員資料修改表單">
        <div className="wrap">
          <div className="required-1">
            <span className="required">必填</span>
            <label htmlFor="username">姓名</label>
            <input type="text" name="username" id="username" title="姓名" required />
          </div>
          <legend className="gender">
            性別
            <input type="radio" name="member" id="member1" title="男" value="男" />
            <label htmlFor="member1">男</label>
            <input type="radio" name="member" id="member2" title="女" value="女" />
            <label htmlFor="member2">女</label>
          </legend>
          <div className="phonenumber">
            <label htmlFor="tel">連絡電話</label>
            <div className="phone-input">
              <input type="tel" name="tel" id="tel" title="連絡電話" />
            </div>
          </div>
          <div className="required-2">
            <span className="required">必填</span>
            <label htmlFor="email">聯絡信箱</label>
            <input type="email" name="email" id="email" title="聯絡信箱" required />
          </div>
          <legend className="contact-time">
            參觀時段
            <div className="contact-time2">
              <label>
                <input type="radio" name="time" id="time1" title="早" value="早上8~中午12點" />
                早上8~中午12點
              </label>
              <label>
                <input type="radio" name="time" id="time2" title="午" value="中午12~下午1點" />
                中午12~下午1點
              </label>
              <label>
                <input type="radio" name="time" id="time3" title="下午" value="下午1點~5點" />
                下午1點~5點
              </label>
            </div>
          </legend>

          <div className="location">
            <label htmlFor="location">諮詢據點</label>
            <select name="location" id="location" className="location-select">
              <option value=""></option>
              <option value="小綠洲(南京復興)">小綠洲(南京復興)</option>
              <option value="泰吾士(市政府)">泰吾士(市政府)</option>
              <option value="聖保羅(新竹竹北)">聖保羅(新竹竹北)</option>
              <option value="柯芬園(高雄巨蛋)">柯芬園(高雄巨蛋)</option>
            </select>
          </div>
          <div className="program">
            <label htmlFor="program">諮詢方案</label>
            <select name="program" id="program" className="program-select">
              <option value=""></option>
              <option value="固定辦公桌">固定辦公桌</option>
              <option value="共享辦公桌">共享辦公桌</option>
              <option value="私人辦公室">私人辦公室</option>
              <option value="虛擬辦公室">虛擬辦公室</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">更多問題</label>
            <textarea name="message" id="message" className="message-content" title="留言欄位" rows="6" placeholder="我想說......" />
          </div>
        </div>
        <div className="form-btn">
          <input type="submit" name="submit-btn" id="submit-btn" value="完成" />
          <input type="reset" name="reset-btn" id="reset-btn" value="清除" />
        </div>
        <h5 className="form-note">(表單僅示意，不會對外蒐集資料。此表單僅展示用，無蒐集資料功能。)</h5>
      </form>

      <div className="overlay"></div>
      <div className="modal">
        <img src="./images/success.png" alt="預約成功" className="success-image" />
        <h6>請確認以下資訊無誤</h6>
        <p id="reservation-info"></p>
        <button id="close-modal">關閉</button>
      </div>
    </div>
    <div id="ftc">
      <Footer />
    </div>
    <Chatbot/>
  </>
  );
};

export default ReservationForm;
