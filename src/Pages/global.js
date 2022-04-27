import aimee from '../Components/Images/Members/aimee-xu.jpg';
import christine from '../Components/Images/Members/christine-hamakawa.jpg';
import emily from '../Components/Images/Members/emily-gong.jpeg';
import hayden from '../Components/Images/Members/hayden-dsouza.jpeg';
import madison from '../Components/Images/Members/madison-kohls.jpeg';
import sean from '../Components/Images/Members/sean-tjoa.jpg';
import tristan from '../Components/Images/Members/tristan-dewing.jpg';
import vince from '../Components/Images/Members/vince-front.jpg';
import karina from '../Components/Images/Members/karina-santoso.jpeg';
import helen from '../Components/Images/Members/helen-coffman.jpg';
import ryan from '../Components/Images/Members/ryan-ohlinger.jpg';
import sarah from '../Components/Images/Members/sarah-kosic.jpg';
import ishaan from '../Components/Images/Members/ishaan-shah.jpg';
import tushar from '../Components/Images/Members/tushar-roy.png';
import william from '../Components/Images/Members/william-foote.jpg';
import shail from '../Components/Images/Members/shail-mirpuri.jpg';

import OSU from '../Components/Images/osu.jpeg';
import Weight from '../Components/Images/weight.png';
import Personality from '../Components/Images/personality.png';
import NBA from '../Components/Images/nba.png';
import Music from '../Components/Images/music.png';
import Baseball from '../Components/Images/baseball.png';
import Age from '../Components/Images/movie.png';

import Accenture from '../Components/Logos/company-logos/accenture.png';
import Aktana from '../Components/Logos/company-logos/aktana.jpg';
import Amazon from '../Components/Logos/company-logos/amazon.png';
import BP from '../Components/Logos/company-logos/bp.png';
import Deloitte from '../Components/Logos/company-logos/deloitte.jpg';
import DRW from '../Components/Logos/company-logos/drw.png';
import InternetBrands from '../Components/Logos/company-logos/internet-brands.png';
import KPMG from '../Components/Logos/company-logos/kpmg.png';
import Mckinsey from '../Components/Logos/company-logos/mckinsey.png';
import Meta from '../Components/Logos/company-logos/meta.png';
import Microsoft from '../Components/Logos/company-logos/microsoft.png';
import MorganStanley from '../Components/Logos/company-logos/morgan-stanley.png';
import PacificLife from '../Components/Logos/company-logos/pacific-life.jpeg';
import Uber from '../Components/Logos/company-logos/uber.jpg';
import UCLAPsychology from '../Components/Logos/company-logos/ucla-psychology.png';
import Visa from '../Components/Logos/company-logos/visa.png';
import ZS from '../Components/Logos/company-logos/zs.jpeg';

export const exec = [
  {
    name: 'Sean Tjoa',
    pos: 'President',
    year: "'24",
    img: sean,
  },
  {
    name: 'Christine Hamakawa',
    pos: 'External Vice-President',
    year: "'24",
    img: christine,
  },
  {
    name: 'Tristan Dewing',
    pos: 'Internal Vice-President',
    year: "'24",
    img: tristan,
  },
  {
    name: 'Madison Kohls',
    pos: 'Executive Advisor',
    year: "'24",
    img: madison,
  },
  {
    name: 'Emily Gong',
    pos: 'Director Of Professional Outreach',
    year: "'24",
    img: emily,
  },
  {
    name: 'Aimee Xu',
    pos: 'Director Of Finance',
    year: "'24",
    img: aimee,
  },
  {
    name: 'Vincent Front',
    pos: 'Director Of Membership',
    year: "'24",
    img: vince,
  },
  {
    name: "Hayden D'Souza",
    pos: 'Webmaster',
    year: "'24",
    img: hayden,
  },
]

export const gen = [
  {
    name: 'Karina Santoso',
    pos: '',
    year: "'24",
    img: karina,
  },
  {
    name: 'Ryan Ohlinger',
    pos: '',
    year: "'24",
    img: ryan,
  },
  {
    name: 'Helen Coffman',
    pos: '',
    year: "'24",
    img: helen,
  },
  {
    name: 'Sarah Kosic',
    pos: '',
    year: "'24",
    img: sarah,
  },
  {
    name: 'William Foote',
    pos: '',
    year: "'24",
    img: william,
  },
  {
    name: 'Tushar Roy',
    pos: '',
    year: "'24",
    img: tushar,
  },
  {
    name: 'Shail Mirpuri',
    pos: '',
    year: "'24",
    img: shail,
  },
  {
    name: 'Ishaan Shah',
    pos: '',
    year: "'24",
    img: ishaan,
  },
]

export const testimonials = [
  {
    company: "Imagine LA",
    message: "A big piece of our program is matching families to volunteer mentors, and in 2020 we were faced with a great problem: too many mentors! The UCLA Data Science Union helped us crack open this challenge by developing an algorithm-based web app to help us identify the best-fit matches for our family members. From start to finish, the DSU team was professional, thoughtful, and collaborative, and as a result, our matches have been more data-driven and easier to identify. Thank you DSU!",
  },
];


export const projects = {
  s21: {
    stocks: {
      title: 'Forecasting Stock Prices',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202107/share_1200x675_092019020355_2-sixteen_nine.jpg?size=1200:675}',
    },
    osu: {
      title: 'Refining Player Rankings in OSU',
      image:OSU,
    },
  },
  w21: {
    weight: {
      title: 'Tracking Weight Loss',
      image: Weight,
    },
    personality: {
      title: 'Predicting Personality Traits',
      image: Personality,
    },
  },
  f20: {
    nba: {
      title: 'Predicting NBA Players\' Salaries',
      image: NBA,
    },
    age: {
      title: 'Building an Age Guesser using Transfer Learning',
      image: Age
    },
  },
  s20: {
    music: {
      title: 'Music Festivals Impact on DJ Popularity',
      image: Music,
    },
    mlb: {
      title: 'MLB Hit Predictor',
      image: Baseball,
    },
  },

};

export const logos = [
  {
    id: 1,
    img: Accenture,
    company: 'Accenture',
  },
  {
    id: 2,
    img: Aktana,
    company: 'Aktana',
  },
  {
    id: 3,
    img: Amazon,
    company: 'Amazon',
  },
  {
    id: 4,
    img: BP,
    company: 'BP',
  },
  {
    id: 5,
    img: Deloitte,
    company: 'Deloitte',
  },
  {
    id: 6,
    img: DRW,
    company: 'DRW',
  },
  {
    id: 7,
    img: InternetBrands,
    company: 'Internet Brands',
  },
  {
    id: 8,
    img: KPMG,
    company: 'KPMG',
  },
  {
    id: 9,
    img: Mckinsey,
    company: 'Mckinsey',
  },
  {
    id: 10,
    img: Meta,
    company: 'Meta',
  },
  {
    id: 11,
    img: Microsoft,
    company: 'Microsoft',
  },
  {
    id: 12,
    img: MorganStanley,
    company: 'Morgan Stanley',
  },
  {
    id: 13,
    img: PacificLife,
    company: 'Pacific Life',
  },
  {
    id: 14,
    img: Uber,
    company: 'Uber',
  },
  {
    id: 15,
    img: UCLAPsychology,
    company: 'UCLA Psychology',
  },
  {
    id: 16,
    img: Visa,
    company: 'Visa',
  },
  {
    id: 17,
    img: ZS,
    company: 'ZS',
  },
]