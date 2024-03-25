import arrowRightThin from "../assets/icons/icons8-right-arrow-60.png";
import branches from "../assets/features-png/Branches.png";
import key from "../assets/features-png/Key.png";
import dollar from "../assets/features-png/Dollar Sign.png";
import message from "../assets/features-png/Message.png";
import puzzle from "../assets/features-png/Puzzle.png";
import social from "../assets/features-png/Social.png";

export const features = [
  {
    title: "Branches",
    details:
      "Abstract Branches lets you manage, version, and document your designs in one place.",
    img: branches,
    linkText: "Learn more",
    icon: arrowRightThin,
  },
  {
    title: "Manage your account",
    details:
      "Configure your account settings, such as your email, profile details, and password.",
    img: social,
    linkText: "Learn more",
    icon: arrowRightThin,
  },

  {
    title: "Manage organization, teams, and projects",
    details:
      "Use Abstract Organizations, teams, and projects to organize your people and your work.",
    img: puzzle,
    linkText: "Learn more",
    icon: arrowRightThin,
  },
  {
    title: "Manage Billing",
    details: "Change subscription and payment details.",
    img: dollar,
    linkText: "Learn more",
    icon: arrowRightThin,
  },
  {
    title: "Authenticate to Abstract",
    details: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    img: key,
    linkText: "Learn more",
    icon: arrowRightThin,
  },

  {
    title: "Abstract Support",
    details: "Get in touch with a human.",
    img: message,
    linkText: "Learn more",
    icon: arrowRightThin,
  },
];

export const footer = [
  {
    title: "Abstract",
    links: [
      {
        text: "Branches",
        hyperlink: "#branches",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        text: "Blog",
        hyperlink: "#blog",
      },
      {
        text: "Help Center",
        hyperlink: "#help-center",
      },
      {
        text: "Release Notes",
        hyperlink: "#release-notes",
      },
      {
        text: "Status",
        hyperlink: "#status",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        text: "Twitter",
        hyperlink: "#twitter",
      },
      {
        text: "LinkedIn",
        hyperlink: "#linkedin",
      },
      {
        text: "Facebook",
        hyperlink: "#facebook",
      },
      {
        text: "Dribble",
        hyperlink: "#dribble",
      },
      {
        text: "Podcast",
        hyperlink: "#podcast",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        hyperlink: "#about-us",
      },
      {
        text: "Career",
        hyperlink: "#career",
      },
      {
        text: "Legal",
        hyperlink: "#legal",
      },
    ],
  },
];

export const contactUs = [
  {
    title: "Contact Us",
    email: "info@abstract.com",
  },
];

export const copyright = [
  {
    icon: "",
    title: "Copyright 2024",
    company: "Abstract Studio Design, Inc.",
    reserved: "All rights reserved",
  },
];
