// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Halaman
// import Navbar from './container/Navbar.jsx';
// import Hero from './container/HeroSection.jsx';
// import FeatureProducts from './container/FeaturedSection.jsx';
// import AboutUsSection from './container/AboutSection.jsx';
// import ContactSection from './container/ContactSection.jsx';
// import Footer from './container/Footer.jsx';
// import MenuPage from './pages/MenuPage.jsx';

// function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <FeatureProducts />
//       <AboutUsSection />
//       <ContactSection />
//       <Footer />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/menu" element={<MenuPage />} />
//       </Routes>
//     </Router>
//   );
// }


import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout.jsx'
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import MenuDetailPage from './pages/MenuDetailpage.jsx';
import CartPage from './pages/CartPage.jsx';
import AboutPage from './container/AboutSection.jsx';
import ContactPage from './container/ContactSection.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<MenuPage />} />
        <Route path="products/:productId" element={<MenuDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;