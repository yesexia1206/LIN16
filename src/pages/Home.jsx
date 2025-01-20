import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Link to="/aboutUs">關於我們</Link>
            <Link to="/privacy">隱私權政策</Link>
            <Link to="/qaSection">QA</Link>
            <Link to="/reservationForm">預約參觀</Link>
        </>
    )
}