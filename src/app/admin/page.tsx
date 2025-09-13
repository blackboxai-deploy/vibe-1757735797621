'use client'

import { useState, useEffect } from 'react'

interface Contact {
  id: string
  name: string
  email: string
  message: string
  date: string
  responded: boolean
  response?: string
}

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [response, setResponse] = useState('')

  // Check if already logged in
  useEffect(() => {
    const adminSession = localStorage.getItem('uniq_admin_session')
    if (adminSession === 'authenticated') {
      setIsLoggedIn(true)
      loadContacts()
    }
  }, [])

  // Load contacts from localStorage (in a real app, this would be from a database)
  const loadContacts = () => {
    const savedContacts = localStorage.getItem('uniq_contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }

  // Save contacts to localStorage
  const saveContacts = (updatedContacts: Contact[]) => {
    localStorage.setItem('uniq_contacts', JSON.stringify(updatedContacts))
    setContacts(updatedContacts)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Admin credentials
    if (username === 'uniqdev' && password === 'Uniqsba3126gdk@#2125') {
      setIsLoggedIn(true)
      localStorage.setItem('uniq_admin_session', 'authenticated')
      loadContacts()
      setLoginError('')
    } else {
      setLoginError('Invalid credentials')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('uniq_admin_session')
    setUsername('')
    setPassword('')
  }

  const handleResponse = (contactId: string) => {
    if (!response.trim()) return

    const updatedContacts = contacts.map(contact => {
      if (contact.id === contactId) {
        return {
          ...contact,
          responded: true,
          response: response
        }
      }
      return contact
    })

    saveContacts(updatedContacts)
    setSelectedContact(null)
    setResponse('')
  }

  const deleteContact = (contactId: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId)
    saveContacts(updatedContacts)
    setSelectedContact(null)
  }

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Uniq Developer Admin Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {loginError && (
              <div className="text-red-600 text-sm text-center">{loginError}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-blue-600 hover:text-blue-800 text-sm">
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Uniq Developer Contact Management</p>
              <p className="text-sm text-blue-600">📧 hypescript86@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, uniqdev</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contacts List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Messages ({contacts.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {contacts.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No contact messages yet.
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-6 cursor-pointer hover:bg-gray-50 ${
                        selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{contact.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            contact.responded 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {contact.responded ? 'Responded' : 'Pending'}
                          </span>
                          <span className="text-sm text-gray-500">{contact.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{contact.email}</p>
                      <p className="text-gray-700 line-clamp-2">{contact.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Contact Details & Response */}
          <div className="lg:col-span-1">
            {selectedContact ? (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Contact Details</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900">{selectedContact.name}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{selectedContact.email}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <p className="text-gray-900">{selectedContact.date}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{selectedContact.message}</p>
                  </div>

                  {selectedContact.responded && selectedContact.response && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Response</label>
                      <p className="text-gray-900 bg-green-50 p-3 rounded-md border border-green-200">
                        {selectedContact.response}
                      </p>
                    </div>
                  )}

                  {!selectedContact.responded && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Send Response
                      </label>
                      <textarea
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        placeholder="Type your response here..."
                      />
                      <button
                        onClick={() => handleResponse(selectedContact.id)}
                        className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        disabled={!response.trim()}
                      >
                        Send Response
                      </button>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => deleteContact(selectedContact.id)}
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                    >
                      Delete Contact
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                Select a contact to view details and respond
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}