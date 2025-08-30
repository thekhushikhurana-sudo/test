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
    ageRange: "Ages 7-14",
    skillLevel: "Beginner",
    topic: "Other",
    duration: "8 × 90-minute sessions",
    format: "In-person",
    nextStartDate: "Not Currently Scheduled",
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
    ageRange: "Ages 10-15",
    skillLevel: "Beginner",
    topic: "Python",
    duration: "8 × 90-min sessions",
    format: "In-person",
    nextStartDate: "Not Currently Scheduled",
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
      "Rock-Paper-Scissors game",
      "Data visualization charts",
      "Personal final project",
      "And so much more!"
    ],
    requirements: [
      "Computer",
      "Enthusiasm to learn!"
    ]
  },
  {
    id: "intro-ai-ml",
    title: "Intro to AI & Machine Learning",
    shortBlurb: "Train image classifiers, understand AI bias, and present your own ML project.",
    ageRange: "Ages 10-16",
    skillLevel: "Intermediate",
    topic: "AI/ML",
    duration: "8 × 90-minute sessions",
    format: "In-person preferred",
    nextStartDate: "September 2025",
    price: "Free",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "What is AI and Machine Learning?",
      "Training your first model",
      "Image recognition basics",
      "Understanding bias in AI",
      "Supervised vs unsupervised learning",
      "Evaluating model performance",
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
      "Computer",
      "Enthusiasm to learn!"
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
    title: "AI/ML Camp In Middle School 🦾",
    date: "Fall 2025",
    description: "We decided to take a new iteration of our AI/ML camp to the same middle school where we had surveyed the students in 2023. Coming soon!",
  image: "/Website-Photos/Python Summer 24/IMG_2273.jpg",
    tag: "Camps"
  },
  {
    id: "2",
    title: "Tech Interest Survey Pt. 2 📈",
    date: "Fall 2025",
    description: "Conducted a second survey at the same middle school to measure impact and interest in tech education. Results coming soon!",
  image: "/Website-Photos/Python Middle 24/IMG_6095.jpg",
    tag: "Research"
  },
  {
    id: "3",
    title: "For Kids, By Kids on TED Stage 🎤",
    date: "Summer 2025",
    description: "Our founder presented a TEDx talk on peer teaching in coding education. Chosen out of 225 applicants, youngest speaker ever at TEDxJeffersonU!",
  image: "/Website-Photos/Python Summer 24/IMG_2411.jpg",
    tag: "National Stage!"
  },
  {
    id: "4",
    title: "Python Summer Camp Pt. 2 ⚡️",
    date: "Summer 2025",
    description: "Ran a second summer Python camp, this time with 24 kids and had an amazing time!",
  image: "/Website-Photos/Python Summer 25/IMG_7757.jpg",
    tag: "Camps"
  },
  {
    id: "5",
    title: "AI/ML/Python Camp 🤖",
    date: "Summer 2025",
    description: "Introduced a new camp, Fundamentals of AI, ML, and Python. Kids loved it! 40+ signups!",
  image: "/Website-Photos/AI-ML-Python-25/IMG_7653.jpg",
    tag: "Innovation"
  },
  {
    id: "6",
    title: "CS Education Conference Debut 🎓",
    date: "Spring 2025",
    description: "Continued on with the research and presented a lightning talk at the largest CS education conference in the US, SIGCSE 2025. Made waves!",
    image: "/5.jpeg",
    tag: "Presentation"
  },
  {
    id: "7",
    title: "Python in Middle School 📚",
    date: "Fall 2024",
    description: "We wanted to spread the joy of coding, so we decided to take our next camp to the same school where we had surveyed the students in the year prior. It was a smashing success!",
  image: "/4.jpeg",
    tag: "Impact"
  },
  {
    id: "8",
    title: "Python Summer Camp 🐍",
    date: "Summer 2024",
    description: "In 2024, we expanded from a basement to a full summer camp in a library with 20+ kids! The students learned to create projects, game, and presented to the class!",
  image: "/3.jpeg",
    tag: "New location: Library!"
  },
  {
    id: "9",
    title: "First Research Spotlight 🏆",
    date: "Spring 2024",
    description: "We compiled all the data we had collected and created a research project on peer teaching in coding education. It then recieved awards at major local and regional science fairs!",
  image: "/Website-Photos/Python Summer 25/IMG_7905.jpg",
    tag: "First Exposure"
  },
  {
    id: "10",
    title: "Tech Interest Survey 📊",
    date: "Fall 2023",
    description: "Realizing that the Scratch camp had been a success, we surveyed 430 local, public middle schoolers to understand their interests and needs in tech education.",
  image: "/Website-Photos/AI-ML-Python-25/IMG_7736.jpg",
    tag: "Surveying the Community"
  },
  {
    id: "11",
    title: "First Camp: Scratch! 🎊",
    date: "Summer 2023",
    description: "The first camp was a hit! It began in a basement and grew to 20+ kids. The students built games, worked together, and had a blast!",
  image: "2.jpeg",
    tag: "Beginning"
  },
  {
    id: "12",
    title: "Inspiration Strikes 💥",
    date: "Spring 2023",
    description: "Our founder attended a girls-only STEM conference and got inspired to start her own program. She realized that girls needed a different way of learning coding, one that connected with them. Since she couldn't find one online, she decided to create it!",
  image: "/1.jpeg",
    tag: "Our Start"
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
    value: "64",
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
