import './App.css';
import Announcement from './components/Announcement';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Announcement />
      <Header />
      
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
