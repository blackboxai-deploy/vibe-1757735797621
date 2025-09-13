'use client'

export default function Projects() {
  const projects = [
    {
      title: "Lua Automation Scripts",
      category: "Lua",
      description: "Powerful automation scripts for game servers and system administration. Clean, efficient Lua code that gets the job done.",
      features: ["Game Server Scripts", "Automation Tools", "Custom Functions", "Performance Optimized"],
      tech: ["Lua", "FiveM", "Server Management"],
      icon: "🌙",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Interactive Web Apps",
      category: "JavaScript",
      description: "Dynamic web applications with modern JavaScript. From vanilla JS to React, creating engaging user experiences.",
      features: ["React Components", "API Integration", "Real-time Updates", "Modern ES6+"],
      tech: ["JavaScript", "React", "Node.js"],
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600", 
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Responsive Design Systems",
      category: "CSS",
      description: "Beautiful, responsive designs that work across all devices. Modern CSS techniques for stunning user interfaces.",
      features: ["Flexbox & Grid", "Animations", "Responsive Design", "Custom Properties"],
      tech: ["CSS3", "Sass", "Tailwind"],
      icon: "🎨",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50", 
      textColor: "text-green-600"
    },
    {
      title: "Semantic Web Structures",
      category: "HTML",
      description: "Clean, accessible HTML markup that follows best practices. SEO-friendly and screen reader compatible.",
      features: ["Semantic Markup", "Accessibility", "SEO Optimized", "Valid Standards"],
      tech: ["HTML5", "Accessibility", "SEO"],
      icon: "📄",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      title: "Database Solutions",
      category: "SQL", 
      description: "Efficient database design and optimization. From complex queries to performance tuning for scalable applications.",
      features: ["Query Optimization", "Database Design", "Performance Tuning", "Data Migration"],
      tech: ["MySQL", "PostgreSQL", "Database Design"],
      icon: "🗄️",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Our Project Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing expertise across Lua, JavaScript, CSS, HTML, and SQL. 
            Each project demonstrates our commitment to clean, efficient, and maintainable code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Header */}
              <div className={`p-6 ${project.bgColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-xl`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 ${project.bgColor} ${project.textColor} text-sm font-medium rounded-full border border-current border-opacity-20`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-700">
                      <span className="font-semibold">3 Years</span>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                    <div className="text-gray-700">
                      <span className="font-semibold">30+</span>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need Lua scripts, JavaScript applications, CSS styling, HTML markup, or SQL databases, 
            our community has the expertise to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://discord.gg/vpujsKmPpB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Join Our Community
            </a>
            <a 
              href="https://discord.com/users/1047229396722921562"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              My Discord Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}