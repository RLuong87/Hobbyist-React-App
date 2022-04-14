import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routers/AppRouter';
import { AuthProvider } from './components/Providers/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* Main Router */}
        {/* Home pages */}
        {/* Customer pages */}
        {/* Employee pages */}
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
