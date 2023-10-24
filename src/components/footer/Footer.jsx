import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accentDark py-10 flex">
      <div className="container mx-auto">
        <p className="text-white">
          Copyright &copy; THINSIL STORE 2023. All rights reserved.
        </p>
      </div>
      <div className="socials flex items-center gap-5 text-white mx-10">
        <Link to={"https://github.com/Fardeen2001"} target="_blank">
          <AiOutlineGithub size={30} />
        </Link>
        <Link to={"https://www.instagram.com/far_deen_19"} target="_blank">
          <AiOutlineInstagram size={30} />
        </Link>
        <Link to={"https://www.twitter.com/fardeenahamed5"} target="_blank">
          <RiTwitterXLine size={30} />
        </Link>
        <Link to={"mailto:fardeenahamed2001@gmail.com"}>
          <AiOutlineMail size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
