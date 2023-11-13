import { Link } from "react-router-dom";
import { AppRouter } from "./app/AppRouter/AppRouter";

export const App = () => {
  return (
    <div>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};
