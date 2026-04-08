import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalFeatures from './GlobalFeatures';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <GlobalFeatures />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
