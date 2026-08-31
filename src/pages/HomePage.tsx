import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { Services } from '@/components/home/Services';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { WhyNora } from '@/components/home/WhyNora';
import { Process } from '@/components/home/Process';
import { MaterialsPreview } from '@/components/home/MaterialsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedProjects />
      <WhyNora />
      <Process />
      <MaterialsPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
