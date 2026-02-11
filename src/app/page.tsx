import { Header } from '../components/landing/Header';
import Hero  from '../components/landing/Hero';
import {About} from '../components/landing/About';
import {Features} from '../components/landing/Features';
import {Testimonials} from '../components/landing/Teastinomial';
import {FAQ} from '../components/landing/FAQ';
import {Footer} from '../components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1D1D1D] transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
