import { Icons } from "@/components/icons";
import { link } from "fs";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Kyaw Khaung Myo Lwin",
  initials: "KKML",
  url: "https://kylelwin.com",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/new+york,+ny",
  description:
    "Software Engineer, Data Scientist, and Entreprenuer in the making. I love building things and finding solutions to help people.",
  summary:
    "Hi! I’m a software engineer, data scientist, and an entrepreneur who’s passionate about building and scaling products using data and AI. Right now, I’m working at Global Key Advisors as a Software Engineer Intern, where I analyze corporate datasets and build software and LLM-based tools to extract insights from company filings like SEC reports. Outside of my internship, I’ve built and launched multiple data-driven projects, including the NYC 311 Property Insights web application and a bank loan analysis and prediction model. In addition, I am co-developing a startup with colleagues aimed at restaurants and food service businesses. My work sits at the intersection of business, engineering, and data. At the core, I’m driven by the idea of using technology and AI to create real impact and move humanity forward in meaningful ways.",
  avatarUrl: "/KKML-IMG.jpg",
  skills: {
    "Languages and Frameworks": [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
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
      "Tableau",
      "Excel",
      "TensorFlow",
      "scikit-learn",
      "Plotly",
      "Pandas",
    ],
    "Development Tools": [
      "Cursor",
      "VS Code",
      "Claude Code",
      "AWS",
      "Node.js",
      "Git",
      "GitHub",
      "Google Cloud",
      "Streamlit",
      "Jupyter Notebooks",
      "TailwindCSS",
      "Docker",
      "Firebase",
      "Vercel",
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
        url: "https://www.youtube.com/@KyawKhaungMyoLwin",
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
      company: "NiBL",
      href: "https://nibl.food",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer & Founder",
      logoUrl: "/nibl_icon.png",
      start: "Mar 2026",
      end: "Present",
      description: [
        "Architected and deployed a production full-stack food delivery platform using Next.js 14, TypeScript, Express.js, and PostgreSQL, structuring a multi-app monorepo (consumer, driver, and admin web apps) with shared typed packages across Vercel and Railway deployments.",
        "Engineered a RESTful Node.js API with geolocation-based restaurant discovery (Haversine distance ranking), Stripe payment integration, JWT and opaque bearer token authentication, real-time GPS driver tracking, and end-to-end order lifecycle management.",
        "Built automated Python ETL pipelines using Playwright network interception to reverse-engineer undocumented third-party restaurant APIs (TapMango, Chopt), loading 200+ menu items with nested modifier groups, images, and pricing into a normalized PostgreSQL database.",
        "Designed a normalized relational PostgreSQL schema across 15+ tables (restaurants, menus, modifiers, orders, drivers, sessions) with JSONB storage for dynamic order customizations and runtime UUID-to-name resolution for driver-facing modifier display.",
        "Developed a real-time driver web application supporting GPS location streaming, order claim/decline workflows, and per-item modifier display; implemented consumer cart state management with Zustand, guest checkout, address geocoding, and SMS delivery notifications.",
      ],
    },
    {
      company: "Global Key Advisors",
      href: "https://gkadvisors.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9o3pZ4bgXk3FmVlHG-iPAn7qPYolf652NsQ&s",
      start: "Sep 2025",
      end: "Present",
      description: [
        "Developed a Finance LLM pipeline using Python and Ollama to extract structured insights from large SEC filings, generating analyst-ready tabular datasets.",
        "Automated company-scoring workflows by evaluating firms across 10 quantitative categories to support investment modeling and due-diligence processes.",
        "Built data-processing scripts to clean, transform, and export outputs into CSVs for downstream analytics.",
      ],
    },
    {
      company: "BetaNYC",
      badges: [],
      href: "https://www.beta.nyc/",
      location: "New York, NY",
      title: "Data Analyst Intern",
      logoUrl: "https://opendataweek.nyc/wp-content/uploads/2024/08/BetaNYC-Logo.png",
      start: "Jan 2021",
      end: "Apr 2021",
      description: [
        "Collected and validated 400+ civic infrastructure data points per day using OpenStreetMap, Overpass API, and geospatial survey tools to map assets across Brooklyn CD1.",
        "Designed an open-source data collection methodology and playbook adopted by 15–20 partner organizations, standardizing validation workflows for civic-tech initiatives.",
        "Led a multi-organization workshop to train stakeholders on participatory mapping and spatial data collection techniques.",
      ],
    },
    {
      company: "Koe Koe Tech",
      href: "https://www.linkedin.com/company/koekoetech/",
      badges: [],
      location: "Yangon, Myanmar",
      title: "Strategic Research Analyst Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHRowf_Gmwitw/company-logo_200_200/company-logo_200_200/0/1656073989418/koekoetech_logo?e=2147483647&v=beta&t=8VQ8UW6d0MvBFD92tR_7_MNK1oOk-o_GfObnn8gWZuo",
      start: "Mar 2020",
      end: "Jun 2020",
      description: [
        "Performed due diligence on 10+ organizations weekly, analyzing revenue models, capital capacity, and operational stability to identify high-value grant and partnership opportunities.",
        "Applied a custom scoring framework to evaluate funding sources, driving a 30% expansion of the funding pipeline and achieving a 40% qualification rate.",
        "Analyzed and refined 5-10 grant proposals per week, increasing approval likelihood through data-driven recommendations and competitive insight.",
      ],
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
      title: "NiBL - Food Delivery Platform",
      href: "https://nibl.food",
      dates: "Mar 2026 - Present",
      active: true,
      description:
        "As part of building NiBL, a restaurant-focused delivery startup, I designed a scalable, real-time food delivery platform architecture tailored for the U.S. market. I structured the system around a microservices-based backend with an API Gateway handling routing, authentication, and rate limiting, and defined core services for users, restaurants, orders, payments, driver dispatch, and real-time tracking. I implemented a geospatially-aware driver matching system using Redis to efficiently assign orders based on proximity, reliability, and load, while modeling the order lifecycle as an event-driven state machine to ensure consistency across services. To support live tracking, I designed a high-frequency GPS ingestion pipeline with optimized protocols (SSE for customers, WebSockets for drivers) and a tiered storage strategy for performance and cost efficiency. The architecture leverages PostgreSQL for transactional consistency, Redis for caching and geo queries, and Kafka for asynchronous event streaming, with containerized deployment on Kubernetes to enable autoscaling and fault tolerance.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://nibl.food",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nibl_icon.png",
    },
    {
      title: "Khant Films Videography Portfolio Website",
      href: "https://www.khantfilms.com/",
      dates: "Feb 2026",
      active: true,
      description:
        "This is the freelance  videography portfolio website for a professional videographer. We worked closely to pick the right design and features to showcase his work and services. I built with Next.js and TailwindCSS while using CapCut to edit the main video on the homepage. We then finalized photos and videos for each portfolio section and hosted it on Vercel.",
      technologies: [
        "Claude Code",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.khantfilms.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kyawkhaungml/khantfilms.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/khantfilms.jpg",
    },
    {
      title: "NYC 311-Property Insights Web App",
      href: "https://github.com/kyawkhaungml/NYC-311-Property-Insights-Web-App/tree/2773fc53342c6d466f4dfa50d96398e2af8053e7/webserver",
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
        /*{
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kyawkhaungml/NYC-311-Property-Insights-Web-App/tree/2773fc53342c6d466f4dfa50d96398e2af8053e7/webserver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NYC_PROPERTY.png",
    },
    {
      title: "Bank Loan Analysis & Prediction Model",
      href: "https://github.com/kyawkhaungml/BankloanDB/tree/main",
      dates: "Jan 2026",
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
        /*{
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kyawkhaungml/BankloanDB/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bank_loan.png",
    },
    {
      title: "NYC Restaurant Scoring Model",
      href: "https://github.com/kyawkhaungml/NYC-Restaurant-Scoring-Model.git",
      description:
        "As part of building a data-driven restaurant discovery startup, I wanted to understand which restaurants in NYC's East Village were genuinely buzzing — not just highly rated, but actively talked about across multiple platforms. I built a multi-source data pipeline in Python that pulls restaurant data from Google Places, Yelp, and Reddit, then combines them into a single composite buzz score using weighted, normalized signals. The score factors in ratings, review volume, and organic community mentions. I also built an interactive Plotly dashboard in a Jupyter notebook to visualize the rankings, rating vs. popularity breakdowns, and price tier analysis — designed to be shared with the team and presented to potential investors as a clean, code-free HTML report.",    
      dates: "Mar 2026",
      active: true,
      technologies: [
        "Claude Code",
        "Python",
        "Google Cloud",
        "Reddit PRAW",
        "Yelp Fusion API",
        "Google Places API",
        "Plotly",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kyawkhaungml/NYC-Restaurant-Scoring-Model.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/restaurant-scoring.png",
   }
    
  ],
} as const;