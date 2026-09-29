import { Student } from '../types/student';
import { Company } from '../types/company';
import { Drive } from '../types/drive';
import { Application } from '../types/application';
import { Interview } from '../types/interview';
import { Placement } from '../types/placement';
import { Announcement, AppNotification } from '../types/announcement';

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 'std-1',
    studentId: '2023CSE042',
    name: 'Arun Kumar',
    email: 'arun.k@college.edu',
    phone: '+91 98765 43210',
    department: 'CSE',
    cgpa: 8.92,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Shortlisted',
    bio: 'Full-stack developer passionate about distributed cloud systems, React, and Go.',
    address: 'Chennai, Tamil Nadu, India',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Docker', 'PostgreSQL'],
    projects: [
      {
        id: 'proj-1',
        title: 'Distributed Log Aggregator',
        description: 'High-throughput log streaming service handling 50k logs/sec using Kafka and Go.',
        technologies: ['Go', 'Apache Kafka', 'PostgreSQL'],
        link: 'https://github.com/arunkumar/distributed-log'
      },
      {
        id: 'proj-2',
        title: 'Collaborative Code Canvas',
        description: 'Real-time pair-programming whiteboard with WebSockets and CRDTs.',
        technologies: ['Next.js', 'WebSockets', 'Tailwind CSS']
      }
    ],
    certifications: [
      { id: 'cert-1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: 2025 },
      { id: 'cert-2', name: 'Meta Frontend Developer Professional', issuer: 'Coursera', year: 2024 }
    ],
    offersCount: 1,
    highestPackage: '₹8.5 LPA',
    applicationsCount: 4
  },
  {
    id: 'std-2',
    studentId: '2023CSE089',
    name: 'Priya Sundaram',
    email: 'priya.s@college.edu',
    phone: '+91 98451 23678',
    department: 'CSE',
    cgpa: 9.35,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Placed',
    bio: 'Competitive programmer and backend specialist. Ranked top 1% in LeetCode weekly contests.',
    address: 'Coimbatore, Tamil Nadu',
    skills: ['C++', 'Python', 'System Design', 'Kubernetes', 'Redis', 'Spring Boot'],
    projects: [
      {
        id: 'proj-3',
        title: 'Algorithmic Trading Bot',
        description: 'Backtesting engine for market making using stochastic volatility models.',
        technologies: ['Python', 'Pandas', 'FastAPI']
      }
    ],
    certifications: [
      { id: 'cert-3', name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google', year: 2025 }
    ],
    offersCount: 2,
    highestPackage: '₹14.0 LPA',
    applicationsCount: 3
  },
  {
    id: 'std-3',
    studentId: '2023AIML015',
    name: 'Rahul Krishnan',
    email: 'rahul.k@college.edu',
    phone: '+91 97123 45678',
    department: 'AIML',
    cgpa: 8.78,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'In Process',
    bio: 'Deep learning researcher interested in Vision-Language Models and autonomous edge systems.',
    address: 'Bengaluru, Karnataka',
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'LangChain', 'Python', 'FastAPI'],
    projects: [
      {
        id: 'proj-4',
        title: 'Multimodal Radiology Diagnostic Copilot',
        description: 'Fine-tuned vision-transformer model for chest X-ray abnormality segmentation.',
        technologies: ['PyTorch', 'HuggingFace', 'FastAPI']
      }
    ],
    certifications: [
      { id: 'cert-4', name: 'DeepLearning.AI TensorFlow Developer', issuer: 'DeepLearning.AI', year: 2025 }
    ],
    offersCount: 0,
    applicationsCount: 5
  },
  {
    id: 'std-4',
    studentId: '2023IT033',
    name: 'Kavin Raj',
    email: 'kavin.r@college.edu',
    phone: '+91 96234 56789',
    department: 'IT',
    cgpa: 8.45,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Placed',
    bio: 'DevOps enthusiast and cloud infrastructure architect.',
    address: 'Madurai, Tamil Nadu',
    skills: ['Terraform', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'Linux', 'Python'],
    projects: [
      {
        id: 'proj-5',
        title: 'GitOps Multi-Cluster Provisioner',
        description: 'Automated zero-touch Kubernetes cluster provisioning with ArgoCD & Terraform.',
        technologies: ['Terraform', 'ArgoCD', 'AWS EKS']
      }
    ],
    certifications: [
      { id: 'cert-5', name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: 2025 }
    ],
    offersCount: 1,
    highestPackage: '₹9.2 LPA',
    applicationsCount: 3
  },
  {
    id: 'std-5',
    studentId: '2023ECE054',
    name: 'Ananya Sharma',
    email: 'ananya.s@college.edu',
    phone: '+91 95345 67890',
    department: 'ECE',
    cgpa: 7.92,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Seeking',
    bio: 'Embedded software engineer focused on IoT protocols, firmware, and FPGA systems.',
    address: 'Hyderabad, Telangana',
    skills: ['Embedded C', 'Verilog', 'ARM Cortex', 'RTOS', 'IoT', 'MQTT'],
    projects: [
      {
        id: 'proj-6',
        title: 'Smart Agricultural Telemetry Mesh',
        description: 'LoRaWAN based remote soil moisture and environmental monitoring sensor nodes.',
        technologies: ['C++', 'ESP32', 'FreeRTOS']
      }
    ],
    certifications: [
      { id: 'cert-6', name: 'ARM Accredited MCU Engineer', issuer: 'ARM', year: 2024 }
    ],
    offersCount: 0,
    applicationsCount: 4
  },
  {
    id: 'std-6',
    studentId: '2023EEE021',
    name: 'Vikram Mohan',
    email: 'vikram.m@college.edu',
    phone: '+91 94456 78901',
    department: 'EEE',
    cgpa: 7.65,
    graduationYear: 2027,
    backlogs: 1,
    placementStatus: 'Seeking',
    bio: 'Power electronics and electric vehicle powertrain enthusiast.',
    address: 'Kochi, Kerala',
    skills: ['MATLAB/Simulink', 'PCB Design', 'Power Electronics', 'C', 'Battery Management'],
    projects: [
      {
        id: 'proj-7',
        title: 'Active Cell Balancing BMS for Lithium-Ion Packs',
        description: 'Microcontroller controlled bidirectional flyback converter for EV battery packs.',
        technologies: ['MATLAB', 'STM32', 'Altium']
      }
    ],
    certifications: [
      { id: 'cert-7', name: 'EV Powertrain Fundamentals', issuer: 'IIT Madras NPTEL', year: 2024 }
    ],
    offersCount: 0,
    applicationsCount: 2
  },
  {
    id: 'std-7',
    studentId: '2023MECH062',
    name: 'Deepak Varma',
    email: 'deepak.v@college.edu',
    phone: '+91 93567 89012',
    department: 'Mechanical',
    cgpa: 8.15,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Shortlisted',
    bio: 'Computational fluid dynamics and CAD simulation engineer.',
    address: 'Salem, Tamil Nadu',
    skills: ['SolidWorks', 'ANSYS Fluent', 'Python', 'AutoCAD', 'Thermal Analysis'],
    projects: [
      {
        id: 'proj-8',
        title: 'Aerodynamic Drag Optimization of Drone Chassis',
        description: 'Computational mesh modeling to decrease drone body drag coefficient by 18%.',
        technologies: ['ANSYS', 'SolidWorks']
      }
    ],
    certifications: [
      { id: 'cert-8', name: 'Certified SOLIDWORKS Professional (CSWP)', issuer: 'Dassault Systèmes', year: 2024 }
    ],
    offersCount: 0,
    applicationsCount: 3
  },
  {
    id: 'std-8',
    studentId: '2023AIML048',
    name: 'Sneha Patel',
    email: 'sneha.p@college.edu',
    phone: '+91 92678 90123',
    department: 'AIML',
    cgpa: 9.10,
    graduationYear: 2027,
    backlogs: 0,
    placementStatus: 'Placed',
    bio: 'Data scientist and natural language processing specialist.',
    address: 'Ahmedabad, Gujarat',
    skills: ['Python', 'NLP', 'Transformers', 'SQL', 'Tableau', 'Scikit-learn'],
    projects: [
      {
        id: 'proj-9',
        title: 'Enterprise Document Q&A Agent',
        description: 'RAG system powered by vector search across 10,000 internal enterprise PDFs.',
        technologies: ['LangChain', 'ChromaDB', 'Python']
      }
    ],
    certifications: [
      { id: 'cert-9', name: 'Databricks Certified Associate Developer', issuer: 'Databricks', year: 2025 }
    ],
    offersCount: 2,
    highestPackage: '₹12.5 LPA',
    applicationsCount: 3
  }
];

