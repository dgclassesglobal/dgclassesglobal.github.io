const wp = "https://dgclassesglobal.com/wp-content/uploads";

export type Performer = {
  name: string;
  rank: string;
  batch: string;
  grade: string;
  image: string;
};

export const starBatches: { id: string; title: string; note?: string; performers: Performer[] }[] = [
  {
    id: "march-2025-grade-12",
    title: "March 2025 · Grade 12",
    performers: [
      { name: "Asim Raza", rank: "1st Rank", batch: "March 2025", grade: "Grade 12", image: `${wp}/2025/04/Asim-Raza.jpg` },
      { name: "Joyel Abhilash John", rank: "2nd Rank", batch: "March 2025", grade: "Grade 12", image: `${wp}/2025/04/Joyel-Abhilash.jpg` },
      { name: "Aqib Solanki", rank: "3rd Rank", batch: "March 2025", grade: "Grade 12", image: `${wp}/2025/04/Aqib-Solanki-e1744533371498.jpg` },
    ],
  },
  {
    id: "february-2025-grade-12",
    title: "February 2025 · Grade 12",
    performers: [
      { name: "Daksh Rustagi", rank: "1st Rank", batch: "February 2025", grade: "Grade 12", image: `${wp}/2025/02/WhatsApp-Image-2025-02-04-at-21.10.44-1-1.jpeg` },
      { name: "Mannas Vatrana", rank: "2nd Rank", batch: "February 2025", grade: "Grade 12", image: `${wp}/2025/02/WhatsApp-Image-2025-02-04-at-21.13.59-1.jpeg` },
      { name: "Kevin Joe Antro", rank: "3rd Rank", batch: "February 2025", grade: "Grade 12", image: `${wp}/2025/02/WhatsApp-Image-2025-02-04-at-21.14.39-1-e1738821430924.jpeg` },
    ],
  },
  {
    id: "february-2025-grade-11",
    title: "February 2025 · Grade 11",
    performers: [
      { name: "Ayush Baleri", rank: "1st Rank", batch: "February 2025", grade: "Grade 11", image: `${wp}/2025/02/ert-e1738695442198.jpeg` },
      { name: "Shubham Mohnot", rank: "2nd Rank", batch: "February 2025", grade: "Grade 11", image: `${wp}/2025/02/ert2.jpeg` },
      { name: "Pranay Premjeet", rank: "3rd Rank", batch: "February 2025", grade: "Grade 11", image: `${wp}/2025/01/B339814B-0ECB-4A21-A074-77E07A5A9F07-Pranay-Premjeet.png` },
    ],
  },
  {
    id: "january-2025-grade-11",
    title: "January 2025 · Grade 11",
    performers: [
      { name: "Ayush Baleri", rank: "1st Rank", batch: "January 2025", grade: "Grade 11", image: `${wp}/2025/02/ert-e1738695442198.jpeg` },
      { name: "Shubham Mohnot", rank: "2nd Rank", batch: "January 2025", grade: "Grade 11", image: `${wp}/2025/02/ert2.jpeg` },
      { name: "Aasim Raja", rank: "3rd Rank", batch: "January 2025", grade: "Grade 11", image: `${wp}/2025/01/IMG_20240802_183311-Aasim-raza-Sunasara.jpg` },
    ],
  },
];

export const topAchievers = [
  { src: `${wp}/2025/06/WhatsApp-Image-2025-06-16-at-23.54.51-1.jpeg`, alt: "Commerce top achiever photograph from DG Classes" },
  { src: `${wp}/2025/06/WhatsApp-Image-2025-06-16-at-23.54.52.jpeg`, alt: "Commerce top achiever photograph from DG Classes" },
  { src: `${wp}/2025/06/WhatsApp-Image-2025-06-16-at-23.54.52-1.jpeg`, alt: "Commerce top achiever photograph from DG Classes" },
  { src: `${wp}/2025/06/WhatsApp-Image-2025-06-16-at-23.54.52-2.jpeg`, alt: "Commerce top achiever photograph from DG Classes" },
  { src: `${wp}/2025/06/WhatsApp-Image-2025-06-16-at-23.54.51.jpeg`, alt: "Commerce top achiever photograph from DG Classes" },
];

export const campusMoments = [
  { src: `${wp}/2025/01/IMG_20180126_235427_630.jpg`, alt: "DG Classes achievement board photograph" },
  { src: `${wp}/2025/01/IMG_20180126_234222_396-2.jpg`, alt: "DG Classes student achievement photograph" },
  { src: `${wp}/2025/01/fh-scaled.jpeg`, alt: "DG Classes classroom with students and faculty" },
  { src: `${wp}/2025/01/seminar.jpeg`, alt: "DG Classes seminar" },
  { src: `${wp}/slider4/DSC00829.jpeg`, alt: "DG Classes students in class" },
  { src: `${wp}/slider4/20190602_173409.jpeg`, alt: "DG Classes group photograph" },
];
