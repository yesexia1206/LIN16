import React, { useState } from "react";
import "./aaa/css/contact.min.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    member: "",
    tel: "",
    email: "",
    time: "",
    location: "",
    program: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // 開啟彈出視窗
  };

  const closeModal = () => {
    setIsModalOpen(false); // 關閉彈出視窗
  };

  return (
    <div className="c-body">
      {/* 表單標題 */}
      <div className="container2">
        <img
          src="./images/Ellipse 29.png"
          alt="背景圖形"
          className="background-image-contact"
        />
        <h1 className="contact-h1">CONTACT</h1>
        <h2 className="contact-title">預約參觀</h2>
      </div>

      {/* 表單 */}
      <form onSubmit={handleSubmit} id="member-form" title="會員資料修改表單">
        <div className="wrap">
          {/* 姓名 */}
          <div className="required-1">
            <span className="required">必填</span>
            <label htmlFor="username">姓名</label>
            <input
              type="text"
              name="username"
              id="username"
              title="姓名"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* 性別 */}
          <legend className="gender">
            性別
            <input
              type="radio"
              name="member"
              id="member1"
              title="男"
              value="男"
              checked={formData.member === "男"}
              onChange={handleChange}
            />
            <label htmlFor="member1">男</label>
            <input
              type="radio"
              name="member"
              id="member2"
              title="女"
              value="女"
              checked={formData.member === "女"}
              onChange={handleChange}
            />
            <label htmlFor="member2">女</label>
          </legend>

          {/* 電話 */}
          <div className="phonenumber">
            <label htmlFor="tel">連絡電話</label>
            <div className="phone-input">
              <input
                type="tel"
                name="tel"
                id="tel"
                title="連絡電話"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 聯絡信箱 */}
          <div className="required-2">
            <span className="required">必填</span>
            <label htmlFor="email">聯絡信箱</label>
            <input
              type="email"
              name="email"
              id="email"
              title="聯絡信箱"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 參觀時段 */}
          <legend className="contact-time">
            參觀時段
            <div className="contact-time2">
              <input
                type="radio"
                name="time"
                id="time1"
                title="早"
                value="早上8~中午12點"
                checked={formData.time === "早上8~中午12點"}
                onChange={handleChange}
              />
              <label htmlFor="time1">早上8~中午12點</label>
              <input
                type="radio"
                name="time"
                id="time2"
                title="午"
                value="中午12~下午1點"
                checked={formData.time === "中午12~下午1點"}
                onChange={handleChange}
              />
              <label htmlFor="time2">中午12~下午1點</label>
              <input
                type="radio"
                name="time"
                id="time3"
                title="下午"
                value="下午1點~5點"
                checked={formData.time === "下午1點~5點"}
                onChange={handleChange}
              />
              <label htmlFor="time3">下午1點~5點</label>
            </div>
          </legend>

          {/* 諮詢據點 */}
          <div className="location">
            <label htmlFor="location">諮詢據點</label>
            <select
              name="location"
              id="location"
              className="location-select"
              value={formData.location}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="小綠洲(南京復興)">小綠洲(南京復興)</option>
              <option value="泰吾士(市政府)">泰吾士(市政府)</option>
              <option value="聖保羅(新竹竹北)">聖保羅(新竹竹北)</option>
              <option value="柯芬園(高雄巨蛋)">柯芬園(高雄巨蛋)</option>
            </select>
          </div>

          {/* 諮詢方案 */}
          <div className="program">
            <label htmlFor="program">諮詢方案</label>
            <select
              name="program"
              id="program"
              className="program-select"
              value={formData.program}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="固定辦公桌">固定辦公桌</option>
              <option value="共享辦公桌">共享辦公桌</option>
              <option value="私人辦公室">私人辦公室</option>
              <option value="虛擬辦公室">虛擬辦公室</option>
            </select>
          </div>

          {/* 更多問題 */}
          <div className="form-group">
            <label htmlFor="message">更多問題</label>
            <textarea
              name="message"
              id="message"
              className="message-content"
              title="留言欄位"
              rows="6"
              placeholder="我想說......"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 按鈕 */}
        <div className="form-btn">
          <input type="submit" name="submit-btn" id="submit-btn" value="完成" />
          <input type="reset" name="reset-btn" id="reset-btn" value="清除" />
        </div>
        <h5 className="form-note">
          (表單僅示意，不會對外蒐集資料。此表單僅展示用，無蒐集資料功能。)
        </h5>
      </form>

      {/* 彈窗 */}
      {isModalOpen && (
        <div>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <h6>請確認以下資訊無誤</h6>
            <p id="reservation-info">
              <strong>姓名:</strong> {formData.username}
              <br />
              <strong>性別:</strong> {formData.member || "未選擇"}
              <br />
              <strong>電話:</strong> {formData.tel}
              <br />
              <strong>信箱:</strong> {formData.email}
              <br />
              <strong>時段:</strong> {formData.time || "未選擇"}
              <br />
              <strong>據點:</strong> {formData.location || "未選擇"}
              <br />
              <strong>方案:</strong> {formData.program || "未選擇"}
              <br />
              <strong>留言:</strong> {formData.message || "無"}
            </p>
            <button onClick={closeModal}>關閉</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