export const INITIAL_COMPANIES: Company[] = [
  {
    id: 'comp-1',
    name: 'Tata Consultancy Services',
    logo: 'TCS',
    industry: 'Information Technology & Consulting',
    website: 'https://www.tcs.com',
    about: 'Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai.',
    headquarters: 'Mumbai, Maharashtra',
    locations: ['Chennai', 'Bengaluru', 'Hyderabad', 'Pune', 'Mumbai'],
    recruiter: {
      name: 'Ramesh Sundar',
      email: 'ramesh.s@tcs.com',
      phone: '+91 98400 11223',
      designation: 'Campus Hiring Lead - South'
    },
    rolesOffered: ['Digital Software Engineer', 'Ninja Systems Engineer', 'Prime R&D Engineer'],
    packageRange: '₹3.6 - ₹9.0 LPA',
    minPackage: 3.6,
    maxPackage: 9.0,
    tier: 'Tier 1',
    totalHired: 112,
    activeDrivesCount: 2,
    rating: 4.5
  },
  {
    id: 'comp-2',
    name: 'Zoho Corporation',
    logo: 'ZOHO',
    industry: 'Enterprise Software & SaaS',
    website: 'https://www.zoho.com',
    about: 'Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools.',
    headquarters: 'Chennai, Tamil Nadu',
    locations: ['Chennai', 'Tenkasi', 'Coimbatore', 'Bengaluru'],
    recruiter: {
      name: 'Divya Bharathi',
      email: 'divya.b@zohocorp.com',
      phone: '+91 98401 22334',
      designation: 'Talent Acquisition Partner'
    },
    rolesOffered: ['Software Developer', 'Product Designer', 'Quality Analyst'],
    packageRange: '₹6.5 - ₹12.0 LPA',
    minPackage: 6.5,
    maxPackage: 12.0,
    tier: 'Dream',
    totalHired: 64,
    activeDrivesCount: 1,
    rating: 4.8
  },
  {
    id: 'comp-3',
    name: 'Infosys',
    logo: 'INFY',
    industry: 'Information Technology Services',
    website: 'https://www.infosys.com',
    about: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
    headquarters: 'Bengaluru, Karnataka',
    locations: ['Bengaluru', 'Mysuru', 'Chennai', 'Hyderabad', 'Pune'],
    recruiter: {
      name: 'Karthik Rao',
      email: 'karthik.r@infosys.com',
      phone: '+91 98402 33445',
      designation: 'Associate Director - University Relations'
    },
    rolesOffered: ['Systems Engineer', 'Specialist Programmer', 'Digital Specialist Engineer'],
    packageRange: '₹4.0 - ₹9.5 LPA',
    minPackage: 4.0,
    maxPackage: 9.5,
    tier: 'Tier 1',
    totalHired: 89,
    activeDrivesCount: 1,
    rating: 4.3
  },
  {
    id: 'comp-4',
    name: 'Accenture',
    logo: 'ACN',
    industry: 'Professional Services & Consulting',
    website: 'https://www.accenture.com',
    about: 'Accenture plc is a Dublin-based multinational professional services company specializing in information technology services and consulting.',
    headquarters: 'Bengaluru, India HQ',
    locations: ['Bengaluru', 'Chennai', 'Gurugram', 'Hyderabad'],
    recruiter: {
      name: 'Meera Nambiar',
      email: 'meera.n@accenture.com',
      phone: '+91 98403 44556',
      designation: 'Campus Recruitment Manager'
    },
    rolesOffered: ['Associate Software Engineer', 'Advanced Application Engineering Analyst'],
    packageRange: '₹4.5 - ₹8.5 LPA',
    minPackage: 4.5,
    maxPackage: 8.5,
    tier: 'Tier 1',
    totalHired: 76,
    activeDrivesCount: 1,
    rating: 4.4
  },
  {
    id: 'comp-5',
    name: 'Deloitte',
    logo: 'DEL',
    industry: 'Financial Advisory & Management Consulting',
    website: 'https://www.deloitte.com',
    about: 'Deloitte is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services.',
    headquarters: 'Hyderabad, India HQ',
    locations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram'],
    recruiter: {
      name: 'Aditya Sen',
      email: 'aditya.s@deloitte.com',
      phone: '+91 98404 55667',
      designation: 'Senior Talent Acquisition Lead'
    },
    rolesOffered: ['Consulting Analyst', 'Cybersecurity Risk Associate', 'Data Engineer'],
    packageRange: '₹8.0 - ₹14.5 LPA',
    minPackage: 8.0,
    maxPackage: 14.5,
    tier: 'Dream',
    totalHired: 38,
    activeDrivesCount: 1,
    rating: 4.7
  },
  {
    id: 'comp-6',
    name: 'Cognizant',
    logo: 'CTS',
    industry: 'Information Technology Services',
    website: 'https://www.cognizant.com',
    about: 'Cognizant Technology Solutions is an American multinational information technology services and consulting company.',
    headquarters: 'Chennai, India HQ',
    locations: ['Chennai', 'Coimbatore', 'Bengaluru', 'Kolkata'],
    recruiter: {
      name: 'Preeti Deshmukh',
      email: 'preeti.d@cognizant.com',
      phone: '+91 98405 66778',
      designation: 'University Hiring Lead'
    },
    rolesOffered: ['Programmer Analyst Trainee', 'GenC Elevate Developer'],
    packageRange: '₹4.2 - ₹8.0 LPA',
    minPackage: 4.2,
    maxPackage: 8.0,
    tier: 'Tier 1',
    totalHired: 58,
    activeDrivesCount: 1,
    rating: 4.2
  }
];

