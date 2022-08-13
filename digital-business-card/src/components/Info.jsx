import { HiMail } from "react-icons/hi";
import photo from "../assets/photo.jpg";

function Info() {
  return (
    <>
      <img className="w-full" src={photo} alt="Monish Sudhagar" />
      <div className="mx-6 mt-[21px] mb-8 text-center">
        <div className="text-white font-bold text-[25px] py-0">Monish Sudhagar</div>
        <div className="text-[#F3BF99] text-[12.8px] mb-2">Front-end Developer</div>
        <div className="text-neutral-100 text-[10.4px] mb-2">
          <a href="#">idonthaveawebsite.com</a>
        </div>
        <a href="#">
          <div className="button w-full bg-white font-medium text-[#374151] text-[14px]">
            <HiMail size={16} />
            <span className="ml-2">Email</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default Info;
