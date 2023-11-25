import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import './styles/index.scss';
import { MenuList } from '@/entities/Menu';

export const App = () => {
  const isAuth = true;
  const isAdmin = true;
  return (
    <div>
      <Navbar />
      <MenuList />

      <AppRouter isAdmin={isAdmin} isAuth={isAuth} />
    </div>
  );
};
