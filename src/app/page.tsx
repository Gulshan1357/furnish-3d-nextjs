import Hero from '@/app/components/landing/Hero';
import Highlights from '@/app/components/landing/Highlights';

export default function Home() {
  return (
    <div className='border-2 border-solid border-sky-900'>
      <Hero />
      <Highlights />
    </div>
  );
}
