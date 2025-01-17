import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutsUs";
import Privacy from "./pages/privacy";
import QASection from "./pages/QASection";
import ReservationForm from "./pages/ReservationForm";
import Chatbot from "./pages/Chatbot";
import Footer from "./Footer";

//import "./App.css";

export default function App() {
  return (
    <>
    {/* <Link to="/aboutUs">關於我們</Link>
    <Link to="/privacy">隱私權政策</Link>
    <Link to="/qaSection">QA</Link>
    <Link to="/reservationForm">預約參觀</Link> */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/qaSection" element={<QASection />}></Route>
        <Route path="/reservationForm" element={<ReservationForm />}></Route>
      </Routes>
      <Chatbot/>
    </>
  )
}
