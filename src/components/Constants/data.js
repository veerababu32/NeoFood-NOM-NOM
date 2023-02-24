/* eslint-disable import/no-anonymous-default-export */

import images from "./images";

import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";

// Localities Section Data
const localitiesData = [
  {
    id: "One",
    city: "Lower Parel",
    num: 70,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Two",
    city: "Powai",
    num: 923,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Three",
    city: "Malad West",
    num: 923,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Four",
    city: "Borivali West",
    num: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Five",
    city: "Bandra Kurla Complex",
    num: 350,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Six",
    city: "Vasai",
    num: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Seven",
    city: "Juhu",
    num: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
  {
    id: "Eight",
    city: "Girgaon Chowpatty",
    num: 160,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad neque exercitationem earum accusantium cupiditate.",
  },
];

// Explore Section Data
const exploreAccordianOptionsData = [
  {
    id: "ExploreOne",
    title: "Popular cuisines near me",
    description:
      "Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Desserts food near me . Ice Cream food near me . Kebab food near me . Maharashtrian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rolls food near me . Sandwich food near me . Seafood food near me . Shake food near me . Sichuan food near me . South Indian food near me . Street food near me",
  },
  {
    id: "ExploreTwo",
    title: "Popular restaurant types near me  ",
    description:
      "Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Desserts food near me . Ice Cream food near me . Kebab food near me . Maharashtrian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rolls food near me . Sandwich food near me . Seafood food near me . Shake food near me . Sichuan food near me . South Indian food near me . Street food near me",
  },
  {
    id: "ExploreThree",
    title: "Top restaurant chains",
    description:
      "Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Desserts food near me . Ice Cream food near me . Kebab food near me . Maharashtrian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rolls food near me . Sandwich food near me . Seafood food near me . Shake food near me . Sichuan food near me . South Indian food near me . Street food near me",
  },
  {
    id: "ExploreFour",
    title: "Cities we deliver to",
    description:
      "Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Desserts food near me . Ice Cream food near me . Kebab food near me . Maharashtrian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rolls food near me . Sandwich food near me . Seafood food near me . Shake food near me . Sichuan food near me . South Indian food near me . Street food near me",
  },
];

// Footer Section Data
const countries = [
  {
    label: "India",
    img: images.Ind,
  },
  {
    label: "Australia",
    img: images.Aus,
  },
  {
    label: "Sri Lanka",
    img: images.SL,
  },
];

const languages = [
  {
    label: "English",
    img: images.Globe,
  },
  {
    label: "Hindi",
    img: images.Globe,
  },
  {
    label: "Telugu",
    img: images.Globe,
  },
];

const aboutNomNomUl = [
  {
    value: "Who We Are",
  },
  {
    value: "Blog",
  },
  {
    value: "Work With Us",
  },
  {
    value: "Investor Relations",
  },
  {
    value: "Report Fraud",
  },
  {
    value: "Contact Us",
  },
];

const nomVerseUl = [
  {
    value: "NOM-NOM",
  },
  {
    value: "Feeding India",
  },
  {
    value: "Hyperpure",
  },
  {
    value: "Nomland",
  },
];

const forRestaurantsUl = [
  {
    value: "Partner With Us",
  },
  {
    value: "Apps For You",
  },
];

const learnMoreUl = [
  {
    value: "Privacy",
  },
  {
    value: "Security",
  },
  {
    value: "Terms",
  },
  {
    value: "Sitemap",
  },
];

const socialIcons = [
  {
    img: RiLinkedinFill,
  },
  {
    img: RiInstagramLine,
  },
  {
    img: RiTwitterLine,
  },
  {
    img: RiYoutubeFill,
  },
  {
    img: RiFacebookFill,
  },
];
export default {
  exploreAccordianOptionsData,
  localitiesData,
  countries,
  languages,
  aboutNomNomUl,
  nomVerseUl,
  forRestaurantsUl,
  learnMoreUl,
  socialIcons,
};
