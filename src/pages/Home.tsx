import React from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                Jk
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Joseph Kiarie kimani
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-4">
              Full-Stack Web Developer and AI Automation enginner
            </p>

            <div className="flex items-center justify-center text-slate-500 mb-8">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Nairobi, Kenya</span>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              I craft beautiful, responsive web applications with modern technologies. 
              Passionate about creating exceptional user experiences and writing clean, 
              maintainable code that brings ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-slate-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Core Technologies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I work with modern technologies to build scalable and performant applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
              <div key={tech} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-slate-700 font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;