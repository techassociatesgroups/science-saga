import React, { useState, useEffect } from 'react';
import { 
  Award, ShieldCheck, Heart, Users, 
  GraduationCap, Utensils, CloudRain, Scissors, TreePine,
  BookOpen, Cpu, Lightbulb, Library, MonitorPlay, Briefcase, Globe,
  Target, Wrench, MapPin, Phone, Mail, ArrowUp
} from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import logo from './assets/science saga logo no-bg.png';
import gallery1 from './assets/sceince saga class room 1.webp';
import gallery2 from './assets/sceince saga class room 2.webp';
import gallery3 from './assets/sceince saga robotic room.webp';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-[#FAFAFA] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo on the far left */}
            <div className="flex items-center gap-3 w-full md:w-1/4">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={logo} alt="Science Saga Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-teal-800 leading-tight">Science Saga</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">by Arul Educational Trust</span>
              </div>
            </div>
            
            {/* Nav links centered */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Focus Areas</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Science Saga</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Impact</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Vision</a>
              <a href="#" className="text-gray-600 hover:text-science-orange text-sm font-medium transition-colors">Contact</a>
            </div>

            {/* Support Us button on the far right */}
            <div className="hidden md:flex w-1/4 justify-end">
              <button className="bg-science-orange hover:bg-orange-600 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
                Support Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <img 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2832&auto=format&fit=crop" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 to-black/60 z-0"></div>
        
        {/* Content centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full mt-10">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-slate-200 font-medium text-sm mb-6">
            Since 1999 — Arul Educational Trust
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Science Saga
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Free Robotics & AI Learning Centre
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Empowering rural communities through education, innovation, and humanitarian service. Making every child future-ready with hands-on STEM training.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button className="bg-science-orange text-gray-900 font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
              Explore Science Saga
            </button>
            <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 w-full sm:w-auto">
              Learn About Us
            </button>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="relative z-10 w-full border-t border-white/20 backdrop-blur-sm bg-black/20 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-science-orange mb-2">25+</div>
                <div className="text-xs md:text-sm text-slate-200 font-semibold uppercase tracking-widest">Years of Service</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-science-orange mb-2">500+</div>
                <div className="text-xs md:text-sm text-slate-200 font-semibold uppercase tracking-widest">Students Trained</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-science-orange mb-2">5,000+</div>
                <div className="text-xs md:text-sm text-slate-200 font-semibold uppercase tracking-widest">Trees Planted</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-science-orange mb-2">10,000+</div>
                <div className="text-xs md:text-sm text-slate-200 font-semibold uppercase tracking-widest">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-xs uppercase tracking-wider mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Arul Educational Trust</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in 1999, Arul Educational Trust is a registered nonprofit organization based in Ulundurpet, Kallakurichi District, Tamil Nadu. For over 25 years, we have been committed to serving underserved communities through education, humanitarian aid, women empowerment, and environmental initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CSR Certified</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Registered under Indian Trusts Act with 12A & 80G certification</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Full financial transparency and digital documentation</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Focused on SC/ST communities, women, and first-gen learners</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community-Led</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Rooted in Ulundurpet, Kallakurichi District, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-semibold text-xs uppercase tracking-wider mb-6">
              CSR Activities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Major Focus Areas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transforming lives across education, food security, disaster relief, women empowerment, and environmental sustainability.
            </p>
          </div>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center mt-1">
                <GraduationCap className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Inclusive Education for SC/ST Students</h3>
                  <span className="px-2 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">Since 1999</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We operate a college in Ulundurpet providing accessible, quality education to Scheduled Caste and Scheduled Tribe students. Over two decades, hundreds of first-generation learners have graduated with dignity, breaking intergenerational cycles of poverty.
                </p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center mt-1">
                <Utensils className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Monthly Food Distribution</h3>
                  <span className="px-2 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">Since 2010</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Distributing food provisions every month to underprivileged families and elderly individuals in the Ulundurpet region, ensuring no one sleeps hungry. Over 1,000+ families benefit annually.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center mt-1">
                <CloudRain className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Disaster Relief & Flood Response</h3>
                  <span className="px-2 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">2015, 2018, 2023</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  During major floods across Tamil Nadu, we provided emergency supplies to over 10,000 individuals, rebuilt 2 permanent homes for flood-affected families, and supported regions with food kits, hygiene items, and temporary shelters.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center mt-1">
                <Scissors className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Women Empowerment & Livelihood Support</h3>
                  <span className="px-2 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">Since 2015</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Empowering women by distributing tailoring machines and conducting skill training. 150+ women entrepreneurs have been supported, many becoming self-reliant contributors to family income.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center mt-1">
                <TreePine className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Environmental Sustainability</h3>
                  <span className="px-2 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">Since 2012</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Organizing tree plantation drives across rural schools and villages. Over 5,000 trees planted in Ulundurpet and surrounding areas, plus school-based eco-awareness programs for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Initiative */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-semibold text-xs uppercase tracking-wider mb-6">
              Flagship Initiative — 2024
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-2">Science Saga</h2>
            <h3 className="text-xl text-teal-700 font-semibold mb-6">Free Robotics & AI Learning Centre</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Launched in 2024, Science Saga provides free AI, electronics, and robotics education with hands-on STEM training and smart lab setups — with special focus on girls and first-generation learners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-500 font-medium">Students Trained</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">250+</div>
              <div className="text-sm text-gray-500 font-medium">Rural Youth Skilled</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">55%</div>
              <div className="text-sm text-gray-500 font-medium">Girl Participation</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">120+</div>
              <div className="text-sm text-gray-500 font-medium">AI/Robotics Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Project Objectives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Free, Inclusive Tech-Enabled Education</h3>
              <p className="text-sm text-gray-600 leading-relaxed">100% free robotics, electronics, and AI education breaking socio-economic and digital barriers.</p>
            </div>
            
            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Hands-On STEM Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">World-class STEM kits, AI modules, and robotics components for real-world engineering skills.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Lightbulb className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Community Knowledge Transformation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Building a culture of innovation and critical thinking with Arduino, AI/ML, and IoT.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Library className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Structured Tuition Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Daily tutoring in Math, Science, Logic, Coding, and practical robotics.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <MonitorPlay className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Smart Labs in Rural Areas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Innovation labs in rural blocks, enabling village-level talent to access metro-level tools.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Briefcase className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Employment-Oriented Skills</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Preparing students with robotics, automation, and AI skills for industry-relevant careers.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Users className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Empowering Girls & First-Gen Learners</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ensuring 50%+ participation of girls with access to high-end technology.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Globe className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Sustainable Tech Ecosystem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A replicable model making every village a self-sustained tech hub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Plan */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFAFA] rounded-3xl p-10 md:p-14 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Implementation Plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {/* Col 1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Smart Lab Setup</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Rural school/community center identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Wi-Fi, projector, tools setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Accessibility & safety compliance</span>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technology & Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Robotics Kits & Arduino Starter Kits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">AI/ML Kits (TensorFlow Lite, Scratch ML)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">IoT Boards & Edge Devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Laptops/Tablets with Internet</span>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Curriculum & Tutoring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">6-day/week tuition support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Maths, Science, Coding, AI curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Weekly robotics challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Village Hackathons & Competitions</span>
                  </li>
                </ul>
              </div>

              {/* Col 4 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Faculty & Mentorship</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">1 Local Program Coordinator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">2 STEM Trainers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">College volunteer network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Monthly visiting AI/Robotics experts</span>
                  </li>
                </ul>
              </div>

              {/* Col 5 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Community Involvement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Monthly Open Days for parents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Panchayat awareness drives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">AI + traditional skills integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">Digital transparency documentation</span>
                  </li>
                </ul>
              </div>

              {/* Col 6 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scalability Roadmap</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">2025 — 5 Smart Labs in Tamil Nadu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">2026 — 25 clusters in 3 states</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">2027 — Mobile AI Labs on Wheels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">2028 — 100 Village AI Labs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact & Long-Term Vision */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-xs uppercase tracking-wider mb-6">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expected Impact & Long-Term Vision</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">500+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Students Impacted</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">1,000+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Academic Support Hours</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">120+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Robots & AI Projects Built</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">250+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Rural Youth Trained</div>
            </div>
            
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">55%+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Girls in Robotics</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">10+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Local Tech Jobs Created</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">5</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Villages Empowered (Phase 1)</div>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-2">1,000+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Students to Jobs/Internships</div>
            </div>
          </div>

          <div className="bg-teal-800 rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Transformational Goals</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-5 py-2.5 bg-teal-700/50 hover:bg-teal-700 transition-colors rounded-full text-white text-sm font-medium border border-teal-600/50">Make Every Rural Child Future-Ready</span>
              <span className="px-5 py-2.5 bg-teal-700/50 hover:bg-teal-700 transition-colors rounded-full text-white text-sm font-medium border border-teal-600/50">Create Local Tech Jobs in Villages</span>
              <span className="px-5 py-2.5 bg-teal-700/50 hover:bg-teal-700 transition-colors rounded-full text-white text-sm font-medium border border-teal-600/50">Reduce Dropout Rates through Tech-Interest</span>
              <span className="px-5 py-2.5 bg-teal-700/50 hover:bg-teal-700 transition-colors rounded-full text-white text-sm font-medium border border-teal-600/50">Bridge Urban-Rural Tech Divide</span>
              <span className="px-5 py-2.5 bg-teal-700/50 hover:bg-teal-700 transition-colors rounded-full text-white text-sm font-medium border border-teal-600/50">Build a Generation of Rural Innovators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-semibold text-xs uppercase tracking-wider mb-6">
              2025 - 2030
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vision for the Future</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">50+ Rural AI Labs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Expand across Tamil Nadu by 2030</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">10,000+ Students</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Trained in future-ready technologies</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1,000+ Women</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Empowered with skill-based employment</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">50,000 Individuals</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Supported with education, food, shelter & relief</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-xs uppercase tracking-wider mb-6">
              Gallery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Glimpse into Our Classrooms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities designed specifically to bring hands-on AI and Robotics learning to rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
              <img src={gallery1} alt="Classroom 1" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
              <img src={gallery2} alt="Classroom 2" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
              <img src={gallery3} alt="Robotic Room" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us & Support */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-xs uppercase tracking-wider mb-6">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us & Support</h2>
            <p className="text-lg text-gray-600">
              Join us in transforming rural India through education, technology, and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Location</div>
                    <div className="text-gray-600 text-sm">Ulundurpet, Kallakurichi District, Tamil Nadu</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Phone</div>
                    <div className="text-teal-700 font-medium text-sm">+91 98945 19351</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-teal-700 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Email</div>
                    <div className="text-teal-700 font-medium text-sm">aruleducation.in@gmail.com</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-teal-700 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Website</div>
                    <div className="text-teal-700 font-medium text-sm">aruleducation.in</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-teal-800 p-10 rounded-3xl text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Arul Educational Trust</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-teal-50/90 leading-relaxed">Registered Trust under Indian Trusts Act</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-teal-50/90 leading-relaxed">CSR & 12A/80G certified for tax-deductible donations</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></span>
                    <span className="text-sm text-teal-50/90 leading-relaxed">Key Focus: Education, Skill Development, Women Empowerment, Rural Innovation</span>
                  </li>
                </ul>

                <div className="bg-teal-900/40 rounded-xl p-5 mb-8 border border-teal-700/50">
                  <div className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Organized By</div>
                  <div className="font-medium mb-1">Arul Educational Trust</div>
                  <div className="text-xs text-teal-200/80">Ulundurpet, Kallakurichi District, Tamil Nadu</div>
                </div>
              </div>
              
              <button className="w-full bg-[#E67E22] hover:bg-[#d67119] text-gray-900 font-bold py-4 rounded-xl transition-colors">
                Get in Touch to Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded p-1">
              <img src={logo} alt="Science Saga Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-tight">Science Saga</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-wider font-medium">by Arul Educational Trust</span>
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            © 2026 Arul Educational Trust. All rights reserved. Empowering communities since 1999.
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919894519351" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className={`w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ml-1 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
