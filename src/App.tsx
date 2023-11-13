import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { AboutPage } from "./components/AboutPage";

export const App = () => {
  return (
    <div>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <Routes>
        <Route />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};
