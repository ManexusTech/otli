import React, { useState } from 'react';
import { 
  Code, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  BookOpen, 
  Github, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Database,
  BarChart3,
  Layers,
  Rocket,
  Star,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Unified API",
      description: "Abstract away exchange-specific quirks with a single, consistent interface across all trading venues."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Start with Python and TypeScript/JavaScript, with plans to expand to Go, Rust, Java, and more."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Comprehensive Coverage",
      description: "Support for major centralized and decentralized exchanges including Binance, Coinbase, Kraken, Uniswap, and dYdX."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Extensible Architecture",
      description: "Easy addition of new exchanges, asset classes, and custom trading strategies with modular design."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Best practices for API key management, rate limiting, and error handling built-in."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Trading",
      description: "WebSocket and REST API support for low-latency trading and live market data."
    }
  ];

  const roadmapItems = [
    {
      phase: "MVP",
      title: "Foundation",
      items: [
        "Scaffold Python and TypeScript/JS core libraries",
        "Implement REST support for 3-5 major exchanges",
        "Basic market data and order management"
      ],
      status: "current"
    },
    {
      phase: "Community",
      title: "Onboarding",
      items: [
        "Write contribution guidelines and code of conduct",
        "Set up Discord/Telegram for dev chat",
        "Launch website/docs (Docusaurus or similar)"
      ],
      status: "next"
    },
    {
      phase: "Expansion",
      title: "Growth",
      items: [
        "Add more exchanges (CEXs/DEXs)",
        "Integrate WebSocket support",
        "Add backtesting and strategy modules"
      ],
      status: "future"
    },
    {
      phase: "Sustainability",
      title: "Long-term",
      items: [
        "Apply for open-source grants",
        "Explore partnerships with trading platforms",
        "Community-driven governance"
      ],
      status: "future"
    }
  ];

  const techStack = [
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "TypeScript", icon: "🔷", category: "Frontend" },
    { name: "FastAPI", icon: "⚡", category: "Framework" },
    { name: "Node.js", icon: "💚", category: "Runtime" },
    { name: "WebSocket", icon: "🔌", category: "Real-time" },
    { name: "REST APIs", icon: "🌐", category: "Integration" }
  ];

  const getInvolvedOptions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developers",
      description: "Contribute code, review PRs, suggest features",
      action: "Start Contributing"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Traders",
      description: "Share feedback, request exchange integrations",
      action: "Join Community"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Writers",
      description: "Help with documentation and tutorials",
      action: "Write Docs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join our chats, open issues, spread the word",
      action: "Get Involved"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">OTLI</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#roadmap" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Roadmap
                </a>
                <a href="#tech-stack" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Tech Stack
                </a>
                <a href="#get-involved" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Get Involved
                </a>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  GitHub
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#roadmap" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                Roadmap
              </a>
              <a href="#tech-stack" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                Tech Stack
              </a>
              <a href="#get-involved" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                Get Involved
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-lg mx-3 mt-2">
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Open Trading</span>
                <span className="block text-blue-600">Libraries Initiative</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 sm:max-w-xl sm:mx-auto lg:mx-0">
                Building robust, unified APIs for cryptocurrency and traditional finance markets. 
                Open-source, collaborative, and production-ready trading libraries for developers worldwide.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#get-involved"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Get Started
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-gray-400">terminal</span>
                  </div>
                  <div className="space-y-2">
                    <div>$ npm install otli</div>
                    <div className="text-gray-400"># Installing unified trading API...</div>
                    <div>$ python -m pip install otli</div>
                    <div className="text-gray-400"># Ready to trade across all exchanges</div>
                    <div className="text-blue-400">✓ Binance, Coinbase, Kraken supported</div>
                    <div className="text-blue-400">✓ Real-time data streaming</div>
                    <div className="text-blue-400">✓ Unified order management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose OTLI?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Built by traders, for traders. Designed for production environments.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Development Roadmap
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our journey from MVP to sustainable open-source ecosystem
            </p>
          </div>
          <div className="mt-16">
            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        item.status === 'current' ? 'bg-blue-600' : 
                        item.status === 'next' ? 'bg-blue-400' : 'bg-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {item.phase}
                          </span>
                          {item.status === 'current' && (
                            <span className="ml-3 text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <ul className="space-y-2">
                          {item.items.map((listItem, listIndex) => (
                            <li key={listIndex} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Modern Tech Stack
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Built with proven technologies for reliability and performance
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {techStack.map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join the Movement
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Help us build the future of trading technology
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {getInvolvedOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 text-blue-600">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Open Trading Libraries Initiative</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building robust, unified APIs for cryptocurrency and traditional finance markets. 
                Open-source, collaborative, and production-ready.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Project</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contributing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Open Trading Libraries Initiative. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;