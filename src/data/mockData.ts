// Mock data for the website - in a real app, this would come from a CMS

export interface Course {
  id: string;
  title: string;
  shortBlurb: string;
  ageRange: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  topic: "Python" | "AI/ML" | "Data" | "Web" | "Other";
  duration: string;
  format: string;
  nextStartDate: string;
  price?: string;
  thumbnail: string;
  syllabus: string[];
  projects: string[];
  requirements: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: "Student" | "Parent";
  photo?: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: "All" | "Camps" | "Projects" | "Events";
  date: string;
  credit?: string;
}

export const courses: Course[] = [
  {
    id: "scratch-beginners",
    title: "Introduction to Scratch",
    shortBlurb: "Start coding with Scratch! Make animations, games, and stories with drag-and-drop blocks.",
    ageRange: "Ages 8-12",
    skillLevel: "Beginner",
    topic: "Other",
    duration: "6 × 1-hour sessions",
    format: "In-person & Virtual",
    nextStartDate: "May 1, 2024",
    price: "Free",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "Introduction to Scratch and block coding",
      "Creating your first animation",
      "Making interactive stories",
      "Building simple games",
      "Using sounds and effects",
      "Showcase: Present your project"
    ],
    projects: [
      "Animated greeting card",
      "Choose-your-own-adventure story",
      "Simple platformer game"
    ],
    requirements: [
      "Laptop or tablet",
      "Scratch account (free)",
      "Curiosity and creativity!"
    ]
  },
  {
    id: "python-fundamentals",
    title: "Introduction to Python",
    shortBlurb: "Build games, calculators, and charts while learning coding basics from peer instructors.",
    ageRange: "Ages 11-15",
    skillLevel: "Beginner",
    topic: "Python",
    duration: "8 × 90-min sessions",
    format: "In-person & Virtual",
    nextStartDate: "March 15, 2024",
    price: "Free",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "Python basics and syntax",
      "Variables and data types",
      "Loops and conditionals",
      "Functions and modules",
      "File handling",
      "Building interactive programs",
      "Debugging techniques",
      "Final project presentation"
    ],
    projects: [
      "Calculator app",
      "Rock-Paper-Scissors game",
      "Data visualization charts",
      "Interactive quiz game"
    ],
    requirements: [
      "Laptop or computer",
      "Python 3.x installed",
      "Web browser",
      "Enthusiasm to learn!"
    ]
  },
  {
    id: "intro-ai-ml",
    title: "Intro to AI & Machine Learning",
    shortBlurb: "Train image classifiers, understand AI bias, and present your own ML project.",
    ageRange: "Ages 13-16",
    skillLevel: "Intermediate",
    topic: "AI/ML",
    duration: "6 × 2-hour sessions",
    format: "In-person preferred",
    nextStartDate: "April 1, 2024",
    price: "Free",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "What is AI and Machine Learning?",
      "Training your first model",
      "Image recognition basics",
      "Understanding bias in AI",
      "Ethics in artificial intelligence",
      "Project planning and execution"
    ],
    projects: [
      "Image classifier for animals",
      "Bias detection experiment",
      "AI ethics presentation",
      "Personal ML project"
    ],
    requirements: [
      "Completed Python Fundamentals or equivalent",
      "Laptop with 8GB+ RAM",
      "Google account for Colab",
      "Camera or phone for image collection"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "I would say my experience at the camp was really fun and fulfilling. I learned a lot!",
    name: "Student",
    role: "Student"
  },
  {
    id: "2",
    quote: "I liked that we were able to make games and played kahoots.",
    name: "Student",
    role: "Student"
  },
  {
    id: "3",
    quote: "I loved how every lesson was so engaging. We were able to apply everything we learned.",
    name: "Student",
    role: "Student"
  },
  {
    id: "4",
    quote: "It was a ton of fun and I learned a lot. It got me interested in technology.",
    name: "Student",
    role: "Student"
  },
  {
    id: "5",
    quote: "The camp was a great learning experience, but also really fun at the same time!!",
    name: "Student",
    role: "Student"
  },
  {
    id: "6",
    quote: "The camp was so inspiring!",
    name: "Student",
    role: "Student"
  },
  {
    id: "7",
    quote: "I loved the fact that we were really hands-on, making projects!",
    name: "Student",
    role: "Student"
  },
  {
    id: "8",
    quote: "The Blooket and Kahoot review games were so much fun!!",
    name: "Student",
    role: "Student"
  },
  {
    id: "9",
    quote: "The Blookets and Kahoots made the class fun and helped me remember everything!",
    name: "Student",
    role: "Student"
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "1",
    title: "The Idea Sparked",
    date: "January 2023",
    description: "Started with a simple question: why can't kids teach other kids to code?",
  image: "/Website-Photos/Python Summer 24/IMG_2273.jpg",
    tag: "Foundation"
  },
  {
    id: "2",
    title: "First Coding Session",
    date: "March 2023",
    description: "Taught 3 friends Python basics in my bedroom. Everyone actually understood it!",
  image: "/Website-Photos/Python Middle 24/IMG_6095.jpg",
    tag: "Teaching"
  },
  {
    id: "3",
    title: "Community Center Partnership",
    date: "May 2023",
    description: "Local community center offered us a classroom space for weekend sessions.",
  image: "/Website-Photos/Python Summer 24/IMG_2411.jpg",
    tag: "Growth"
  },
  {
    id: "4",
    title: "First Official Camp",
    date: "June 2023",
    description: "8 kids signed up for our first 2-week Python camp. Nervous but excited!",
  image: "/Website-Photos/Python Summer 25/IMG_7757.jpg",
    tag: "Milestone"
  },
  {
    id: "5",
    title: "AI Workshop Launch",
    date: "August 2023",
    description: "Introduced machine learning concepts with image recognition projects.",
  image: "/Website-Photos/AI-ML-Python-25/IMG_7653.jpg",
    tag: "Innovation"
  },
  {
    id: "6",
    title: "Parent Feedback Form",
    date: "September 2023",
    description: "Started collecting formal feedback. 100% would recommend to other families!",
  image: "/Website-Photos/Scratch Camp 2023/IMG_4493.jpg",
    tag: "Quality"
  },
  {
    id: "7",
    title: "Library Collaboration",
    date: "October 2023",
    description: "Public library invited us to run monthly coding hours for kids.",
  image: "/Website-Photos/Python Summer 24/IMG_7280.jpg",
    tag: "Community"
  },
  {
    id: "8",
    title: "First Demo Day",
    date: "November 2023",
    description: "Kids presented their projects to families. So much pride and joy!",
  image: "/Website-Photos/AI-ML-Python-25/0D5A7402.jpg",
    tag: "Celebration"
  },
  {
    id: "9",
    title: "Virtual Sessions Begin",
    date: "December 2023",
    description: "Launched online classes to reach kids beyond our local area.",
  image: "/Website-Photos/Python Summer 25/IMG_7905.jpg",
    tag: "Expansion"
  },
  {
    id: "10",
    title: "Student Instructors Join",
    date: "January 2024",
    description: "Three of our best students became peer instructors. Full circle moment!",
  image: "/Website-Photos/AI-ML-Python-25/IMG_7736.jpg",
    tag: "Leadership"
  },
  {
    id: "11",
    title: "30 Students Milestone",
    date: "February 2024",
    description: "Reached 30 students taught across all our programs. Growing strong!",
  image: "/Website-Photos/Python Middle 24/IMG_6108.jpg",
    tag: "Impact"
  },
  {
    id: "12",
    title: "Website Launch",
    date: "March 2024",
    description: "Built our own website to share our story and reach even more families.",
  image: "/Website-Photos/Python Summer 24/IMG_7285.jpg",
    tag: "Digital"
  }
];

