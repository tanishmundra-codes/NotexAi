import { Header } from '../components/landing/Header';
import Hero  from '../components/landing/Hero';
import {About} from '../components/landing/About';
import {Features} from '../components/landing/Features';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1D1D1D] transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
