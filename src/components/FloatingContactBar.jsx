import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function FloatingContactBar() {
  return (
    <aside className="floating-contact" aria-label="Quick contact and social links">
      <motion.div
        className="floating-contact__inner"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.ul className="floating-contact__list" variants={containerVariants}>
          {contactLinks.map(({ id, label, href, ariaLabel, Icon, modifier, external }) => (
            <motion.li key={id} variants={itemVariants}>
              <motion.a
                href={href}
                className={`floating-contact__link floating-contact__link--${modifier}`}
                aria-label={ariaLabel}
                whileHover={{ scale: 1.12, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="floating-contact__icon" aria-hidden="true" focusable="false" />
                <span className="floating-contact__tooltip" aria-hidden="true">
                  {label}
                </span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </aside>
  );
}