export const INITIAL_DRIVES: Drive[] = [
  {
    id: 'drv-1',
    companyId: 'comp-1',
    companyName: 'Tata Consultancy Services',
    companyLogo: 'TCS',
    role: 'Digital Software Engineer',
    packageLPA: 7.5,
    packageText: '₹7.5 LPA',
    jobType: 'Full-time',
    location: 'Chennai / Bengaluru / Pan India',
    description: 'Looking for aspiring digital software engineers skilled in full-stack, cloud computing, and AI architectures.',
    requirements: ['Minimum 7.0 CGPA with no standing backlogs', 'Strong fundamentals in Data Structures & Algorithms', 'Excellent analytical and communication skills'],
    selectionProcess: ['Online Assessment', 'Coding Round', 'Technical Interview', 'HR Interview'],
    minCgpa: 7.0,
    eligibleDepartments: ['CSE', 'AIML', 'IT', 'ECE'],
    graduationYear: 2027,
    maxBacklogs: 0,
    applicationDeadline: '2026-10-08',
    driveDate: '2026-10-10',
    status: 'Active',
    applicantCount: 284,
    shortlistedCount: 112,
    selectedCount: 42
  },
  {
    id: 'drv-2',
    companyId: 'comp-3',
    companyName: 'Infosys',
    role: 'Systems Engineer Specialist',
    packageLPA: 6.5,
    packageText: '₹6.5 LPA',
    jobType: 'Full-time',
    location: 'Mysuru Campus / Bengaluru',
    description: 'Specialist developer role focused on building next-generation digital cloud platforms and enterprise integrations.',
    requirements: ['Minimum 6.8 CGPA', 'Proficiency in Java, Python, or C++', 'Strong problem-solving capability'],
    selectionProcess: ['Aptitude Test', 'Coding Round', 'Technical Interview', 'HR Interview'],
    minCgpa: 6.8,
    eligibleDepartments: ['CSE', 'AIML', 'IT', 'ECE', 'EEE'],
    graduationYear: 2027,
    maxBacklogs: 1,
    applicationDeadline: '2026-10-12',
    driveDate: '2026-10-14',
    status: 'Active',
    applicantCount: 310,
    shortlistedCount: 95,
    selectedCount: 38
  },
  {
    id: 'drv-3',
    companyId: 'comp-2',
    companyName: 'Zoho Corporation',
    role: 'Software Engineer',
    packageLPA: 8.0,
    packageText: '₹8.0 LPA',
    jobType: 'Full-time',
    location: 'Chennai / Tenkasi',
    description: 'Build enterprise-grade SaaS products used by over 100M users worldwide with complete engineering autonomy.',
    requirements: ['Minimum 7.5 CGPA', 'Deep understanding of data structures, concurrency, and OOP', 'Clean code practices'],
    selectionProcess: ['Aptitude Test', 'Coding Round', 'Technical Interview', 'HR Interview'],
    minCgpa: 7.5,
    eligibleDepartments: ['CSE', 'AIML', 'IT'],
    graduationYear: 2027,
    maxBacklogs: 0,
    applicationDeadline: '2026-10-15',
    driveDate: '2026-10-18',
    status: 'Upcoming',
    applicantCount: 185,
    shortlistedCount: 60,
    selectedCount: 0
  },
  {
    id: 'drv-4',
    companyId: 'comp-4',
    companyName: 'Accenture',
    role: 'Application Engineering Analyst',
    packageLPA: 7.0,
    packageText: '₹7.0 LPA',
    jobType: 'Full-time',
    location: 'Bengaluru / Hyderabad',
    description: 'Analyze enterprise workflows and architect bespoke digital transformation pipelines for Fortune 500 clients.',
    requirements: ['Minimum 6.5 CGPA', 'Strong logical reasoning and adaptability', 'Basic familiarity with cloud or software lifecycles'],
    selectionProcess: ['Online Assessment', 'Technical Interview', 'HR Interview'],
    minCgpa: 6.5,
    eligibleDepartments: ['CSE', 'AIML', 'IT', 'ECE', 'EEE', 'Mechanical'],
    graduationYear: 2027,
    maxBacklogs: 1,
    applicationDeadline: '2026-10-19',
    driveDate: '2026-10-22',
    status: 'Upcoming',
    applicantCount: 420,
    shortlistedCount: 140,
    selectedCount: 0
  },
  {
    id: 'drv-5',
    companyId: 'comp-5',
    companyName: 'Deloitte',
    role: 'Consulting Analyst & Cloud Engineer',
    packageLPA: 11.5,
    packageText: '₹11.5 LPA',
    jobType: 'Full-time',
    location: 'Hyderabad / Bengaluru',
    description: 'Work with cross-functional technology teams advising clients on cloud architecture, risk mitigation, and AI governance.',
    requirements: ['Minimum 8.0 CGPA', 'No active backlogs', 'Superior presentation and technical problem-solving acumen'],
    selectionProcess: ['Aptitude Test', 'Group Discussion', 'Technical Interview', 'HR Interview'],
    minCgpa: 8.0,
    eligibleDepartments: ['CSE', 'AIML', 'IT', 'ECE'],
    graduationYear: 2027,
    maxBacklogs: 0,
    applicationDeadline: '2026-10-25',
    driveDate: '2026-10-28',
    status: 'Upcoming',
    applicantCount: 198,
    shortlistedCount: 45,
    selectedCount: 0
  },
  {
    id: 'drv-6',
    companyId: 'comp-6',
    companyName: 'Cognizant',
    role: 'GenC Elevate Developer',
    packageLPA: 5.5,
    packageText: '₹5.5 LPA',
    jobType: 'Full-time',
    location: 'Chennai / Coimbatore',
    description: 'Core software engineering role focusing on modernization of legacy enterprise software stacks.',
    requirements: ['Minimum 6.5 CGPA', 'Comfortable with Object-Oriented Programming (Java/Python)', 'Good communication skills'],
    selectionProcess: ['Online Assessment', 'Technical Interview', 'HR Interview'],
    minCgpa: 6.5,
    eligibleDepartments: ['CSE', 'AIML', 'IT', 'ECE', 'EEE'],
    graduationYear: 2027,
    maxBacklogs: 1,
    applicationDeadline: '2026-09-15',
    driveDate: '2026-09-20',
    status: 'Completed',
    applicantCount: 360,
    shortlistedCount: 120,
    selectedCount: 52
  }
];

