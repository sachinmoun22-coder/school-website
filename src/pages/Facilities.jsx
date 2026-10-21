import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Building2, Target, Award, Users, MapPin, Mail, Phone, ArrowRight, Heart, Shield, Palette, Microscope, Computer, Wifi, Dumbbell, Music, FlaskConical, Library, Home, Bus, Bed } from "lucide-react";
import { schoolData, facilitiesData, transportRoutes } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

const facilityIcons = {
  "Classrooms": Home,
  "Science Laboratory": FlaskConical,
  "Transport Facility": Bus,
  "Hostel Facility": Bed,
  "Playground": Dumbbell,
  "School Campus": Building2,
};

function getFacilityIcon(name) {
  return facilityIcons[name] || Building2;
}

export function Facilities() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="School Facilities"
        subtitle="Our Campus"
      >
        Discover the spaces that inspire learning and growth at S.B.S Sr.Sec. School.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">
                Our school campus is designed to provide a safe, nurturing, and stimulating environment
                where students can learn, explore, and grow. From well-equipped classrooms to outdoor
                spaces for physical activity, every facility supports our educational mission.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-sage">
                  <Building2 className="w-4 h-4 mr-1" />
                  {facilitiesData.length} Key Facilities
                </span>
                <span className="badge badge-cream">
                  <Target className="w-4 h-4 mr-1" />
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle
            title="Our Facilities"
            subtitle="Learning Spaces"
          />

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((facility, index) => (
              <ScrollReveal key={facility.id} delay={0.1 * index}>
                <div className="card overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-lg w-full bg-forest-900/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                        {facility.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center">
                        {(() => {
                          const Icon = facilityIcons[facility.name] || Building2;
                          return <Icon className="w-5 h-5 text-forest-600" />;
                        })()}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-dark-900">{facility.name}</h3>
                    </div>
                    <p className="text-dark-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title="Transport Routes"
            subtitle="Bus & Van Coverage"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-card-lg bg-white border border-border-light">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center">
                    <Bus className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-dark-900">School Transport</h3>
                    <p className="text-dark-600 text-sm">5 Buses + 1 Van covering nearby villages</p>
                  </div>
                </div>
                <p className="text-dark-600 mb-6">
                  Our school transport facility covers the following villages with safe and reliable bus/van services:
                </p>
                <div className="flex flex-wrap gap-2">
                  {transportRoutes.map((route, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium border border-forest-200"
                    >
                      {route}
                    </span>
                  ))}
                </div>
                <p className="text-dark-500 text-sm mt-4">
                  Routes may be extended to other nearby villages based on demand. Contact the school office for exact pickup points and timings.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Campus Highlights"
            subtitle="Key Features"
          />
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "35 Classrooms", desc: "Well-ventilated rooms with natural light for Nursery to 12th" },
              { icon: FlaskConical, title: "Science Laboratory", desc: "Equipped for Physics, Chemistry, and Biology practical work" },
              { icon: Bus, title: "Transport Facility", desc: "5 buses + 1 van covering 8+ villages" },
              { icon: Bed, title: "Hostel Facility", desc: "Residential accommodation available for students" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-forest-600" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Information Notice"
            subtitle="Disclaimer"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-dark-900 mb-3">
                      Facility Information Based on Available Data
                    </h3>
                    <div className="space-y-3 text-dark-600">
                      <p>
                        The facilities listed above are based on the verified information provided by the school.
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Photographs shown are from the school's actual campus where available</li>
                        <li>Specific equipment and lab details will be updated when confirmed</li>
                        <li>Transport routes may vary based on student enrollment and demand</li>
                        <li>Hostel facility details (capacity, amenities) will be updated when available</li>
                        <li>Facility availability may vary by academic session</li>
                      </ul>
                      <p className="mt-4 font-medium text-forest-700">
                        Complete facility details will be published when officially provided by the school administration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Want to Visit Our Campus?"
            subtitle="Visit Us"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">
                Experience our facilities firsthand. Schedule a visit or contact us for more information.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${schoolData.email}`} className="btn-primary group">
                  Email Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="btn-outline group">
                  Contact Page
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}