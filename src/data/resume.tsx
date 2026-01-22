import { Icons } from "@/components/icons";
import { link } from "fs";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Kyaw Khaung Myo Lwin",
  initials: "KKML",
  url: "https://dillion.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/new+york,+ny",
  description:
    "Data Scientist, Software Engineer, and Entreprenuer in the making. I love building things and finding solutions to help people.",
  summary:
    "I’m a software engineer, data analyst, and data scientist who’s passionate about building and scaling products using data and AI. Right now, I’m working at Global Key Advisors as a Financial Data Analyst Intern, where I analyze corporate datasets and build software and LLM-based tools to extract insights from company filings like SEC reports. Outside of my internship, I’ve built and launched multiple projects — including a LinkedIn Data Analysis Model that processes thousands of 2024 tech job postings to identify the most in-demand skills in the industry. I also created an UberEats/DoorDash web scraper for a restaurant startup, helping them analyze menu data, pricing, and competition more efficiently. My work sits at the intersection of business, engineering, and data. At the core, I’m driven by the idea of using technology and AI to create real impact and move humanity forward in meaningful ways.",
  avatarUrl: "/KKML-IMG.jpg",
  skills: {
    "Languages and Frameworks": [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "C/C++",
      "PHP",
      "Flask",
      "Django",
    ],
    "Data Analysis & ML": [
      "SQL",
      "PostgreSQL",
      "Power BI",
      "Excel",
      "TensorFlow",
      "scikit-learn",
      "Plotly",
      "Pandas",
    ],
    "Development Tools": [
      "Git",
      "GitHub",
      "Google Cloud",
      "Streamlit",
      "Jupyter Notebooks",
      "VS Code",
      "TailwindCSS",
      "Docker",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kyawkhaung.ml01@gmail.com",
    tel: "+1 (917) 279-2972",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kyawkhaungml",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kyaw-khaung-myo-lwin/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/KyleLwin90768",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kyawkhaung.ml01@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Global Key Advisors",
      href: "https://gkadvisors.com/",
      badges: [],
      location: "Remote",
      title: "Financial Data Analyst Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9o3pZ4bgXk3FmVlHG-iPAn7qPYolf652NsQ&s",
      start: "Sep 2025",
      end: "Present",
      description:
        "Developed a Finance LLM pipeline using Python and Ollama to extract structured insights from large SEC filings, generating analyst-ready tabular datasets. Automated company-scoring workflows by evaluating firms across 10 quantitative categories to support investment modeling and due-diligence processes. Built data-processing scripts to clean, transform, and export outputs into CSVs for downstream analytics.",
    },
    {
      company: "BetaNYC",
      badges: [],
      href: "https://www.beta.nyc/",
      location: "New York, NY",
      title: "Data Analyst Intern",
      logoUrl: "https://opendataweek.nyc/wp-content/uploads/2024/08/BetaNYC-Logo.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Collected and validated 400+ civic infrastructure data points per day using OpenStreetMap, Overpass API, and geospatial survey tools to map assets across Brooklyn CD1. Designed an open-source data collection methodology and playbook adopted by 15–20 partner organizations, standardizing validation workflows for civic-tech initiatives. Led a multi-organization workshop to train stakeholders on participatory mapping and spatial data collection techniques.",
    },
    {
      company: "Koe Koe Tech",
      href: "https://www.linkedin.com/company/koekoetech/",
      badges: [],
      location: "Yangon, Myanmar",
      title: "Strategic Research Analyst Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHRowf_Gmwitw/company-logo_200_200/company-logo_200_200/0/1656073989418/koekoetech_logo?e=2147483647&v=beta&t=8VQ8UW6d0MvBFD92tR_7_MNK1oOk-o_GfObnn8gWZuo",
      start: "March 2020",
      end: "June 2020",
      description:
        "Performed due diligence on 10+ organizations weekly, analyzing revenue models, capital capacity, and operational stability to identify high-value grant and partnership opportunities. Applied a custom scoring framework to evaluate funding sources, driving a 30% expansion of the funding pipeline and achieving a 40% qualification rate. Analyzed and refined 5-10 grant proposals per week, increasing approval likelihood through data-driven recommendations and competitive insight.",
    }
  ],
  education: [
    {
      school: "Columbia University in the City of New York",
      href: "https://www.columbia.edu/",
      degree: "Bachelor's of Arts in Computer Science",
      logoUrl: "/columbia.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "Borough of Manhattan Community College",
      href: "https://www.bmcc.cuny.edu/",
      degree: "Associate's of Science in Computer Science",
      logoUrl: "https://bmccprodstroac.blob.core.windows.net/uploads/2022/01/logo-2line.jpg",
      start: "2022",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "NYC 311-Property Insights Web App",
      href: "https://chatcollect.com",
      dates: "Oct 2025 - Dec 2025",
      active: true,
      description:
        "My colleague and I built this project because we were curious about how city complaints and neighborhood conditions actually affect real estate value in NYC. Instead of just analyzing a static dataset, we wanted to create something interactive — a system where we could store, process, and explore both 311 complaints and property sales in one place. So we designed a full-stack platform using SQL, Python, and Flask that lets us analyze trends, compare neighborhoods, and visualize how complaint volume correlates with housing prices. ",
      technologies: [
        "Flask",
        "Python",
        "PostgreSQL",
        "Google Cloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kyawkhaungml/w4111-project/tree/main/webserver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Bank Loan Analysis & Prediction Model",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "As someone with interest in finance and personal banking, I wanted to explore how machine learning could help predict loan approvals based on customer data. I gathered a dataset of bank customers, cleaned and preprocessed the data using Pandas, and then built classification models with scikit-learn to predict whether a loan would be approved or denied. I evaluated different algorithms, tuned hyperparameters, and visualized the results to understand which factors most influenced loan decisions. This project helped me apply data science techniques to a real-world financial problem while deepening my understanding of ML workflows.",
      technologies: [
        "SQL",
        "Docker",
        "PostgreSQL",
        "Python",
        "Tableau",
        "Excel",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    }
  ],
} as const;