export const INITIAL_APPLICATIONS: Application[] = [
  {
    id: 'app-1',
    studentId: 'std-1',
    studentRollNo: '2023CSE042',
    studentName: 'Arun Kumar',
    studentEmail: 'arun.k@college.edu',
    department: 'CSE',
    cgpa: 8.92,
    driveId: 'drv-1',
    companyName: 'Tata Consultancy Services',
    companyLogo: 'TCS',
    role: 'Digital Software Engineer',
    packageText: '₹7.5 LPA',
    appliedDate: '2026-09-28',
    currentStage: 'Shortlisted',
    stageStatus: 'Scheduled',
    updatedAt: '2026-09-29',
    notes: 'Cleared coding assessment with 100% score.'
  },
  {
    id: 'app-2',
    studentId: 'std-2',
    studentRollNo: '2023CSE089',
    studentName: 'Priya Sundaram',
    studentEmail: 'priya.s@college.edu',
    department: 'CSE',
    cgpa: 9.35,
    driveId: 'drv-3',
    companyName: 'Zoho Corporation',
    companyLogo: 'ZOHO',
    role: 'Software Engineer',
    packageText: '₹8.0 LPA',
    appliedDate: '2026-09-26',
    currentStage: 'Applied',
    stageStatus: 'In Review',
    updatedAt: '2026-09-27'
  },
  {
    id: 'app-3',
    studentId: 'std-3',
    studentRollNo: '2023AIML015',
    studentName: 'Rahul Krishnan',
    studentEmail: 'rahul.k@college.edu',
    department: 'AIML',
    cgpa: 8.78,
    driveId: 'drv-2',
    companyName: 'Infosys',
    companyLogo: 'INFY',
    role: 'Systems Engineer Specialist',
    packageText: '₹6.5 LPA',
    appliedDate: '2026-09-25',
    currentStage: 'Technical',
    stageStatus: 'Scheduled',
    updatedAt: '2026-09-29',
    notes: 'Technical round scheduled on 2026-10-02 at 10:00 AM.'
  },
  {
    id: 'app-4',
    studentId: 'std-4',
    studentRollNo: '2023IT033',
    studentName: 'Kavin Raj',
    studentEmail: 'kavin.r@college.edu',
    department: 'IT',
    cgpa: 8.45,
    driveId: 'drv-4',
    companyName: 'Accenture',
    companyLogo: 'ACN',
    role: 'Application Engineering Analyst',
    packageText: '₹7.0 LPA',
    appliedDate: '2026-09-24',
    currentStage: 'Selected',
    stageStatus: 'Offer Extended',
    updatedAt: '2026-09-28',
    notes: 'Selected with distinction. Offer letter sent.'
  },
  {
    id: 'app-5',
    studentId: 'std-5',
    studentRollNo: '2023ECE054',
    studentName: 'Ananya Sharma',
    studentEmail: 'ananya.s@college.edu',
    department: 'ECE',
    cgpa: 7.92,
    driveId: 'drv-1',
    companyName: 'Tata Consultancy Services',
    companyLogo: 'TCS',
    role: 'Digital Software Engineer',
    packageText: '₹7.5 LPA',
    appliedDate: '2026-09-27',
    currentStage: 'Aptitude',
    stageStatus: 'In Review',
    updatedAt: '2026-09-28'
  },
  {
    id: 'app-6',
    studentId: 'std-6',
    studentRollNo: '2023EEE021',
    studentName: 'Vikram Mohan',
    studentEmail: 'vikram.m@college.edu',
    department: 'EEE',
    cgpa: 7.65,
    driveId: 'drv-2',
    companyName: 'Infosys',
    companyLogo: 'INFY',
    role: 'Systems Engineer Specialist',
    packageText: '₹6.5 LPA',
    appliedDate: '2026-09-26',
    currentStage: 'Applied',
    stageStatus: 'In Review',
    updatedAt: '2026-09-27'
  },
  {
    id: 'app-7',
    studentId: 'std-7',
    studentRollNo: '2023MECH062',
    studentName: 'Deepak Varma',
    studentEmail: 'deepak.v@college.edu',
    department: 'Mechanical',
    cgpa: 8.15,
    driveId: 'drv-4',
    companyName: 'Accenture',
    companyLogo: 'ACN',
    role: 'Application Engineering Analyst',
    packageText: '₹7.0 LPA',
    appliedDate: '2026-09-25',
    currentStage: 'Shortlisted',
    stageStatus: 'Cleared',
    updatedAt: '2026-09-28'
  },
  {
    id: 'app-8',
    studentId: 'std-8',
    studentRollNo: '2023AIML048',
    studentName: 'Sneha Patel',
    studentEmail: 'sneha.p@college.edu',
    department: 'AIML',
    cgpa: 9.10,
    driveId: 'drv-5',
    companyName: 'Deloitte',
    companyLogo: 'DEL',
    role: 'Consulting Analyst & Cloud Engineer',
    packageText: '₹11.5 LPA',
    appliedDate: '2026-09-27',
    currentStage: 'Shortlisted',
    stageStatus: 'Cleared',
    updatedAt: '2026-09-29'
  }
];

