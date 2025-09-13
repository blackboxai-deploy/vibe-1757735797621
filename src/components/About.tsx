'use client'

export default function About() {
  const technologies = [
    {
      name: "Lua",
      description: "Powerful scripting for automation and game development",
      icon: "🌙",
      color: "bg-blue-500",
      experience: "3 Years",
      projects: "30+ Projects"
    },
    {
      name: "JavaScript", 
      description: "Dynamic web development and interactive applications",
      icon: "⚡",
      color: "bg-yellow-500",
      experience: "3 Years",
      projects: "30+ Projects"
    },
    {
      name: "CSS",
      description: "Beautiful styling and responsive design systems",
      icon: "🎨", 
      color: "bg-green-500",
      experience: "3 Years",
      projects: "30+ Projects"
    },
    {
      name: "HTML",
      description: "Semantic markup and accessible web structures",
      icon: "📄",
      color: "bg-red-500", 
      experience: "3 Years",
      projects: "30+ Projects"
    },
    {
      name: "SQL",
      description: "Database design and efficient query optimization",
      icon: "🗄️",
      color: "bg-purple-500",
      experience: "3 Years",
      projects: "30+ Projects"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Our Technology Focus
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in five core technologies that form the foundation of modern development. 
            Master these essentials with our focused community approach.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-center mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${tech.color} text-white text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                {tech.description}
              </p>

              {/* Experience Info */}
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-2">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {tech.experience}
                  </span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {tech.projects}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-poppins font-bold text-gray-900">
              Why These Five Technologies?
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Lua</strong> provides powerful scripting capabilities for automation and game development, 
                making it essential for custom solutions and server-side scripting.
              </p>
              <p>
                <strong className="text-gray-900">JavaScript</strong> powers modern web interactivity and full-stack development, 
                enabling dynamic user experiences and server-side applications.
              </p>
              <p>
                <strong className="text-gray-900">CSS</strong> brings designs to life with responsive layouts and beautiful styling, 
                ensuring your applications look professional across all devices.
              </p>
              <p>
                <strong className="text-gray-900">HTML</strong> forms the backbone of web content with semantic markup, 
                creating accessible and search-engine-friendly structures.
              </p>
              <p>
                <strong className="text-gray-900">SQL</strong> manages data efficiently with optimized queries and database design, 
                powering the data layer of any serious application.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Community Stats</h4>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Core Technologies</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Per Technology</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">Join our focused learning approach</p>
              <a 
                href="https://discord.gg/vpujsKmPpB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Start Learning Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}