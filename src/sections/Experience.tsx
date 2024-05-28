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
import HighlightOnScroll from "@/components/animations/highlightOnScroll";
import Hyperlink from "@/components/Hyperlink";

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
    end_date: "Apr 2024",
    descriptions: [
      "Optimized search query for finding classes, reducing search time from over 1 minute to under 3 second.",
      "Maintained the backend services for TamanSchool's platform.",
      "Developed the backend services for Class Making Request using Django.",
    ]
  },
  {
    pref: 3,
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
    pref: 5,
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
    pref: 8,
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
    pref: 10,
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
  {
    pref: 12,
    position: "Fullstack Engineer",
    company: {
      name: "PERAK Fasilkom UI 2023",
      website: "https://perak.cs.ui.ac.id"
    },
    start_date: "Mar 2023",
    end_date: "Jun 2023",
    descriptions: [
      "Developed the scoreboard reusable component for PERAK Fasilkom UI's website using TailwindCSS and NextJS.",

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
    <div className="flex mb-2 md:gap-1 gap-0.5 md:text-lg text-sm">
      <div className="floatleft md:h-7 h-5 w-auto flex items-center align-middle aspect-square">
        <BulletStyle size={30} color="#fde68a" className="md:w-6 w-4 h-auto aspect-square" />
      </div>
      <div className="w-fit float-right">
        {children}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className=" transition-all min-h-screen font-satoshi pb-24 bg-dark-background md:px-24 px-12 pt-16 flex flex-col">
      <FadeIn>
        <h1 className="md:text-5xl text-3xl font-bold text-dark-secondary">My Experience</h1>
      </FadeIn>
      <div className="flex h-max">
        <div className="w-4 h-max bg-red-500"/>
        <div>
          {
            experiences.map((experience, index) => (
              <HighlightOnScroll key={index}>
                <div className="md:mt-14 mt-20">
                  <h1 className="md:text-3xl text-2xl font-bold text-dark-text">{experience.position}</h1>
                  <h2 className="md:text-xl text-lg font-bold text-dark-accent">
                    <Hyperlink
                      href={experience.company.website}
                      hexColor="#60C1E3"
                    >{experience.company.name}</Hyperlink>
                  </h2>
                  <h3 className="md:text-xl text-lg font-bold text-dark-text opacity-30">{experience.start_date} - {experience.end_date}</h3>
                  <div className="mt-4">
                    {
                      experience.descriptions.map((description, index) => (
                        <BulletPoint key={index} index={experience.pref+index}>{description}</BulletPoint>
                        // <p key={index} className="text-dark-text flex mb-2 gap-3"><WiMoonAltNew size={18} className="mt-1"/> {description}</p>
                      ))
                    }
                  </div>
                </div>
              </HighlightOnScroll>
            ))
          }
        </div>
      </div>
    </div>
  );
}