export const INITIAL_INTERVIEWS: Interview[] = [
  {
    id: 'int-1',
    applicationId: 'app-1',
    studentId: 'std-1',
    studentName: 'Arun Kumar',
    studentRollNo: '2023CSE042',
    companyName: 'Tata Consultancy Services',
    companyLogo: 'TCS',
    role: 'Digital Software Engineer',
    round: 'Technical Round 1',
    date: '2026-10-02',
    time: '10:30 AM',
    venue: 'Seminar Hall 2 / Tech Lab B',
    interviewerName: 'Dr. S. Ranganathan',
    interviewerDesignation: 'Principal Architect, TCS',
    status: 'Scheduled',
    feedback: 'Pending evaluation'
  },
  {
    id: 'int-2',
    applicationId: 'app-3',
    studentId: 'std-3',
    studentName: 'Rahul Krishnan',
    studentRollNo: '2023AIML015',
    companyName: 'Infosys',
    companyLogo: 'INFY',
    role: 'Systems Engineer Specialist',
    round: 'Technical Round 1',
    date: '2026-10-03',
    time: '02:00 PM',
    venue: 'Placement Office Boardroom A',
    meetingLink: 'https://meet.google.com/abc-defg-hij',
    interviewerName: 'Ms. Keerthi Varma',
    interviewerDesignation: 'Senior Engineering Manager, Infosys',
    status: 'Scheduled'
  },
  {
    id: 'int-3',
    applicationId: 'app-7',
    studentId: 'std-7',
    studentName: 'Deepak Varma',
    studentRollNo: '2023MECH062',
    companyName: 'Accenture',
    companyLogo: 'ACN',
    role: 'Application Engineering Analyst',
    round: 'Technical Round 1',
    date: '2026-10-04',
    time: '11:15 AM',
    venue: 'Virtual Room 4 (MS Teams)',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/xyz',
    interviewerName: 'Vivek Malhotra',
    interviewerDesignation: 'Lead Solutions Architect, Accenture',
    status: 'Scheduled'
  },
  {
    id: 'int-4',
    applicationId: 'app-4',
    studentId: 'std-4',
    studentName: 'Kavin Raj',
    studentRollNo: '2023IT033',
    companyName: 'Accenture',
    companyLogo: 'ACN',
    role: 'Application Engineering Analyst',
    round: 'HR Round',
    date: '2026-09-28',
    time: '03:30 PM',
    venue: 'Conference Room C',
    interviewerName: 'Meera Nambiar',
    interviewerDesignation: 'Campus Recruitment Manager',
    status: 'Completed',
    feedback: 'Exceptional communication and values alignment. Recommended for immediate offer.',
    rating: 5
  },
  {
    id: 'int-5',
    applicationId: 'app-8',
    studentId: 'std-8',
    studentName: 'Sneha Patel',
    studentRollNo: '2023AIML048',
    companyName: 'Deloitte',
    companyLogo: 'DEL',
    role: 'Consulting Analyst & Cloud Engineer',
    round: 'Coding Assessment',
    date: '2026-09-30',
    time: '09:00 AM',
    venue: 'Online Assessment Portal',
    interviewerName: 'Aditya Sen',
    interviewerDesignation: 'Senior Talent Acquisition Lead',
    status: 'Scheduled'
  }
];

