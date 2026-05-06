import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/science saga logo no-bg.png';

const ApplyPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-[#FAFAFA] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <ArrowLeft className="w-6 h-6 text-teal-700 group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="Science Saga Logo" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-teal-800 leading-tight">Science Saga</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Student Application
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Join the Science Saga program and start your journey into AI, robotics, and future-ready technologies. Fill out the application form below to apply.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            <div className="mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-semibold text-xs uppercase tracking-wider mb-4">
                Application Form
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply via Google Forms</h2>
              <p className="text-gray-600 mb-8">
                Please click the button below to open the application form in a new tab. Make sure to provide accurate details.
              </p>
              
              <a 
                href="https://forms.gle/your-google-form-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-md w-full sm:w-auto text-lg"
              >
                <span>Open Application Form</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Optional embedded iframe if needed later */}
            <div className="hidden mt-12 w-full aspect-[4/3] max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-inner border border-gray-200">
              <iframe 
                src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Arul Educational Trust. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ApplyPage;
