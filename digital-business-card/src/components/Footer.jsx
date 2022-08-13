import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-row bg-[#161619] text-[#918E9B] py-[19.5px] w-full justify-center">
      <SocialIcon icon={<FaTwitterSquare size={25} />} link="#" />
      <SocialIcon icon={<FaFacebookSquare size={25} />} link="#" />
      <SocialIcon icon={<FaInstagramSquare size={25} />} link="#" />
      <SocialIcon icon={<FaLinkedin size={25} />} link="#" />
      <SocialIcon icon={<FaGithubSquare size={25} />} link="#" />
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a href={link} className="mx-3">
      {icon}
    </a>
  );
}

export default Footer;