export const INITIAL_PLACEMENTS: Placement[] = [
  {
    id: 'plc-1',
    studentId: 'std-2',
    studentRollNo: '2023CSE089',
    studentName: 'Priya Sundaram',
    department: 'CSE',
    cgpa: 9.35,
    companyName: 'Zoho Corporation',
    companyLogo: 'ZOHO',
    role: 'Software Developer',
    packageLPA: 12.0,
    packageText: '₹12.0 LPA',
    offerDate: '2026-09-18',
    joiningDate: '2027-07-01',
    location: 'Chennai',
    offerStatus: 'Accepted',
    tier: 'Dream'
  },
  {
    id: 'plc-2',
    studentId: 'std-4',
    studentRollNo: '2023IT033',
    studentName: 'Kavin Raj',
    department: 'IT',
    cgpa: 8.45,
    companyName: 'Accenture',
    companyLogo: 'ACN',
    role: 'Application Engineering Analyst',
    packageLPA: 7.0,
    packageText: '₹7.0 LPA',
    offerDate: '2026-09-28',
    joiningDate: '2027-07-15',
    location: 'Bengaluru',
    offerStatus: 'Accepted',
    tier: 'Tier 1'
  },
  {
    id: 'plc-3',
    studentId: 'std-8',
    studentRollNo: '2023AIML048',
    studentName: 'Sneha Patel',
    department: 'AIML',
    cgpa: 9.10,
    companyName: 'Cognizant',
    companyLogo: 'CTS',
    role: 'GenC Elevate Developer',
    packageLPA: 5.5,
    packageText: '₹5.5 LPA',
    offerDate: '2026-09-22',
    joiningDate: '2027-06-15',
    location: 'Chennai',
    offerStatus: 'Accepted',
    tier: 'Tier 1'
  },
  {
    id: 'plc-4',
    studentId: 'std-1',
    studentRollNo: '2023CSE042',
    studentName: 'Arun Kumar',
    department: 'CSE',
    cgpa: 8.92,
    companyName: 'Cognizant',
    companyLogo: 'CTS',
    role: 'GenC Elevate Developer',
    packageLPA: 5.5,
    packageText: '₹5.5 LPA',
    offerDate: '2026-09-22',
    joiningDate: '2027-06-15',
    location: 'Chennai',
    offerStatus: 'Accepted',
    tier: 'Tier 1'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Tata Consultancy Services (TCS) Digital Drive Announced',
    category: 'Placement Drive',
    priority: 'High',
    content: 'TCS Digital campus recruitment drive has been officially opened for final year B.Tech students (2027 batch). The deadline to apply on the portal is October 08, 2026.',
    publishedDate: '2026-09-28',
    author: 'Dr. M. Krishnamoorthy',
    authorRole: 'Head of Placement & Corporate Relations',
    isPublished: true,
    targetAudience: 'All Final Year B.Tech (CSE, AIML, IT, ECE)',
    attachmentName: 'TCS_Digital_Eligibility_Matrix_2027.pdf'
  },
  {
    id: 'ann-2',
    title: 'Interview Schedule Published for Accenture Phase-1',
    category: 'Interview',
    priority: 'Urgent',
    content: 'All shortlisted students for Accenture technical interviews are requested to report to Seminar Hall 2 by 9:00 AM sharp in formal attire with 3 hard copies of their resumes.',
    publishedDate: '2026-09-27',
    author: 'Prof. Anitha Raman',
    authorRole: 'Placement Coordinator',
    isPublished: true,
    targetAudience: 'Accenture Shortlisted Candidates',
    attachmentName: 'Accenture_Batch1_TimeSlots.pdf'
  },
  {
    id: 'ann-3',
    title: 'Application Deadline Reminder: Infosys Specialist Drive',
    category: 'Deadline',
    priority: 'Medium',
    content: 'Gentle reminder that registrations for Infosys Systems Engineer Specialist role will close on October 12, 2026 at 11:59 PM. Late submissions cannot be accommodated.',
    publishedDate: '2026-09-26',
    author: 'Placement Cell Secretariat',
    authorRole: 'Admin Desk',
    isPublished: true,
    targetAudience: 'Eligible Departments (CGPA >= 6.8)'
  },
  {
    id: 'ann-4',
    title: 'Placement Results: Cognizant GenC Elevate Selections',
    category: 'Result',
    priority: 'High',
    content: 'Heartiest congratulations to the 52 students selected for Cognizant GenC Elevate roles! Offer letters will be disbursed during the convocation hall ceremony.',
    publishedDate: '2026-09-23',
    author: 'Dr. M. Krishnamoorthy',
    authorRole: 'Head of Placement',
    isPublished: true,
    targetAudience: 'Campus-wide'
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'New Drive: TCS Digital 2027',
    message: 'TCS has announced recruitment for Digital Software Engineer (₹7.5 LPA). Apply before Oct 08.',
    timestamp: '10 mins ago',
    read: false,
    category: 'drive',
    link: '/admin/drives/drv-1'
  },
  {
    id: 'notif-2',
    title: 'Interview Scheduled',
    message: 'Technical Round 1 for Arun Kumar with TCS is scheduled on Oct 02, 10:30 AM.',
    timestamp: '1 hour ago',
    read: false,
    category: 'interview',
    link: '/admin/interviews/int-1'
  },
  {
    id: 'notif-3',
    title: 'Offer Accepted: Kavin Raj',
    message: 'Kavin Raj has accepted the offer of ₹7.0 LPA from Accenture.',
    timestamp: '3 hours ago',
    read: true,
    category: 'offer',
    link: '/admin/placements/plc-2'
  },
  {
    id: 'notif-4',
    title: 'Application Deadline Approaching',
    message: 'Infosys Specialist drive closes in 3 days. 310 applications received.',
    timestamp: '1 day ago',
    read: true,
    category: 'deadline',
    link: '/admin/drives/drv-2'
  },
  {
    id: 'notif-5',
    title: 'Cognizant Results Published',
    message: '52 students successfully placed in Cognizant GenC Elevate.',
    timestamp: '2 days ago',
    read: true,
    category: 'announcement',
    link: '/admin/announcements'
  }
];

