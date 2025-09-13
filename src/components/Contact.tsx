'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create contact object
    const contact = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleDateString(),
      responded: false
    }

    // Save to localStorage (in a real app, this would be sent to an API)
    const existingContacts = JSON.parse(localStorage.getItem('uniq_contacts') || '[]')
    const updatedContacts = [contact, ...existingContacts]
    localStorage.setItem('uniq_contacts', JSON.stringify(updatedContacts))

    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project idea or need help with Lua, JavaScript, CSS, HTML, or SQL? 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-600 text-sm">
                Messages will be sent to: <span className="font-semibold text-blue-600">hypescript86@gmail.com</span>
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your project or the help you need with Lua, JavaScript, CSS, HTML, or SQL..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to bring your ideas to life? Whether you need custom Lua scripts, 
                interactive JavaScript applications, beautiful CSS designs, semantic HTML markup, 
                or optimized SQL databases - I'm here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Discord Community</h4>
                  <a 
                    href="https://discord.gg/vpujsKmPpB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Join our server
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">My Discord Profile</h4>
                  <a 
                    href="https://discord.com/users/1047229396722921562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Direct message me
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:hypescript86@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    hypescript86@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">My Expertise</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Lua", icon: "🌙", color: "text-blue-600" },
                  { name: "JavaScript", icon: "⚡", color: "text-yellow-600" },
                  { name: "CSS", icon: "🎨", color: "text-green-600" },
                  { name: "HTML", icon: "📄", color: "text-red-600" },
                  { name: "SQL", icon: "🗄️", color: "text-purple-600" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <div className={`text-sm font-medium ${tech.color}`}>{tech.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">3 Years Experience</span> • 
                  <span className="font-semibold"> 30+ Projects Each</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}