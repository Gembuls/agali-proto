import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './componentes/Navbar.jsx';
import 'animate.css';

import 'remixicon/fonts/remixicon.css';
import Footer from './componentes/footer.jsx';
import PreLoad from './componentes/PreLoad.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoad />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
