import Hero from '@/components/home/Hero'
import StatsBand from '@/components/home/StatsBand'
import PainPoint from '@/components/home/PainPoint'
import ServicesPreview from '@/components/home/ServicesPreview'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <PainPoint />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