// Dashboard Chart & KPI Mock Data
export const MONTHLY_PLACEMENT_TREND = [
  { month: 'Jan', placed: 24, offers: 32 },
  { month: 'Feb', placed: 45, offers: 58 },
  { month: 'Mar', placed: 78, offers: 96 },
  { month: 'Apr', placed: 120, offers: 145 },
  { month: 'May', placed: 168, offers: 198 },
  { month: 'Jun', placed: 215, offers: 254 },
  { month: 'Jul', placed: 260, offers: 310 },
  { month: 'Aug', placed: 295, offers: 355 },
  { month: 'Sep', placed: 324, offers: 390 },
  { month: 'Oct', placed: 342, offers: 417 }
];

export const DEPARTMENT_PERFORMANCE_DATA = [
  { department: 'CSE', percentage: 91, totalStudents: 280, placedStudents: 255, color: '#635BFF' },
  { department: 'AIML', percentage: 87, totalStudents: 140, placedStudents: 122, color: '#4D9AF5' },
  { department: 'IT', percentage: 78, totalStudents: 180, placedStudents: 140, color: '#32C98B' },
  { department: 'ECE', percentage: 71, totalStudents: 210, placedStudents: 149, color: '#FFA94D' },
  { department: 'EEE', percentage: 63, totalStudents: 160, placedStudents: 101, color: '#E86FA8' },
  { department: 'Mechanical', percentage: 58, totalStudents: 150, placedStudents: 87, color: '#F5C451' }
];

