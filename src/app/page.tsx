import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Community from '@/components/Community'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Community />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}