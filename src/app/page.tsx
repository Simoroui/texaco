import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DisciplineSection from '@/components/DisciplineSection';
import TeamSection from '@/components/TeamSection';
import StatsSection from '@/components/StatsSection';
import SponsorsSection from '@/components/SponsorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DisciplineSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
