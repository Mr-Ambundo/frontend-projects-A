import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index.tsx';
import { ModalManager } from './components/modals/ModalManager.tsx';
import { ToastContainer } from './components/ui/Toast.tsx';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ModalManager />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
