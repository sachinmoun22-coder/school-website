import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { schoolData, navLinks } from "../data/schoolData";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white leading-tight">{schoolData.shortName}</h3>
                <p className="text-xs text-forest-300 leading-none">{schoolData.tagline}</p>
              </div>
            </Link>
            <p className="text-forest-300 text-sm leading-relaxed">
              A senior secondary school providing quality education from Nursery to Class 12
              with Arts, Commerce, and Science streams at the senior secondary level.
            </p>
            <div className="flex items-center gap-3 text-forest-300 text-sm">
              <a
                href={`mailto:${schoolData.email}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {schoolData.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-forest-300 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {schoolData.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-3" aria-label="Quick links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-forest-300 hover:text-accent-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Academic Streams */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Academic Streams</h4>
            <ul className="space-y-3" role="list">
              {schoolData.streams.map((stream) => (
                <li key={stream} className="flex items-center gap-2 text-forest-300">
                  <BookOpen className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{stream}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-forest-800 space-y-2 text-forest-400 text-sm">
              <p>School Code: <span className="text-cream-100 font-medium">{schoolData.schoolCode}</span></p>
              <p>Board: <span className="text-cream-100 font-medium">{schoolData.board}</span></p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact Us</h4>
            <address className="not-italic space-y-4 text-forest-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">{schoolData.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${schoolData.email}`}
                  className="hover:text-accent-400 transition-colors"
                >
                  {schoolData.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>
                  {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-forest-400 text-sm">
            &copy; {schoolData.currentYear} {schoolData.name}. All rights reserved.
          </p>
          <p className="text-forest-400 text-sm text-center md:text-right">
            School Code: {schoolData.schoolCode} | {schoolData.schoolType}
          </p>
        </div>
      </div>
    </footer>
  );
}