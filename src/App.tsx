import { Link } from "react-router-dom";
import { AppRouter } from "./app/providers/router";

export const App = () => {
  return (
    <div>
      <Link to="/">Главная страница</Link>
      <AppRouter />
    </div>
  );
};
