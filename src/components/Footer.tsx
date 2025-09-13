'use client'

export default function Footer() {
  const technologies = [
    { name: "Lua", icon: "🌙", color: "text-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "text-yellow-600" },
    { name: "CSS", icon: "🎨", color: "text-green-600" },
    { name: "HTML", icon: "📄", color: "text-red-600" },
    { name: "SQL", icon: "🗄️", color: "text-purple-600" }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" }, 
    { name: "Community", href: "#community" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ]

  const resources = [
    { name: "Learning Paths", href: "#" },
    { name: "Code Examples", href: "#" },
    { name: "Best Practices", href: "#" },
    { name: "Documentation", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-poppins font-bold text-white mb-4">
                Uniq Developer
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Master the five essential technologies: Lua, JavaScript, CSS, HTML, and SQL. 
                Join our focused developer community and accelerate your coding journey.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>📧</span>
                  <a 
                    href="mailto:hypescript86@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    hypescript86@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>👤</span>
                  <a 
                    href="https://discord.com/users/1047229396722921562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Discord Profile
                  </a>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-4 mb-6">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Discord Link */}
              <a 
                href="https://discord.gg/vpujsKmPpB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <span>💬</span>
                <span className="font-medium">Join Discord</span>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">→</span>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-8">
              Get the latest tutorials, code examples, and community updates for 
              Lua, JavaScript, CSS, HTML, and SQL development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Uniq Developer. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Code of Conduct
              </a>
              <a href="/admin" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}