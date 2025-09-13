'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentTech, setCurrentTech] = useState(0)
  const technologies = ['Lua', 'JavaScript', 'CSS', 'HTML', 'SQL']
  const techColors = [
    'text-blue-600',
    'text-yellow-500', 
    'text-green-600',
    'text-red-500',
    'text-purple-600'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [technologies.length])

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-gray-900 mb-4">
            Uniq Developer
          </h1>
          <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-medium">
            <span className="text-gray-600">Master</span>
            <span className={`transition-all duration-500 ${techColors[currentTech]} font-semibold`}>
              {technologies[currentTech]}
            </span>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className={`p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                currentTech === index 
                  ? 'bg-white shadow-lg scale-110 border-2 border-blue-200' 
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setCurrentTech(index)}
            >
              <div className={`text-3xl font-bold transition-colors duration-500 ${
                currentTech === index ? techColors[index] : 'text-gray-400'
              }`}>
                {tech === 'Lua' && '🌙'}
                {tech === 'JavaScript' && '⚡'}
                {tech === 'CSS' && '🎨'}
                {tech === 'HTML' && '📄'}
                {tech === 'SQL' && '🗄️'}
              </div>
              <div className={`text-sm font-medium mt-2 transition-colors duration-500 ${
                currentTech === index ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {tech}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join a focused community mastering the five essential technologies: 
          <span className="font-semibold text-gray-900"> Lua scripting</span>, 
          <span className="font-semibold text-gray-900"> JavaScript development</span>, 
          <span className="font-semibold text-gray-900"> CSS styling</span>, 
          <span className="font-semibold text-gray-900"> HTML markup</span>, and 
          <span className="font-semibold text-gray-900"> SQL databases</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="https://discord.gg/vpujsKmPpB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Join Discord Community
          </a>
          <a 
            href="https://discord.com/users/1047229396722921562"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            My Discord Profile
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div key={tech} className="text-center">
              <div className={`text-2xl font-bold ${techColors[index]} mb-1`}>
                30+
              </div>
              <div className="text-sm text-gray-500">{tech} Projects</div>
              <div className="text-xs text-gray-400 mt-1">3 Years Exp.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}