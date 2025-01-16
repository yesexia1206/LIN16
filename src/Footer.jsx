import './css/Footer.min.css';
export default function Footer() {
    return (
        <footer>
            <h1 className="official-logo">
                <a href="index.html">
                    <img src="./images/HW-LOGO.svg" alt="" />
                </a>
            </h1>

            <div className="official-social">
                <a href="#">
                    <img src="./images/fb-icon.svg" alt="HappyWork-FB" title="HappyWork-FB" />
                </a>
                <a href="#">
                    <img src="./images/ig-icon.svg" alt="HappyWork-IG" title="HappyWork-IG" />
                </a>
            </div>

            <nav className="footer-map">
                <ul className="footer-menu">
                    <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
                    <li><a href="https://yesexia1206.github.io/LIN16/reservationForm">預約參觀</a></li>
                    <li><a href="https://yesexia1206.github.io/HappyWork/memberCenter">會員中心</a></li>
                    <li><a href="https://yesexia1206.github.io/LIN16/aboutUs">關於我們</a></li>
                    <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
                    <li><a href="https://yesexia1206.github.io/LIN16/privacy">隱私政策</a></li>
                </ul>
            </nav>

            <small>Copyright © 2024 HAPPY WORK. All Rights Reserved</small>
        </footer>
    )
}