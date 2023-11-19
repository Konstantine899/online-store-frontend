import { Link } from "react-router-dom";
import { AppRouter } from "./app/providers/router";

export const App = () => {
  const isAuth = true;
  const isAdmin = true;
  return (
    <div>
      <Link to="/">Главная страница</Link>
      <AppRouter isAdmin={isAdmin} isAuth={isAuth} />
    </div>
  );
};