export const stats: Stat[] = [
  {
    label: "Students Reached",
    value: "120+",
    description: "Amazing kids who've joined our coding journey"
  },
  {
    label: "Sessions Run",
    value: "5",
    description: "Camps and workshops completed successfully"
  },
  {
    label: "Average Rating",
    value: "4.9/5",
    description: "Parent and student satisfaction score"
  },
  {
    label: "Projects Completed",
    value: "500+",
    description: "Games, apps, and AI models built by students"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "/Website-Photos/Python Summer 24/IMG_2272.png",
    caption: "Students working on their first Python projects during summer camp",
    category: "Camps",
    date: "June 2023",
    credit: "Photo by teaching team"
  },
  {
    id: "2",
    image: "/Website-Photos/AI-ML-Python-25/0D5A7402.png",
    caption: "Demo Day presentations - kids showing off their games",
    category: "Events",
    date: "November 2023",
    credit: "Photo by parent volunteers"
  },
  {
    id: "3",
    image: "/Website-Photos/AI-ML-Python-25/IMG_7652.png",
    caption: "AI workshop - training image classifiers",
    category: "Camps",
    date: "August 2023"
  },
  {
    id: "4",
    image: "/Website-Photos/Python Middle 24/IMG_6092.png",
    caption: "Calculator app built by 12-year-old Maya",
    category: "Projects",
    date: "July 2023"
  },
  {
    id: "5",
    image: "/Website-Photos/Scratch Camp 2023/IMG_4492.png",
    caption: "Rock-Paper-Scissors tournament with student-built games",
    category: "Events",
    date: "September 2023"
  },
  {
    id: "6",
    image: "/Website-Photos/Python Summer 25/0D5A8856.png",
    caption: "Data visualization projects showing local weather patterns",
    category: "Projects",
    date: "October 2023"
  }
];
