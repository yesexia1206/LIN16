import { Link } from "react-router-dom";
import './css/Topbar.min.css';
export default function Topbar() {
    return (
        <header id="topbar">
            <nav className="navigation">
                <h1 className="logo">
                    <a href="https://yesexia1206.github.io/HappyWork1/">
                        <img src="./images/logo.png" alt="快樂共享辦公室LOGO" title="快樂共享辦公室" />
                    </a>
                </h1>
                <h2>快樂工作共享辦公室</h2>
            </nav>
            <div className="navbar">
                <button className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
                        <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
                        <li><Link to='/aboutUs'>關於我們</Link></li>
                        <li><a href="https://yesexia1206.github.io/HappyWork/">會員中心</a></li>
                    </ul>

                    <button>
                        <Link to='/reservationForm'>
                            <img src="./images/reservation-button.svg" alt="" />
                        </Link>
                    </button>
                </nav>
            </div>
        </header>
    )
}