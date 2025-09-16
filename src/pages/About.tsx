import React from 'react';
import { Code, Palette, Database, Globe, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Palette,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'SCSS'],
      color: 'blue'
    },
    {
      category: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      color: 'emerald'
    },
    {
      category: 'Tools & Technologies',
      icon: Code,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack'],
      color: 'purple'
    },
    {
      category: 'Design & UX',
      icon: Globe,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX', 'Prototyping', 'Accessibility'],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200'
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate web developer with a love for creating beautiful, functional, 
            and user-centered digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">My Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hi, I’m Joseph Kimani — a passionate web developer who loves building responsive, user-friendly, and impactful digital solutions.
                  My journey into technology began with curiosity about how websites and apps work, and over time, that curiosity turned into a strong passion for web development, cloud computing, and digital innovation.
                </p>
                <p>
                  I specialize in building exceptional digital experiences with modern 
                  technologies. Whether it's a responsive website, a complex web application, 
                  or an API, I bring both technical expertise and creative problem-solving 
                  to every project.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while reading about the latest web development trends.
                </p>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                When I'm Not Coding
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Coffee', icon: Coffee },
                  { name: 'Photography', icon: Palette },
                  { name: 'Travel', icon: Globe },
                  { name: 'Open Source', icon: Code }
                ].map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div key={interest.name} className="flex items-center text-slate-600">
                      <Icon className="h-4 w-4 mr-2" />
                      {interest.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Skills & Expertise</h2>
            <div className="space-y-8">
              {skills.map((skillGroup) => {
                const Icon = skillGroup.icon;
                return (
                  <div key={skillGroup.category} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg ${colorClasses[skillGroup.color as keyof typeof colorClasses]} border`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 ml-3">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">My Development Philosophy</h2>
          <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
            I believe in writing clean, maintainable code that not only works well but is also 
            a joy to work with. Every project is an opportunity to learn something new, push 
            boundaries, and create something meaningful that makes a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;