import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './css/Topbar.min.css';

export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 處理漢堡選單點擊
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 處理導覽項目點擊
    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    // 處理視窗大小變化
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);
    return (
        // <header id="topbar">
        //     <nav className="navigation">
        //         <h1 className="logo">
        //             <a href="https://yesexia1206.github.io/HappyWork1/">
        //                 <img src="./images/logo.png" alt="快樂共享辦公室LOGO" title="快樂共享辦公室" />
        //             </a>
        //         </h1>
        //         <h2>快樂工作共享辦公室</h2>
        //     </nav>
        //     <div className="navbar">
        //         <button className="hamburger">
        //             <span className="bar"></span>
        //             <span className="bar"></span>
        //         </button>
        //         <nav className="navigation">
        //             <ul className="menu">
        //                 <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
        //                 <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
        //                 <li><Link to='/aboutUs'>關於我們</Link></li>
        //                 <li><a href="https://yesexia1206.github.io/HappyWork/">會員中心</a></li>
        //             </ul>

        //             <button>
        //                 <Link to='/reservationForm'>
        //                     <img src="./images/reservation-button.svg" alt="" />
        //                 </Link>
        //             </button>
        //         </nav>
        //     </div>
        // </header>
        <header id="topbar">
            {/* 導覽列 */}
            <nav className="navigation">
                {/* LOGO */}
                <h1 className="logo">
                    <a href="https://yesexia1206.github.io/HappyWork1/">
                        <img src="./images/HW-LOGO-blue.png" alt="快樂工作共享辦公室LOGO" title="快樂工作共享辦公室" />
                    </a>
                </h1>
            </nav>

            {/* 主選單 */}
            <div className="navbar">
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="選單"
                >
                    <span></span>
                </button>

                <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="menu">
                        <li>
                            <a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html"
                                onClick={handleNavClick}>
                                服務據點
                            </a>
                        </li>
                        <li>
                            <a href="https://yesexia1206.github.io/HappyWork1/KF/location.html"
                                onClick={handleNavClick}>
                                共享方案
                            </a>
                        </li>
                        <li>
                            <Link to='/aboutUs' onClick={handleNavClick}>關於我們</Link>
                        </li>
                        <li>
                            <a href="https://yesexia1206.github.io/HappyWork/"
                                onClick={handleNavClick}>
                                會員中心
                            </a>
                        </li>
                    </ul>

                    <button onClick={handleNavClick}>
                        <Link to='/reservationForm'>
                            <img src="./images/reservation-button.svg" alt="" />
                        </Link>
                    </button>
                </nav>
            </div>
        </header>
    )
}