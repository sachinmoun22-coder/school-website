import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, BookOpen, GraduationCap } from "lucide-react";
import { useLocalizedData } from "../i18n/useLocalizedData";
import { schoolData as baseSchool } from "../data/schoolData";

export function Footer() {
  const { t, schoolData, navLinks } = useLocalizedData();

  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="container-custom pb-24 pt-16 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3" aria-label={t.nav.home}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 via-forest-600 to-forest-800 flex items-center justify-center shadow-lg shadow-forest-950/40">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white leading-tight">{baseSchool.shortName}</h3>
                <p className="text-xs text-forest-300 leading-none">{schoolData.tagline}</p>
              </div>
            </Link>
            <p className="text-cream-100 text-sm leading-relaxed">
              {t.footer.about}
            </p>
            <div className="flex items-center gap-3 text-cream-100 text-sm">
              <a
                href={`mailto:${baseSchool.email}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {baseSchool.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-cream-100 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {schoolData.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">{t.common.quickLinks}</h4>
            <nav className="space-y-3" aria-label={t.common.quickLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block rounded-sm text-forest-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Academic Streams */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">{t.footer.streams}</h4>
            <ul className="space-y-3" role="list">
              {schoolData.streams.map((stream) => (
                <li key={stream} className="flex items-center gap-2 text-forest-300">
                  <BookOpen className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{stream}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-forest-800 space-y-2 text-cream-200 text-sm">
              <p>{t.footer.schoolCode}: <span className="text-cream-100 font-medium">{baseSchool.schoolCode}</span></p>
              <p>{t.footer.board}: <span className="text-cream-100 font-medium">{schoolData.board}</span></p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">{t.footer.contactUs}</h4>
            <address className="not-italic space-y-4 text-cream-200 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">{schoolData.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${baseSchool.email}`}
                  className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 transition-colors"
                >
                  {baseSchool.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{baseSchool.phone}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-200 text-sm">
            &copy; {baseSchool.currentYear} {baseSchool.name}. {t.common.allRightsReserved}
          </p>
          <p className="text-cream-200 text-sm text-center md:text-right">
            {t.footer.schoolCode}: {baseSchool.schoolCode} | {schoolData.schoolType}
          </p>
        </div>
      </div>
    </footer>
  );
}