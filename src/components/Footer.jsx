import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, BookOpen, GraduationCap } from "lucide-react";
import { schoolData, navLinks } from "../data/schoolData";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6" aria-label="Go to homepage">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">{schoolData.shortName}</h3>
                <p className="text-xs text-navy-400 leading-none">Matour, Kaithal, Haryana</p>
              </div>
            </Link>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              A senior secondary school providing quality education up to Class 12
              with Arts, Commerce, and Science streams.
            </p>
            <div className="flex items-center gap-4 text-navy-400 text-sm">
              <a
                href={`mailto:${schoolData.email}`}
                className="flex items-center gap-2 hover:text-secondary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {schoolData.email}
              </a>
            </div>
            <div className="flex items-center gap-4 text-navy-400 text-sm mt-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {schoolData.location}
              </span>
            </div>
            <div className="flex items-center gap-4 text-navy-400 text-sm mt-2">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3" aria-label="Quick links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-navy-400 hover:text-secondary-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Academic Streams</h4>
            <ul className="space-y-3" role="list">
              {schoolData.streams.map((stream) => (
                <li key={stream} className="flex items-center gap-2 text-navy-400">
                  <BookOpen className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                  <span className="text-sm">{stream}</span>
                </li>
              ))}
            </ul>
            <p className="text-navy-500 text-sm mt-6">
              School Code: <span className="text-navy-300 font-medium">{schoolData.schoolCode}</span>
            </p>
            <p className="text-navy-500 text-sm mt-1">
              Board: <span className="text-navy-300 font-medium">{schoolData.board}</span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <address className="not-italic space-y-4 text-navy-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">{schoolData.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${schoolData.email}`}
                  className="hover:text-secondary-400 transition-colors"
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

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {schoolData.currentYear} {schoolData.name}. All rights reserved.
          </p>
          <p className="text-navy-500 text-sm text-center md:text-right">
            School Code: {schoolData.schoolCode} | {schoolData.schoolType}
          </p>
        </div>
      </div>
    </footer>
  );
}