'use client'

export default function Community() {
  const channels = [
    {
      name: "🌙・lua-scripts",
      description: "Share and discuss Lua automation scripts",
      members: "Active",
      color: "text-blue-600"
    },
    {
      name: "⚡・javascript-dev", 
      description: "JavaScript tips, tricks and project help",
      members: "Active",
      color: "text-yellow-600"
    },
    {
      name: "🎨・css-showcase",
      description: "Beautiful designs and styling techniques",
      members: "Active",
      color: "text-green-600"
    },
    {
      name: "📄・html-structure",
      description: "Semantic markup and accessibility discussions",
      members: "Active",
      color: "text-red-600"
    },
    {
      name: "🗄️・sql-queries",
      description: "Database optimization and query help",
      members: "Active",
      color: "text-purple-600"
    },
    {
      name: "💬・general-chat",
      description: "General programming discussions",
      members: "Active",
      color: "text-gray-600"
    }
  ]

  const features = [
    {
      icon: "🎓",
      title: "Learn Together",
      description: "Structured learning paths for each technology with community support"
    },
    {
      icon: "🔍", 
      title: "Code Reviews",
      description: "Get feedback on your code from experienced developers"
    },
    {
      icon: "🚀",
      title: "Project Collaboration", 
      description: "Work together on real projects and build your portfolio"
    },
    {
      icon: "📚",
      title: "Resource Library",
      description: "Access curated learning resources and documentation"
    }
  ]

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Join Our Developer Community
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with developers focused on mastering Lua, JavaScript, CSS, HTML, and SQL. 
            Learn together, share knowledge, and build amazing projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Discord Community */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-2xl text-white">💬</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Discord Server</h3>
                <p className="text-blue-600 font-medium">Developer Community</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our Discord community where developers with 3+ years experience in Lua, JavaScript, CSS, HTML, and SQL 
              share knowledge, collaborate on projects, and help others grow.
            </p>

            {/* Channels */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-gray-900">Popular Channels</h4>
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className={`font-medium text-sm ${channel.color}`}>{channel.name}</div>
                    <div className="text-xs text-gray-500">{channel.description}</div>
                  </div>
                  <span className="text-xs font-medium text-gray-400">{channel.members}</span>
                </div>
              ))}
            </div>

            {/* Join Button */}
            <a 
              href="https://discord.gg/vpujsKmPpB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl text-center block hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Discord Community →
            </a>
          </div>

          {/* Community Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-900">Why Join Our Community?</h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Community Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Community Highlights</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-1">30+</div>
                  <div className="text-sm text-gray-600">Per Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}