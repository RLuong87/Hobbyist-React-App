import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routers/AppRouter';
import { AuthProvider } from './components/Providers/AuthProvider';
import {library, Library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import footer from '../src/components/footer/Footer'
import Footer from '../src/components/footer/Footer';

library.add(fas);

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
        <Footer />
    </BrowserRouter>
  );
}

export default App;
