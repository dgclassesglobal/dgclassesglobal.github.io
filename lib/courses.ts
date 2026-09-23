import { media } from "./site";

export type CourseCategory = "School" | "Undergraduate" | "Postgraduate" | "Professional" | "British & IB";

export type Course = {
  slug: string;
  name: string;
  shortName: string;
  category: CourseCategory;
  summary: string;
  overview: string;
  audience: string[];
  learns: string[];
  subjects: { title: string; detail: string }[];
  meta: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

const sharedProgramme = [
  { label: "Curriculum", value: "Any curriculum" },
  { label: "Weekly time", value: "6–8 hours" },
  { label: "Mock exam", value: "Once a week" },
];

const sharedLearns = [
  "Expert faculty who bring practical insight into the subject.",
  "Study material written to cover the syllabus with clarity.",
  "Interactive online and offline classes.",
  "Weekly tests and mock exams to track progress.",
  "Focused mentorship for individual academic needs.",
];

export const courseCategories: CourseCategory[] = [
  "School",
  "Undergraduate",
  "Postgraduate",
  "Professional",
  "British & IB",
];

export const courses: Course[] = [
  {
    slug: "grade-11-commerce",
    name: "Grade 11 Commerce",
    shortName: "Grade 11",
    category: "School",
    summary:
      "Board-exam preparation that builds a strong foundation in the core commerce subjects.",
    overview:
      "Our programmes provide thorough preparation for board exams, focusing on a strong foundation in the core subjects essential for commerce students. With expert faculty, detailed study material, and regular practice sessions, students gain the confidence and knowledge to perform well.",
    audience: ["Grade 11 commerce students", "Students beginning Accountancy, Business Studies, Economics, and Mathematics"],
    learns: [
      "Fundamentals of financial recording, analysis, and reporting.",
      "Principles and operations of business, with decision-making practice.",
      "Micro and macroeconomics, and how economies function.",
      "Problem-solving and quantitative skills used in later professional courses.",
    ],
    subjects: [
      { title: "Accountancy", detail: "Learn the fundamentals of financial recording, analysis, and reporting to build a strong base for future commerce studies." },
      { title: "Business Studies", detail: "Understand the principles and operations of businesses, developing critical thinking and decision-making skills." },
      { title: "Economics", detail: "Explore micro and macroeconomics, with insight into how economies function." },
      { title: "Mathematics", detail: "Strengthen problem-solving and quantitative skills that are essential for commerce and professional courses." },
    ],
    meta: [{ label: "Grade", value: "11th" }, ...sharedProgramme],
    image: media.classroom,
    imageAlt: "DG Classes students in a classroom session",
  },
  {
    slug: "grade-12-commerce",
    name: "Grade 12 Commerce",
    shortName: "Grade 12",
    category: "School",
    summary: "Structured Grade 12 commerce coaching for board exams and the step into professional study.",
    overview:
      "Grade 12 commerce coaching at DG Classes prepares students for board exams while keeping the core subjects clear and usable. The same emphasis on faculty, study material, and regular practice runs through the year.",
    audience: ["Grade 12 commerce students", "Students preparing for board exams and professional pathways such as CA, CS, and BBA"],
    learns: [
      "Full syllabus coverage in Accountancy, Business Studies, Economics, and Mathematics.",
      "Board-exam practice through regular assessments and mock exams.",
      "Conceptual clarity that carries into undergraduate and professional courses.",
    ],
    subjects: [
      { title: "Accountancy", detail: "Financial recording, analysis, and reporting, taught toward board-exam confidence." },
      { title: "Business Studies", detail: "Business principles, operations, and decision-making." },
      { title: "Economics", detail: "Micro and macroeconomic concepts and how economies function." },
      { title: "Mathematics", detail: "Quantitative problem-solving used in commerce and professional courses." },
    ],
    meta: [{ label: "Grade", value: "12th" }, ...sharedProgramme],
    image: media.seminar,
    imageAlt: "DG Classes seminar with students",
  },
  {
    slug: "bcom",
    name: "B.Com",
    shortName: "B.Com",
    category: "Undergraduate",
    summary: "A foundation in the key subjects required for commerce and business.",
    overview:
      "For students aspiring to pursue a career in commerce, the B.Com programme offers a comprehensive learning experience, designed to lay a strong foundation in the key subjects required for success in commerce and business.",
    audience: ["Graduation-level commerce students", "Students building toward accounting, finance, or further professional study"],
    learns: sharedLearns,
    subjects: [
      { title: "Commerce foundation", detail: "Key undergraduate commerce subjects, taught with syllabus coverage and regular assessment." },
      { title: "Mentorship", detail: "Personalized guidance to address each student’s needs and keep progress on track." },
    ],
    meta: [{ label: "Level", value: "Graduation" }, ...sharedProgramme],
    image: media.sessionA,
    imageAlt: "DG Classes learning session",
  },
  {
    slug: "bba",
    name: "BBA",
    shortName: "BBA",
    category: "Undergraduate",
    summary: "A foundation in business administration and leadership.",
    overview:
      "For students aspiring to a career in business and management, the BBA programme is designed to lay a strong foundation in the key subjects required for business administration and leadership.",
    audience: ["Graduation-level students", "Students aiming for management, business, or a later MBA"],
    learns: sharedLearns,
    subjects: [
      { title: "Business administration", detail: "Core BBA subjects taught through interactive classes and curated study material." },
      { title: "Leadership foundations", detail: "Practical insight from faculty, with weekly tests and mock exams." },
    ],
    meta: [{ label: "Level", value: "Graduation" }, ...sharedProgramme],
    image: media.sessionB,
    imageAlt: "Students at a DG Classes session",
  },
  {
    slug: "bca",
    name: "BCA",
    shortName: "BCA",
    category: "Undergraduate",
    summary: "A foundation in computer applications and information technology.",
    overview:
      "For students aspiring to a career in computer applications and technology, the BCA programme is designed to lay a strong foundation in the key subjects required for computer applications and IT.",
    audience: ["Graduation-level students", "Students moving into computer applications and IT"],
    learns: sharedLearns,
    subjects: [
      { title: "Computer applications", detail: "Undergraduate BCA subjects covered with study material, interactive classes, and regular assessment." },
    ],
    meta: [{ label: "Level", value: "Graduation" }, ...sharedProgramme],
    image: media.sessionC,
    imageAlt: "DG Classes students during class",
  },
  {
    slug: "mba",
    name: "MBA",
    shortName: "MBA",
    category: "Postgraduate",
    summary: "Advanced study in business administration and leadership.",
    overview:
      "For students aspiring to a career in business and management, the MBA programme is designed to provide advanced knowledge and skills required for business administration and leadership.",
    audience: ["Postgraduate students", "Graduates preparing for management and leadership roles"],
    learns: sharedLearns,
    subjects: [
      { title: "Advanced management", detail: "Postgraduate business administration subjects, with mentorship and weekly assessment." },
    ],
    meta: [{ label: "Level", value: "Postgraduation" }, ...sharedProgramme],
    image: media.sessionD,
    imageAlt: "A DG Classes class in session",
  },
  {
    slug: "mcom",
    name: "M.Com",
    shortName: "M.Com",
    category: "Postgraduate",
    summary: "Advanced study in commerce, accounting, and business management.",
    overview:
      "For students aspiring to a career in commerce and finance, the M.Com programme is designed to provide advanced knowledge and skills in commerce, accounting, and business management.",
    audience: ["Postgraduate commerce students", "Graduates deepening accounting and business management"],
    learns: sharedLearns,
    subjects: [
      { title: "Advanced commerce", detail: "Postgraduate commerce, accounting, and business management, taught with curated material and mock exams." },
    ],
    meta: [{ label: "Level", value: "Postgraduation" }, ...sharedProgramme],
    image: media.sessionE,
    imageAlt: "DG Classes students gathered for a session",
  },
  {
    slug: "acca",
    name: "ACCA",
    shortName: "ACCA",
    category: "Professional",
    summary: "Structured guidance for the globally recognised ACCA qualification.",
    overview:
      "DG Classes offers guidance for students aspiring to earn the ACCA qualification, with a structured approach to each exam level. ACCA is regarded by employers worldwide and opens work in accounting, finance, and business management.",
    audience: ["Grade 12 students", "Diploma holders", "Graduates"],
    learns: [
      "A structured path through the ACCA exam levels.",
      "Knowledge, Skill, and Professional levels, as set out in DG Classes’ ACCA guidance.",
      "Study support alongside the option of an ACCA-approved learning route.",
    ],
    subjects: [
      { title: "Knowledge level", detail: "The entry point described in DG Classes’ ACCA guide for students starting after Grade 12." },
      { title: "Skill level", detail: "Advanced papers within the ACCA structure." },
      { title: "Professional level", detail: "Strategic papers on the route to ACCA membership." },
    ],
    meta: [
      { label: "Who can join", value: "Grade 12, diploma, graduates" },
      ...sharedProgramme,
    ],
    image: media.slideHall,
    imageAlt: "DG Classes hall session",
  },
  {
    slug: "ca",
    name: "CA",
    shortName: "CA",
    category: "Professional",
    summary: "Coaching for the Chartered Accountancy journey, including Foundation, Intermediate, and Final.",
    overview:
      "The CA coaching programme supports students at each stage of Chartered Accountancy. Foundation coaching lays the base for the CA Foundation exams. Intermediate (IPCC) and Final coaching focuses on foundational knowledge and advanced expertise for exams and later work in accounting and finance.",
    audience: ["Grade 12 students and above for Foundation", "Students preparing for Intermediate (IPCC) and Final"],
    learns: [
      "Coverage of Accounting, Auditing, Taxation, Costing, and Financial Management at Intermediate and Final.",
      "Faculty who offer practical insight and real-world application.",
      "Notes, examples, and diagrams, plus mock exams and practice papers.",
    ],
    subjects: [
      { title: "CA Foundation", detail: "A foundation in the key subjects required for the CA Foundation exams, for students who have completed Grade 12 or higher." },
      { title: "Intermediate and Final", detail: "Accounting, Auditing, Taxation, Costing, and Financial Management." },
    ],
    meta: [
      { label: "Foundation entry", value: "Grade 12 or higher" },
      ...sharedProgramme,
    ],
    image: media.slideClass,
    imageAlt: "DG Classes classroom",
  },
  {
    slug: "cs",
    name: "CS",
    shortName: "CS",
    category: "Professional",
    summary: "Company Secretary coaching across Foundation, Executive, and Professional.",
    overview:
      "DG Classes offers study plans and guidance for the Company Secretary programme, covering Foundation, Executive, and Professional. Training is aimed at corporate laws, governance, compliance, and management practices. The CS Foundation programme is for students who have completed Grade 12 or higher and want a base for the CS Foundation exams.",
    audience: ["Grade 12 students and above", "Students preparing for CS Foundation, Executive, or Professional"],
    learns: [
      "Foundation, Executive, and Professional levels.",
      "Corporate laws, governance, compliance, and management practices.",
      "Study material, interactive classes, weekly tests, and mock exams.",
    ],
    subjects: [
      { title: "CS Foundation", detail: "A foundation in the key subjects required for the CS Foundation exams." },
      { title: "Executive and Professional", detail: "Corporate laws, governance, compliance, and management practices across the later levels." },
    ],
    meta: [
      { label: "Foundation entry", value: "Grade 12 or higher" },
      ...sharedProgramme,
    ],
    image: media.slideGroup,
    imageAlt: "DG Classes group session",
  },
  {
    slug: "igcse",
    name: "IGCSE",
    shortName: "IGCSE",
    category: "British & IB",
    summary: "International General Certificate of Secondary Education coaching.",
    overview:
      "The IGCSE programme is designed to provide knowledge and skills across a wide range of subjects, preparing students for higher education and later careers. The live site titles this pathway International Secondary Education.",
    audience: ["Students preparing for IGCSE"],
    learns: sharedLearns,
    subjects: [
      { title: "IGCSE subjects", detail: "Syllabus coverage with interactive classes, study material, and weekly assessment. Subject combinations are confirmed at enquiry." },
    ],
    meta: [{ label: "Pathway", value: "International secondary" }, ...sharedProgramme],
    image: media.sessionF,
    imageAlt: "DG Classes students in a learning session",
  },
  {
    slug: "as-level",
    name: "AS Level",
    shortName: "AS Level",
    category: "British & IB",
    summary: "Advanced Subsidiary Level coaching in specialised subjects.",
    overview:
      "The Advanced Subsidiary (AS) Level programme is designed to provide in-depth knowledge in specialised subjects, preparing students for Advanced Level study, higher education, and later careers.",
    audience: ["Students preparing for AS Level"],
    learns: sharedLearns,
    subjects: [
      { title: "Specialised AS subjects", detail: "Subject choices are confirmed with the faculty at enquiry. The published programme emphasises syllabus coverage, mock exams, and mentorship." },
    ],
    meta: [{ label: "Pathway", value: "Advanced Subsidiary" }, ...sharedProgramme],
    image: media.fh,
    imageAlt: "DG Classes classroom photograph",
  },
  {
    slug: "a-level",
    name: "A Level",
    shortName: "A Level",
    category: "British & IB",
    summary: "Advanced Level coaching for higher education and later careers.",
    overview:
      "The A-Level programme is designed to provide in-depth knowledge and skills in specialised subjects, preparing students for success in higher education and future careers.",
    audience: ["Students preparing for A Level"],
    learns: sharedLearns,
    subjects: [
      { title: "Specialised A Level subjects", detail: "Subject choices are confirmed with the faculty. The published programme includes study material, interactive classes, and weekly mock exams." },
    ],
    meta: [{ label: "Pathway", value: "Advanced Level" }, ...sharedProgramme],
    image: media.seminar,
    imageAlt: "DG Classes seminar",
  },
  {
    slug: "ib-courses",
    name: "IB Courses",
    shortName: "IB",
    category: "British & IB",
    summary: "International Baccalaureate coaching, including IB Business.",
    overview:
      "The IB programme is designed to provide knowledge and skills across a wide range of subjects, preparing students for higher education and later careers. Students have also studied IB Business with Sir Divesh Gamnani.",
    audience: ["IB students", "Students who need structured support in IB subjects, including Business Management"],
    learns: sharedLearns,
    subjects: [
      { title: "IB subjects", detail: "Syllabus support with interactive classes and mentorship. IB Business is part of the teaching already reflected in student testimonials." },
    ],
    meta: [{ label: "Pathway", value: "International Baccalaureate" }, ...sharedProgramme],
    image: media.classroom,
    imageAlt: "DG Classes students around a classroom table",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export const courseOptions = courses.map((course) => course.name);
