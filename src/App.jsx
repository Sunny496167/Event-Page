import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />
    </>
  );
}

export default App;
