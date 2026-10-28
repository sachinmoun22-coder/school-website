# Shaheed Bhagat Singh Sr. Sec. School, Matour - Website

A complete, animated, responsive school website built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Features

- **7 Pages**: Home, About, Academics, Achievements, Gallery, Admission, Contact
- **Modern Design**: Clean, professional Indian school website aesthetic
- **Animations**: Framer Motion for smooth page transitions, scroll reveals, hover effects
- **Responsive**: Works on mobile, tablet, and desktop
- **Accessibility**: Semantic HTML, keyboard navigation, reduced motion support
- **Gallery Lightbox**: Click-to-enlarge with keyboard navigation
- **Contact Form**: Client-side validation with clear backend notice
- **School Information**: All data from verified sources only

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 (via @tailwindcss/postcss)
- Framer Motion 14
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
cd school-website
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Groq API key to enable the school chatbot:

```bash
VITE_GROQ_API_KEY=your_groq_api_key_here
```

You can copy the example file:

```bash
cp .env.example .env
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Outputs to `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
school-website/
├── public/
│   ├── images/
│   │   └── gallery/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── PageBanner.jsx
│   │   ├── StreamCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── Lightbox.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Achievements.jsx
│   │   ├── Gallery.jsx
│   │   ├── Admission.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── schoolData.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── SCHOOL_INFO.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## School Information

**School Name**: Shaheed Bhagat Singh Sr. Sec. School, Matour
**Location**: Matour, Kaithal, Haryana, India
**School Type**: Senior Secondary School
**Classes**: Up to Class 12
**School Code**: BSEH 10244
**Streams**: Arts, Commerce, Science
**Email**: sbsmatour@gmail.com
**Phone**: 7015056542 (verification pending)

### Important Notes

- All information is from verified sources only
- Unverified data displays "Information will be updated soon."
- No fake achievements, statistics, or testimonials
- Phone number shown as "Contact number verification pending"
- Gallery images are illustrative placeholders

## Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, welcome, streams, stats, previews |
| About | `/about` | School details, key facts, info placeholder |
| Academics | `/academics` | Stream details, curriculum notice |
| Achievements | `/achievements` | Categories with verification notice |
| Gallery | `/gallery` | Masonry grid with lightbox |
| Admission | `/admission` | Info checklist, inquiry form |
| Contact | `/contact` | Details, form, FAQ |

## Images

Replace placeholder images in `public/images/` with authentic school photos:

- `school-building.jpg` - Main school building
- `hero-school.jpg` - Hero background
- `academics-arts.jpg`, `academics-commerce.jpg`, `academics-science.jpg` - Stream images
- `gallery-1.jpg` through `gallery-8.jpg` - Gallery images

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- Primary (blues)
- Secondary (gold/yellow)
- Navy (dark blues)

### School Data

Edit `src/data/schoolData.js` to update school information.

### Animations

Framer Motion variants in `src/components/ScrollReveal.jsx`

## Deployment

The `dist/` folder can be deployed to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## License

© 2025 Shaheed Bhagat Singh Sr. Sec. School, Matour. All rights reserved.