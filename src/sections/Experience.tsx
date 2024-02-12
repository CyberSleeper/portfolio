import React from "react";
import FadeIn from "@/components/animations/fadeIn";

interface CompanyProps {
  name: string
  website: string
}

interface ExperienceProps {
  position: string
  company: CompanyProps
  start_date: string
  end_date: string
  descriptions: string[]
}

const experiences: ExperienceProps[] = [
  {
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
    position: "Fullstack Engineer",
    company: {
      name: "PMB Fasilkom UI",
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

export default function Experience() {


  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-section dark:bg-dark-section px-24 pt-16 flex flex-col">
      <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary">Experience</h1>
      </FadeIn>
    </div>
  );
}