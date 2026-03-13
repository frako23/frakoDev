import { Astro } from "../assets/icons/astro";
import { Cloudinary } from "../assets/icons/cloudinary";
import { CSS } from "../assets/icons/css";
import { Elementor } from "../assets/icons/elementor";
import { Flask } from "../assets/icons/flask";
import { HTML5 } from "../assets/icons/html";
import { JavaScript } from "../assets/icons/javascript";
import { Nextjs } from "../assets/icons/nextjs";
import { PostgreSQL } from "../assets/icons/postgre";
import { Prisma } from "../assets/icons/prisma";
import { Python } from "../assets/icons/python";
import { React } from "../assets/icons/react";
import { TailwindCSS } from "../assets/icons/tailwind";
import { TypeScript } from "../assets/icons/typescript";
import { WordPress } from "../assets/icons/wordpress";

export const IconSwitch = (tech) => {
  switch (tech) {
    case "JavaScript":
      return <JavaScript width={50} height={50} />;
    case "React":
      return <React width={50} height={50} />;
    case "Flask":
      return <Flask width={50} height={50} />;
    case "Python":
      return <Python width={50} height={50} />;
    case "PostgreSQL":
      return <PostgreSQL width={50} height={50} />;
    case "CSS":
      return <CSS width={50} height={50} />;
    case "HTML":
      return <HTML5 width={50} height={50} />;
    case "Next.js":
      return <Nextjs width={50} height={50} />;
    case "WordPress":
      return <WordPress width={50} height={50} />;
    case "Prisma":
      return <Prisma width={50} height={50} />;
    case "Elementor":
      return <Elementor width={50} height={50} />;
    case "Tailwind CSS":
      return <TailwindCSS width={50} height={50} />;
    case "Astro":
      return <Astro width={50} height={50} />;
    case "Cloudinary":
      return <Cloudinary width={50} height={50} />;
    case "Typescript":
      return <TypeScript width={50} height={50} />;
    default:
      return null;
  }
};
