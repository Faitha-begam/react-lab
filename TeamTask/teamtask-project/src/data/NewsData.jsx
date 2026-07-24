import vijay from "../assets/vijay.jpg";
import protest from "../assets/protest.jpg";
import iit from "../assets/iit.jpg";
import protestDetail from "../assets/protestBanner.jpg";
import vijaydetail from "../assets/vijaydetail.jpg";
import isro from '../assets/isrobanner.jpg'
import third from '../assets/thirddetail.jpg'

const NewsData = [
  {
    id:1,
    title:"Jana Nayagan Release Creates Massive Buzz",
    detailImage:vijaydetail,
    image:vijay,
    
    category:"Entertainment",
    date:"Today",

    description:
      "Jana Nayagan movie creates huge expectations among fans.",

    content:
    `
    The upcoming Tamil movie Jana Nayagan has created massive excitement among 
    cinema audiences across Tamil Nadu. The announcement of the film generated 
    significant attention on social media platforms, with fans eagerly waiting 
    for every update related to the movie.

    The movie features a popular star cast and is expected to bring a fresh 
    experience to Tamil cinema lovers. From the first announcement, the film 
    has attracted discussions about its storyline, performances, music, and 
    technical excellence.

    The production team has revealed that special efforts have been taken to 
    provide a high-quality cinematic experience. The makers are focusing on 
    advanced production techniques, impressive visuals, and strong storytelling 
    to connect with audiences.

    Fans have already started celebrating the upcoming release through social 
    media trends and fan events. The movie is expected to create a strong 
    impact at the box office after its theatrical release.

    Industry experts believe that Jana Nayagan could become one of the most 
    talked-about Tamil movies of the year because of its popularity and 
    audience expectations.
    `
  },


  {
    id:2,
    title:"Anti-NEET Protests Continue",
    image:protest,
     detailImage:protestDetail,
    category:"Education",
    date:"Today",

    description:
      "Students continue protests demanding changes in NEET policies.",

    content:
    `
    Students across Tamil Nadu have continued their protests regarding the NEET 
    examination system, raising concerns about the challenges faced by medical 
    aspirants.

    Student organizations and educational groups have highlighted issues 
    related to equal opportunities, financial difficulties, and accessibility 
    of coaching facilities. Many students believe that the examination system 
    creates additional pressure, especially for students from rural areas.

    Several discussions have taken place among students, educators, and 
    government representatives regarding possible solutions. Educational 
    experts have suggested improving support systems and providing better 
    resources for students preparing for competitive examinations.

    The protests have gained attention across the state, with many students 
    requesting policies that ensure fairness and equal opportunities for all 
    aspiring medical students.

    Authorities continue to monitor the situation while discussions about 
    educational reforms remain ongoing.
    `
  },


 {
  id:3,

  title:"India's Digital Payment Growth Reaches New Milestone",

  image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",


detailImage:third,
  category:"Business",

  date:"Today",

  description:
  "Digital payments continue to grow rapidly as more people adopt online transactions.",

  content:
  `
  India's digital payment ecosystem continues to expand as millions of people 
  adopt online transactions for their daily activities.

  The growth of digital payment platforms has transformed the way businesses 
  and customers exchange money. From small shops to large organizations, 
  digital transactions have become an important part of the modern economy.

  Experts believe that increased smartphone usage, internet accessibility, 
  and secure payment technologies have contributed significantly to this 
  growth.

  The development of digital financial services is also helping improve 
  convenience, transparency, and accessibility for people across different 
  regions of the country.

  As technology continues to evolve, digital payments are expected to play a 
  major role in India's future economy.
  `
},


  {
    id:4,
    title:"ISRO Announces New Mission",
    image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500",
    detailImage:isro,
    category:"Science",
    date:"Today",

    description:
      "ISRO reveals details about its upcoming space mission.",

    content:
    `
    The Indian Space Research Organisation (ISRO) has announced details about 
    its upcoming space mission, marking another important milestone in India's 
    space exploration journey.

    Scientists and engineers are working on advanced technologies to improve 
    satellite communication, research capabilities, and future exploration 
    programs.

    The mission represents India's continuous progress in the field of space 
    science and demonstrates the country's growing capabilities in developing 
    innovative solutions.

    ISRO has successfully completed several important missions in recent years, 
    and this upcoming project is expected to contribute valuable information 
    for future research.

    The scientific community and citizens across India are showing great 
    interest in the mission and are eagerly waiting for further updates from 
    ISRO.
    `
  }
];

export default NewsData;