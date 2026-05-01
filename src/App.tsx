import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectTabs from './components/ProjectTabs'
import './App.css'

const TABS = ['Candid', 'Blushing Blossoms', 'Basketball Stats', 'Jeopardy', 'CineNiche'] as const
type Tab = typeof TABS[number]

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Candid')
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ background: '#fdf6e3', paddingTop: '68px' }}>
      <Navbar onProjectsClick={scrollToProjects} />
      <div id="about">
        <Hero />
      </div>
      <div ref={projectsRef} id="projects">
        <ProjectTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

export default App
