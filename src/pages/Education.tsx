import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      type: 'degree',
      title: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated Magna Cum Laude with a 3.8 GPA.',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems']
    },
    {
      type: 'bootcamp',
      title: 'Full-Stack Web Development Bootcamp',
      institution: 'General Assembly',
      period: '2022',
      description: 'Intensive 12-week program covering modern web development technologies and best practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-123456789',
      link: '#',
      description: 'Validates expertise in developing and maintaining applications on AWS.'
    },
    {
      title: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-987654321',
      link: '#',
      description: 'Demonstrates proficiency in developing scalable applications using GCP.'
    },
    {
      title: 'Meta React Developer Professional Certificate',
      issuer: 'Meta via Coursera',
      date: '2022',
      credentialId: 'COURSERA-ABC123',
      link: '#',
      description: 'Comprehensive program covering React development and modern frontend practices.'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MONGO-DEF456',
      link: '#',
      description: 'Expertise in MongoDB database design and development.'
    }
  ];

  const courses = [
    {
      title: 'Advanced TypeScript Techniques',
      platform: 'Frontend Masters',
      instructor: 'Mike North',
      date: '2023',
      hours: '8 hours'
    },
    {
      title: 'System Design for Frontend Engineers',
      platform: 'Frontend Masters',
      instructor: 'Sarah Drasner',
      date: '2023',
      hours: '6 hours'
    },
    {
      title: 'Complete Guide to PostgreSQL',
      platform: 'Udemy',
      instructor: 'Stephen Grider',
      date: '2022',
      hours: '12 hours'
    },
    {
      title: 'Docker and Kubernetes Masterclass',
      platform: 'Udemy',
      instructor: 'Bret Fisher',
      date: '2022',
      hours: '15 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education & Certifications
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning is at the heart of my development journey. 
            Here's my educational background and professional certifications.
          </p>
        </div>

        {/* Formal Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800">Formal Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                    <div className="flex items-center text-slate-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'degree' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.type === 'degree' ? 'Degree' : 'Bootcamp'}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800">Professional Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{cert.title}</h3>
                    <p className="text-emerald-600 font-medium">{cert.issuer}</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{cert.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">ID: {cert.credentialId}</span>
                  <a
                    href={cert.link}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section>
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800">Recent Courses</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-slate-800">{course.title}</h3>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
                    {course.date}
                  </span>
                </div>
                
                <p className="text-purple-600 font-medium mb-2">{course.platform}</p>
                <p className="text-slate-600 text-sm mb-2">Instructor: {course.instructor}</p>
                <p className="text-slate-500 text-sm">{course.hours}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;