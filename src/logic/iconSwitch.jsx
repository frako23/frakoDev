import { CSSIcon } from "../assets/icons/css";
import { FlaskIcon } from "../assets/icons/flask";
import HtmlIcon from "../assets/icons/html";
import { JavaScriptIcon } from "../assets/icons/javascript";
import { PostgreSQLIcon } from "../assets/icons/postgre";
import { PythonIcon } from "../assets/icons/python";
import { ReactIcon } from "../assets/icons/react";

export const IconSwitch = (tech) => {
  switch (tech) {
    case "JavaScript":
      return <JavaScriptIcon />;
    case "React":
      return <ReactIcon />;
    case "Flask":
      return <FlaskIcon />;
    case "Python":
      return <PythonIcon />;
    case "PostgreSQL":
      return <PostgreSQLIcon />;
    case "CSS":
      return <CSSIcon />;
    case "HTML":
      return <HtmlIcon />;
    default:
      return null;
  }
};
