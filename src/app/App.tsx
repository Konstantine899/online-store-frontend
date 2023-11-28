import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import './styles/index.scss';
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';

export const App = () => {
  const isAuth = true;
  const isAdmin = true;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <button onClick={() => setIsOpen(true)} type="button">
        Toggle
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Модальное окно
      </Modal>
      <AppRouter isAdmin={isAdmin} isAuth={isAuth} />
    </div>
  );
};