export const PACKAGE_DISTRIBUTION_DATA = [
  { range: 'Below ₹5 LPA', count: 78, percentage: 22.8, color: '#94A3B8' },
  { range: '₹5–10 LPA', count: 182, percentage: 53.2, color: '#4D9AF5' },
  { range: '₹10–15 LPA', count: 64, percentage: 18.7, color: '#635BFF' },
  { range: 'Above ₹15 LPA', count: 18, percentage: 5.3, color: '#32C98B' }
];

export const PLACEMENT_STATUS_BREAKDOWN = {
  overallPlacementRate: 78.4,
  placed: 342,
  interview: 126,
  applications: 842,
  pending: 215
};

export const RECRUITMENT_SUMMARY = {
  applications: 1842,
  shortlisted: 526,
  interviews: 426,
  offers: 417
};

export const COMPANY_HIRING_DATA = [
  { company: 'TCS', hired: 112, avgPackage: 7.2 },
  { company: 'Infosys', hired: 89, avgPackage: 6.4 },
  { company: 'Accenture', hired: 76, avgPackage: 6.8 },
  { company: 'Zoho', hired: 64, avgPackage: 8.5 },
  { company: 'Cognizant', hired: 58, avgPackage: 5.5 },
  { company: 'Deloitte', hired: 38, avgPackage: 11.2 }
];

export const APPLICATION_FUNNEL_DATA = [
  { stage: 'Applied', count: 1842, fill: '#4D9AF5' },
  { stage: 'Shortlisted', count: 1045, fill: '#635BFF' },
  { stage: 'Aptitude Test', count: 780, fill: '#7C6FF2' },
  { stage: 'Technical Round', count: 526, fill: '#FFA94D' },
  { stage: 'HR Interview', count: 426, fill: '#EC78AF' },
  { stage: 'Offers Extended', count: 417, fill: '#32C98B' }
];
