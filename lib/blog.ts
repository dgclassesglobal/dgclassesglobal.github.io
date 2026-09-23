export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  topic: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  blocks: Block[];
};

const wp = "https://dgclassesglobal.com/wp-content/uploads/2025/02";

export const posts: Post[] = [
  {
    slug: "how-to-start-the-acca-course-after-the-12th-commerce",
    title: "How to Start the ACCA Course after the 12th Commerce?",
    date: "3 February 2025",
    dateISO: "2025-02-03",
    topic: "ACCA",
    excerpt:
      "Starting the ACCA journey after the 12th Commerce is not as hectic as one would think it to be. If you are interested in an accounting or finance career and want to represent your work globally, then ACCA is definitely the right choice for you.",
    image: `${wp}/howto-e1738621472901.png`,
    imageAlt: "Illustration for the DG Classes article on starting ACCA after 12th Commerce",
    blocks: [
      { type: "p", text: "Starting the ACCA journey after the 12th Commerce is not as hectic as one would think it to be. If you are interested in an accounting or finance career and want to represent your work globally, then ACCA is definitely the right choice for you." },
      { type: "p", text: "Once done with 12th commerce, start your ACCA journey early to get that kickstart in your career." },
      { type: "p", text: "The notes ahead lay out the groundwork published by DG Classes for starting a career in ACCA." },
      { type: "h2", text: "Step-by-step guide on how to start the ACCA course" },
      { type: "p", text: "The ACCA course is a globally recognised certification in accounting, finance, and auditing, and provides candidates with an opportunity to work in 180+ countries. The ACCA structure is flexible, with a competitive field of candidates." },
      { type: "h3", text: "Step 1: Check your eligibility" },
      { type: "p", text: "To get enrolled in ACCA after the 12th, DG Classes’ guide says you need:" },
      { type: "ul", items: ["Completed standard 12th with a minimum of 50% in English, and 65% in mathematics or accounting subjects.", "If you do not meet the above criteria, you can go for the ACCA Foundation in Accountancy (FIA) course and later enrol in the main course."] },
      { type: "h3", text: "Step 2: Register for ACCA" },
      { type: "p", text: "Visit the official ACCA website, create an account, and fill in the registration form." },
      { type: "ul", items: ["Necessary documents: scanned copy of the class 12th marks card, a passport-sized photograph, and identity proof.", "Pay the initial registration fee, described in the article as around INR 8,900. Other ACCA course fees are paid once registration is done and the course has begun."] },
      { type: "h3", text: "Step 3: Understanding the ACCA syllabus" },
      { type: "p", text: "There are 13 ACCA papers, divided across three levels." },
      { type: "ul", items: ["Knowledge level: basic concepts — 3 papers.", "Skill level: advanced concepts — 6 papers.", "Professional level: strategic concepts — 4 papers."] },
      { type: "p", text: "For standard 12th passed-out candidates, the first level, or the knowledge level, is the entry point." },
      { type: "h3", text: "Step 4: How to start studying" },
      { type: "ul", items: ["Self-study: study materials approved by ACCA, and books by publishers such as Kaplan or BPP.", "Coaching institutions: joining an ACCA-approved learning institution for expert guidance."] },
      { type: "h3", text: "Step 5: Plan your exam sittings" },
      { type: "p", text: "The article states that ACCA exams are held four times a year: March, June, September, and December. Exams can be attempted at the candidate’s convenience." },
      { type: "ul", items: ["Exam fees, as published in the article: Knowledge level around 8,600 to 12,000 per paper, and Skill and Professional levels around 12,000 to 14,000 per paper.", "You can apply for exemptions if you are already enrolled in or have completed other degrees such as B.Com or MBA."] },
      { type: "h3", text: "Step 6: Practical experience" },
      { type: "p", text: "There is a need to complete 3 years of practical experience to qualify as an ACCA member. Experience can be gained while studying, in roles such as:" },
      { type: "ul", items: ["Accounting Assistant", "Junior Auditor", "Financial Analyst"] },
    ],
  },
  {
    slug: "how-commerce-will-shape-your-future",
    title: "How Commerce Will Shape Your Future?",
    date: "3 February 2025",
    dateISO: "2025-02-03",
    topic: "Commerce",
    excerpt:
      "In the intricate tapestry of educational choices, commerce emerges as a dynamic and transformative pathway, offering a myriad of opportunities for those navigating their future.",
    image: `${wp}/commerce.png`,
    imageAlt: "Illustration accompanying the DG Classes article on commerce and the future",
    blocks: [
      { type: "p", text: "In the intricate tapestry of educational choices, commerce emerges as a dynamic and transformative pathway, offering a myriad of opportunities for those navigating their future. In this exploration, we delve into the impact of commerce education, and how it opens doors to a world of possibilities." },
      { type: "h2", text: "Commerce course: a gateway to diverse careers" },
      { type: "p", text: "Embarking on a commerce course after completing 12th grade is a strategic choice that serves as a gateway to diverse career paths. The curriculum equips students with a foundation in finance, accounting, business management, and economics — skills that are essential in the corporate world and transferable across industries." },
      { type: "h3", text: "Key components of a commerce course" },
      { type: "p", text: "Financial literacy. Commerce courses foster financial literacy, empowering students with the knowledge to manage personal and organisational finances." },
      { type: "p", text: "Business management skills. From organisational strategy to leadership principles, students gain insights that are used in steering businesses." },
      { type: "p", text: "Understanding economic dynamics. Commerce courses provide an understanding of economic principles, so students can analyse market trends, make informed decisions, and contribute to economic growth." },
      { type: "h2", text: "After 12th commerce: courses named in the article" },
      { type: "ul", items: ["Bachelor of Commerce (B.Com): a foundational course covering a spectrum of commerce subjects, for finance, accounting, or business management.", "Bachelor of Business Administration (BBA): leadership, organisational behaviour, and strategic management.", "Chartered Accountancy (CA): a rigorous path for students with a keen interest in accounting and finance.", "ACCA: a globally recognised qualification for accountancy, finance, and management.", "CMA USA and CMA India: a specialised focus on management accounting.", "Company Secretary (CS): corporate governance and compliance."] },
      { type: "h2", text: "A commerce degree, as the article describes it" },
      { type: "p", text: "The article describes a commerce degree as globally relevant, useful for entrepreneurship, and versatile across finance, marketing, human resources, and other paths." },
      { type: "p", text: "If you envision a future where your skills are not confined to a single industry, the article’s conclusion is that commerce education is the compass guiding you toward that work." },
    ],
  },
  {
    slug: "best-courses-after-12th-commerce-for-students-without-maths",
    title: "Best Courses After 12th Commerce for Students Without Maths",
    date: "3 February 2025",
    dateISO: "2025-02-03",
    topic: "After 12th",
    excerpt:
      "If you’re a Commerce student without Maths, you may be wondering about the scope of options available to you after the 12th. The good news is that there are numerous rewarding courses and career paths that do not require mathematics.",
    image: `${wp}/commerce-subjects-11th-class.png`,
    imageAlt: "Commerce subjects graphic from the DG Classes journal",
    blocks: [
      { type: "p", text: "If you’re a Commerce student without Maths, you may be wondering about the scope of options available to you after the 12th. The good news, as this DG Classes article puts it, is that there are numerous courses and career paths that do not require mathematics. From business administration to law and hotel management to digital marketing, these courses open doors to various industries." },
      { type: "p", text: "The published article lists the following courses. It ends after Bachelor of Management Studies on the current website." },
      { type: "h2", text: "1. Bachelor of Commerce (B.Com) General" },
      { type: "ul", items: ["Overview: a foundational understanding of accounting, finance, business law, and marketing.", "Duration: 3 years.", "Career opportunities named in the article: Accountant, Financial Analyst, HR Assistant, Marketing Executive.", "Why choose it: the article describes the course as versatile, with scope for further specialisation in accounting, finance, or entrepreneurship."] },
      { type: "h2", text: "2. Bachelor of Business Administration (BBA)" },
      { type: "ul", items: ["Overview: principles of business, management, and marketing, for students aiming at management, human resources, or entrepreneurship.", "Duration: 3 years.", "Career opportunities named in the article: Business Development Executive, HR Manager, Marketing Analyst, Project Manager.", "Why choose it: the article says BBA helps build managerial skills and offers a foundation for an MBA."] },
      { type: "h2", text: "3. Bachelor of Management Studies (BMS)" },
      { type: "ul", items: ["Overview: advanced business and management principles, along with practical applications.", "Duration: 3 years.", "Career opportunities named in the article: Operations Manager, Business Analyst, Marketing Manager, Finance Manager.", "Why choose it: the article points to practical exposure through internships and case studies."] },
    ],
  },
  {
    slug: "best-courses-after-12th-commerce-with-high-salary",
    title: "Best Courses after 12th Commerce with High Salary",
    date: "3 February 2025",
    dateISO: "2025-02-03",
    topic: "Careers",
    excerpt:
      "Immediately after the 12th in commerce, the students face a host of career opportunities. Courses like CA and CS are well-known. The article also names investment banking, financial analysis, digital marketing, and data analytics.",
    image: `${wp}/commerce.png`,
    imageAlt: "Commerce career illustration from the DG Classes journal",
    blocks: [
      { type: "p", text: "Immediately after the 12th in commerce, the article says students face a host of career opportunities. Courses like CA and CS are well-known for financial management and corporate governance. The article also points to investment banking and financial analysis, and to specialisations such as digital marketing and data analytics." },
      { type: "h2", text: "1. Bachelor of Commerce (B.Com) with specialisations" },
      { type: "p", text: "B.Com provides a foundation in accounting, finance, economics, and business management. Specialisation in Accounting & Finance, Banking & Insurance, or International Business is described as having better earning potential. Graduates are described as able to pursue accounting, banking, finance, auditing, and related areas." },
      { type: "h2", text: "2. Chartered Accountancy (CA)" },
      { type: "p", text: "The article describes CA as a demanding and highly regarded profession in commerce. Practice areas named: Auditing, Taxation, Financial Consulting, and Corporate Finance. It notes demand in corporate finance, auditing firms, and government agencies." },
      { type: "h2", text: "3. Company Secretary (CS)" },
      { type: "p", text: "A Company Secretary is described as important to the legal and statutory side of a company. Subjects named: Corporate Law, Business Ethics, and Financial Management." },
      { type: "h2", text: "4. Bachelor of Business Administration (BBA)" },
      { type: "p", text: "The article recommends BBA for students who want management, covering business operations, marketing, finance, and human resource management. Prospective jobs named: finance, marketing, and retail." },
      { type: "h2", text: "5. Bachelor of Economics (B.Econ)" },
      { type: "p", text: "B.Econ is described as a route into finance, banking, research, and policy-making, for students who want to understand theories, policies, and practices in economics." },
      { type: "h2", text: "6. Cost and Management Accountancy (CMA)" },
      { type: "p", text: "CMA is described as a specialised course in financial planning, cost control, and management, with demand in corporate finance, consulting, and manufacturing." },
      { type: "h2", text: "7. Bachelor of Laws (LLB)" },
      { type: "p", text: "The article notes demand among commerce students interested in law, and names practice as lawyers, legal advisors, and corporate legal consultants, particularly in corporate law, taxation law, and intellectual property." },
      { type: "h2", text: "8. Bachelor of Business Management (BBM)" },
      { type: "p", text: "BBM is described as similar to BBA, with more emphasis on leadership and management skills across marketing, finance, and human resources, including business development, operations, and strategic planning." },
      { type: "h2", text: "9. Bachelor of Finance and Accounting (BFA)" },
      { type: "p", text: "The published article ends with BFA: an undergraduate course bringing together financial management, general accounting practices, and financial analysis, for positions in corporate finance, investment banking, or financial consulting." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
