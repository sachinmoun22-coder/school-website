import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { schoolData } from "../data/schoolData";
import "./FloatingContactBar.css";

const SCHOOL_NAME = schoolData.name;

const contactLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/91${schoolData.phone}?text=${encodeURIComponent(`Hello, I would like to know more about ${SCHOOL_NAME}.`)}`,
    ariaLabel: `Chat with ${SCHOOL_NAME} on WhatsApp`,
    Icon: FaWhatsapp,
    modifier: "whatsapp",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sbs_matour_10244?rpxt=MWhvMzBpemF1dDVhOQ==",
    ariaLabel: `Open ${SCHOOL_NAME} on Instagram`,
    Icon: FaInstagram,
    modifier: "instagram",
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1KGXMVT2iN/",
    ariaLabel: `Open ${SCHOOL_NAME} on Facebook`,
    Icon: FaFacebookF,
    modifier: "facebook",
    external: true,
  },
];

export function FloatingContactBar() {
  return (
    <aside className="floating-contact" aria-label="Quick contact and social links">
      <div className="floating-contact__inner">
        <ul className="floating-contact__list">
          {contactLinks.map(({ id, label, href, ariaLabel, Icon, modifier, external }) => (
            <li key={id}>
              <a
                href={href}
                className={`floating-contact__link floating-contact__link--${modifier}`}
                aria-label={ariaLabel}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="floating-contact__icon" aria-hidden="true" focusable="false" />
                <span className="floating-contact__tooltip" aria-hidden="true">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
