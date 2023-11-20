import { AppRouter } from "@/app/providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import "./app/styles/index.scss";

export const App = () => {
  const isAuth = true;
  const isAdmin = true;
  return (
    <div>
      <Navbar />
      <AppRouter isAdmin={isAdmin} isAuth={isAuth} />
    </div>
  );
};
