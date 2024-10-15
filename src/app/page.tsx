import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/landing/Hero';
import Highlights from '@/app/components/landing/Highlights';
import Footer from '@/app/components/landing/Footer';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Highlights />
      <Footer />
    </div>
  );
}
