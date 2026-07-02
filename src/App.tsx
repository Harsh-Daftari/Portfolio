import Hero from './components/Hero'
import ResearchLibrary from './components/ResearchLibrary'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="grain" />
      <Hero />
      <ResearchLibrary />
      <About />
      <Contact />
    </div>
  )
}
