import { Header } from '../components/landing/Header';
import Hero  from '../components/landing/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1D1D1D] transition-colors duration-300">
      <Header />
      <Hero />
    </main>
  );
}
