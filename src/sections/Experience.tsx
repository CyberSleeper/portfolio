import React from "react";
import FadeIn from "@/components/animations/fadeIn";
import { 
  WiMoonAltNew,
  WiMoonAltWaxingCrescent1, 
  WiMoonAltWaxingCrescent2, 
  WiMoonAltWaxingCrescent3, 
  WiMoonAltWaxingCrescent4, 
  WiMoonAltWaxingCrescent5, 
  WiMoonAltWaxingCrescent6,
  WiMoonAltFirstQuarter,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaxingGibbous2,
  WiMoonAltWaxingGibbous3,
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingGibbous5,
  WiMoonAltWaxingGibbous6,
  WiMoonAltFull,
} from "react-icons/wi";
import { useState } from "react";

interface CompanyProps {
  name: string
  website: string
}

interface ExperienceProps {
  pref: number
  position: string
  company: CompanyProps
  start_date: string
  end_date: string
  descriptions: string[]
}

const bulletStyles = [
  WiMoonAltNew,
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaxingCrescent2,
  WiMoonAltWaxingCrescent3,
  WiMoonAltWaxingCrescent4,
  WiMoonAltWaxingCrescent5,
  WiMoonAltWaxingCrescent6,
  WiMoonAltFirstQuarter,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaxingGibbous2,
  WiMoonAltWaxingGibbous3,
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingGibbous5,
  WiMoonAltWaxingGibbous6,
  WiMoonAltFull,
]

const experiences: ExperienceProps[] = [
  {
    pref: 0,
    position: "Backend Engineer",
    company: {
      name: "TamanSchool",
      website: "https://www.tamanschool.com"
    },
    start_date: "Jan 2024",
    end_date: "Present",
    descriptions: [
      "Maintained the backend services for TamanSchool's platform.",
      "Developed the backend services for Class Making using Django.",
    ]
  },
  {
    pref: 2,
    position: "Fullstack Engineer",
    company: {
      name: "Pemira UI 2024",
      website: "https://pemiraui.id"
    },
    start_date: "Oct 2023",
    end_date: "Des 2023",
    descriptions: [
      "Developed the frontend of Pemira UI 2024's website using NextJS and TailwindCSS.",
      "Developed the database schema, seeding, and API for the website using PostgreSQL, Prisma, and ExpressJS.",
    ]
  },
  {
    pref: 4,
    position: "Lead Software Engineer",
    company: {
      name: "Open House Fasilkom UI 2023",
      website: "https://oh.cs.ui.ac.id"
    },
    start_date: "Jul 2023",
    end_date: "Nov 2023",
    descriptions: [
      "Lead a team of 7 developers to develop Open House Fasilkom UI's website.",
      "Developed Registration Page, Wall of Fame Page, and 4 other sections using NextJS and TailwindCSS.",
      "Deployed the website with reverse proxy and SSL using Nginx and PM2."
    ]
  },
  {
    pref: 7,
    position: "Fullstack Engineer",
    company: {
      name: "PMB Fasilkom UI 2023",
      website: "https://pmb.cs.ui.ac.id"
    },
    start_date: "Jul 2023",
    end_date: "Aug 2023",
    descriptions: [
      "Revamped the user interface of PMB Fasilkom UI's website using TailwindCSS and NextJS.",
      "Developed the backend service to facilitate seamless friend connection through one-time-use QR code scanning functionality using ExpressJS."
    ]
  },
  {
    pref: 9,
    position: "Software Engineer",
    company: {
      name: "GovTech Procurement | Telkom Indonesia",
      website: "https://www.eproc-gov.tech"
    },
    start_date: "Jun 2023",
    end_date: "Aug 2023",
    descriptions: [
      "Developed reusable real-time database streaming components for analytics purposes using ClickHouse and Metabase.",
      "Developed session recording on database access for audit purposes using Metabase."
    ]
  },
]

interface BulletPointProps {
  index: number;
  children: React.ReactNode;
}

const BulletPoint: React.FC<BulletPointProps> = ({ index, children }) => {
  const BulletStyle = bulletStyles[index % bulletStyles.length];
  return (
    <div className="flex mb-2 gap-3">
      <BulletStyle size={18} className="mt-1" />
      {children}
    </div>
  );
};


export default function Experience() {
  const [bulletIdx, setBulletIdx] = useState(0)

  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-background dark:bg-dark-background px-24 pt-16 flex flex-col">
      <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary">Experience</h1>
      </FadeIn>
      <div className="flex h-max">
        <div className="w-4 h-max bg-red-500"/>
        <div>
          {
            experiences.map((experience, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="mt-12">
                  <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">{experience.position}</h1>
                  <h2 className="text-xl font-bold text-light-accent dark:text-dark-accent">
                    <a href={experience.company.website} target="_blank" rel="noreferrer">{experience.company.name}</a>
                  </h2>
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text opacity-30">{experience.start_date} - {experience.end_date}</h3>
                  <div className="mt-4">
                    {
                      experience.descriptions.map((description, index) => (
                        <BulletPoint key={index} index={experience.pref+index}>{description}</BulletPoint>
                        // <p key={index} className="text-light-text dark:text-dark-text flex mb-2 gap-3"><WiMoonAltNew size={18} className="mt-1"/> {description}</p>
                      ))
                    }
                  </div>
                </div>
              </FadeIn>
            ))
          }
        </div>
      </div>
    </div>
  );
}