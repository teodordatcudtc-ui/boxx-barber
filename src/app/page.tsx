import { Hero } from '@/components/home/Hero';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { AboutBlurb } from '@/components/home/AboutBlurb';
import { ContactStrip } from '@/components/home/ContactStrip';
import { CtaBlock } from '@/components/home/CtaBlock';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <AboutBlurb />
      <ContactStrip />
      <CtaBlock />
    </>
  );
}
