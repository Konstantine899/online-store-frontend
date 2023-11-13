import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync as MainPage } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync as AboutPage } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { classNames } from "./shared/lib/classNames/classNames";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div
      className={classNames(classes.app, {hovered: true, selectable: false, red: false}, [classes.outlined])}
    >
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
