export type FaqItem = { question: string; answer: string };

export const sharedFaqs: FaqItem[] = [
  {
    question: "Are classes online, offline, or both?",
    answer:
      "Both. DG Classes teaches online and offline. Online classes are live interactive sessions. Offline centres are in Sharjah and Dubai, with a presence that began in Mumbai and Rajasthan and now reaches Oman and other parts of the Middle East.",
  },
  {
    question: "Who leads the teaching?",
    answer:
      "The institute is led by Sir Divesh Gamnani, M.Com (Accounting), M.Com (Business Administration), M.B.A., B.Ed., CA-A.T.C. Faculty work with him across commerce subjects.",
  },
  {
    question: "How often are assessments?",
    answer:
      "Published course pages list 6–8 hours a week and a mock exam once a week, along with study material and doubt-clearing.",
  },
  {
    question: "Where do I enquire or book a demo class?",
    answer:
      "Use the enquiry form, WhatsApp on +968-7907-7656, or call +971-56988-5170, +968-7907-7656, or +91-77378-880-110. Email dgclassesglobal@gmail.com.",
  },
];

export function courseFaqs(name: string): FaqItem[] {
  return [
    {
      question: `Who is ${name} for?`,
      answer: `The published ${name} page describes the students it is meant for, the weekly time, and the hybrid format. Exact batch timing and fees are confirmed by the institute when you enquire — they are not listed as fixed public prices on the current website.`,
    },
    ...sharedFaqs.slice(0, 3),
  ];
}
