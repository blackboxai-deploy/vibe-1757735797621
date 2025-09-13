'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "The Lua scripting community here helped me optimize my automation scripts by 40%. The code reviews and feedback are invaluable.",
      author: "Alex Rodriguez",
      role: "Backend Developer",
      tech: "Lua",
      color: "text-blue-600"
    },
    {
      quote: "Learning modern JavaScript techniques through this community accelerated my career. From vanilla JS to React, they covered everything.",
      author: "Sarah Chen", 
      role: "Frontend Developer",
      tech: "JavaScript",
      color: "text-yellow-600"
    },
    {
      quote: "The CSS design systems and responsive techniques I learned here transformed how I approach styling. My designs are now pixel-perfect.",
      author: "Marcus Johnson",
      role: "UI/UX Developer", 
      tech: "CSS",
      color: "text-green-600"
    },
    {
      quote: "Understanding semantic HTML and accessibility through this community made me a better developer. My markup is now clean and accessible.",
      author: "Emma Wilson",
      role: "Web Developer",
      tech: "HTML", 
      color: "text-red-600"
    },
    {
      quote: "The SQL optimization techniques I learned here improved my database performance by 300%. Query optimization is now second nature.",
      author: "David Park",
      role: "Database Developer",
      tech: "SQL",
      color: "text-purple-600"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Developer Success Stories
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from developers who have mastered Lua, JavaScript, CSS, HTML, and SQL 
            through our focused community approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="mb-6">
                <div className="text-2xl text-gray-400 mb-4">"</div>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${testimonials[activeTestimonial].color} bg-current bg-opacity-10`}>
                  {testimonials[activeTestimonial].tech}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Technology Focus */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-900">
              Success Across All Technologies
            </h3>

            <div className="space-y-4">
              {[
                { tech: "Lua", icon: "🌙", color: "text-blue-600", bg: "bg-blue-50", desc: "Automation & Scripting" },
                { tech: "JavaScript", icon: "⚡", color: "text-yellow-600", bg: "bg-yellow-50", desc: "Web Development" },
                { tech: "CSS", icon: "🎨", color: "text-green-600", bg: "bg-green-50", desc: "Design & Styling" },
                { tech: "HTML", icon: "📄", color: "text-red-600", bg: "bg-red-50", desc: "Markup & Structure" },
                { tech: "SQL", icon: "🗄️", color: "text-purple-600", bg: "bg-purple-50", desc: "Database Management" }
              ].map((item, index) => (
                <div 
                  key={item.tech}
                  className={`p-4 rounded-xl ${item.bg} border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeTestimonial === index ? 'ring-2 ring-blue-300' : ''
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className={`font-semibold ${item.color}`}>{item.tech}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-8 h-8 rounded-full ${item.bg} ${item.color} flex items-center justify-center text-sm font-bold`}>
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">Ready to write your success story?</p>
              <a 
                href="https://discord.gg/vpujsKmPpB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}