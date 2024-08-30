import { TiMessages } from "react-icons/ti";
import { VscCompassActive } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { PiArchiveDuotone } from "react-icons/pi";
import { TbMessageOff } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";

import "./headmenu.css";
const HeadMenu = () => {
  return (
    <div className="Chat-head-menu bg-white rounded-bl-xl rounded-e-lg w-[345px] h-[384px] absolute z-10 top-12 left-4 p-[6px]">
      <a href="#" className="mb-[6px]">
        <span>
          <CiSettings />
        </span>
        <p>Preferences</p>
      </a>
      <hr />
      <div className="flex flex-col my-[6px]">
        <a href="#">
          <span className="icon text-xl">
            <VscCompassActive />
          </span>
          <p>Preferences</p>
        </a>
        <a href="#">
          <span>
            <TiMessages />
          </span>
          <p>Preferences</p>
        </a>
        <a href="#">
          <span>
            <PiArchiveDuotone />
          </span>
          <p>Preferences</p>
        </a>
        <a href="#">
          <span>
            <TbMessageOff />
          </span>
          <p>Preferences</p>
        </a>
      </div>
      <hr />
      <a href="#" className="my-[6px]">
        <span>
          <MdOutlinePrivacyTip />
        </span>
        <p>Preferences</p>
      </a>
      <hr />
      <a href="#" className="my-[6px]">
        <span>
          <IoIosHelpCircleOutline />
        </span>
        <p>Preferences</p>
      </a>
      <hr />
      <a href="#" className="my-[6px]">
        <span>
          <RiMessengerLine />
        </span>
        <p>Preferences</p>
      </a>
    </div>
  );
};

export default HeadMenu;
