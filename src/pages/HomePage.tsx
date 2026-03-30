import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Stats from '../components/home/Stats';
import Profitability from '../components/home/Profitability';
import HowItWorks from '../components/home/HowItWorks';
import FinePrint from '../components/home/FinePrint';
import FAQSection from '../components/home/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Stats />
      <Profitability />
      <HowItWorks />
      <FinePrint />
      <FAQSection />
    </>
  );
}
