/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VideoCarousel from './components/VideoCarousel';
import GalleryCarousel from './components/GalleryCarousel';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <div className="bg-dark min-h-screen selection:bg-primary selection:text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VideoCarousel />
      <GalleryCarousel />
      <Resources />
      <Contact />
      <Footer />
      
      <WhatsappButton />
    </div>
  );
}
