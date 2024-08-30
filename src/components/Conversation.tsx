import { useState } from "react";
import "./conversation.css";
import { MdSearch } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { BiMessageEdit } from "react-icons/bi";
import { BsFillBellSlashFill } from "react-icons/bs";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { PiVideoCameraFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { BsImages } from "react-icons/bs";
import { LuSticker } from "react-icons/lu";
import { HiGif } from "react-icons/hi2";
// import { BiSolidLike } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";

import pp from "./../../public/image/profile-pic.jpeg";
import active from "./../../public/image/actpng-removebg-preview.png";
import HeadMenu from "./popup/HeadMenu";
import { chatList } from "../data";
const Conversation = () => {
  const [popup, setPopup] = useState(false);
  const handleToggleChange = () => {
    setPopup(!popup);
  };

  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState<string[]>([]);

  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    if (activity !== "") {
      setListData((listData) => {
        const updateListData = [...listData, activity];
        console.log(updateListData);
        setActivity("");
        return updateListData;
      });
    } else {
      // alert("plese provide a todo item");
    }
  }
  const [showInformation, setShowInformation] = useState(false);
  const handleClick = (index: number) => {
    console.log("Clicked index:", index);
  };
  return (
    <div className="section flex justify-between w-screen h-full fixed">
      <div className="chats w-[360px] h-full border-r-2">
        <div className="w-[360px] flex flex-col h-full">
          <div className="heading p-2 flex justify-between items-center">
            <h4 className="text-3xl font-bold">Chats</h4>
            <div className="btn-group flex gap-2 text-xl relative ">
              <button
                onClick={handleToggleChange}
                className="p-2 bg-gray-200 rotate-90 rounded-full "
              >
                <CiMenuKebab />
              </button>
              <button className="p-2 bg-gray-200 rounded-full">
                <BiMessageEdit />
              </button>
              {popup && <HeadMenu />}
            </div>
          </div>
          <div className="search-box p-2 flex items-center gap-[5px]">
            <button className="p-[6px] bg-gray-100 text-gray-500 rounded-full text-2xl">
              <HiMiniArrowLeft />
            </button>
            <div className="box bg-gray-100 rounded-full w-full p-[6px] flex gap-1 items-center">
              <button className="text-2xl text-gray-500">
                <MdSearch />
              </button>
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Seacrh Mesenger"
              />
            </div>
          </div>
          <div className="inbox-communities p-2 flex gap-2 mb-1 text-base font-semibold">
            <button className="px-3 py-2 rounded-full bg-gray-50">Inbox</button>
            <button className="px-3 py-2 rounded-full bg-gray-50">
              Communities
            </button>
          </div>
          <ul className="friend-list overflow-y-auto pb-[3px]">
            {chatList.map((item, index) => (
              <li key={index} onClick={() => handleClick(index)}>
                <a
                  href="#"
                  className="chat-profile flex items-center justify-between hover:bg-gray-100 rounded-md p-2 gap-3 relative"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        className="w-[55px] h-[55px] rounded-full "
                        src={item.image}
                        alt=""
                      />
                      <div className="absolute border-white border-2 rounded-full bg-green-600 w-4 h-4 right-0 bottom-0"></div>
                    </div>
                    <div className="texts">
                      <p className="name text-base font-semibold">
                        {item.name}
                      </p>
                      <p className="text text-sm text-gray-800">
                        {item.message} <span>.</span> <span>1h</span>
                      </p>
                    </div>
                  </div>
                  <button className="chat-menu absolute p-[10px] bg-white rounded-full border-gray-300 shadow-lg border-[1px] right-[30px]">
                    <CiMenuKebab className="rotate-90	" />
                  </button>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300 ">
                      <BsFillBellSlashFill />
                    </p>
                    <img src={active} alt="" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="conversation h-screen w-full bg-white">
        <div className="w-full flex flex-col justify-between h-screen">
          <div className="chat-header bg-white flex justify-between items-center px-4 py-2 border-b-2">
            <div className="chat-header-profile flex gap-2 items-center justify-center">
              <img className="w-[45px] h-[45px] rounded-full" src={pp} alt="" />
              <div className="flex flex-col">
                <p className="font-semibold leading-3 text-base">
                  Abdullah Al Mamun
                </p>
                <p className="text-sm  text-gray-500">Active 1h ago</p>
              </div>
            </div>
            <div className="contact-call-info flex items-center justify-center gap-4 text-[#007DF2] text-2xl">
              <a href="#">
                <IoCall />
              </a>
              <a href="#">
                <PiVideoCameraFill />
              </a>
              <a href="#" onClick={() => setShowInformation(!showInformation)}>
                <IoIosInformationCircle />
              </a>
            </div>
          </div>
          <div className="chat-history w-full flex flex-col justify-between h-full overflow-y-scroll">
            <div className="chat-history-profile  flex flex-col justify-center items-center mt-10">
              <img className="w-[70px] h-[70px] rounded-full" src={pp} alt="" />

              <p className="chat-history-name text-base font-semibold pt-1">
                Abdullah Al Mamun
              </p>
              <div className="end-to-end-encrypted mt-6 bg-gray-100 rounded-lg p-[6px]">
                <p className="flex leading-[5px] items-center justify-center text-sm font-semibold">
                  <BiSolidLockAlt />
                  End-to-end encrypted
                </p>
                <p className="text-sm font-normal  text-gray-500">
                  Messages and calls are secured with end-to-end encryption.
                  <a href="#" className="hover:underline text-blue-600">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="date-time w-full flex items-center justify-center py-3 text-[12px] text-gray-500 font-semibold">
              <p>Mon 11:26PM</p>
            </div>
            <div className="chatting h-full p-2 w-full">
              <div className="w-full flex flex-col gap-2 ">
                <div className="flex justify-start gap-2">
                  <img
                    className="w-[33px] h-[33px] rounded-full"
                    src={pp}
                    alt=""
                  />
                  <p className="bg-gray-100 rounded-3xl px-3 py-[5px] inline">
                    Hi, I'm Abdullah
                  </p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-[3px]">
                  {listData.map((data) => {
                    return (
                      <p className="bg-blue-500 flex justify-end text-white rounded-3xl px-3 py-[5px]">
                        {data}
                      </p>
                    );
                  })}
                </div>
                {/* <div className="flex justify-end  gap-2">
                  <p className="bg-blue-500 text-white rounded-3xl px-3 py-[5px] inline">
                    Hi, I'm Abdullah
                  </p>
                  <img
                    className="w-[37px] h-[37px] rounded-full"
                    src={pp}
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="chat-footer w-full flex gap-2 items-center justify-center bg-white p-2">
            <a className="text-[#0084FF] text-[21px]" href="#">
              <FaCirclePlus />
            </a>
            <a className="text-[#0084FF] text-[21px]" href="#">
              <BsImages />
            </a>
            <a className="text-[#0084FF] text-[21px]" href="#">
              <LuSticker />
            </a>
            <a className="text-[#0084FF] text-[21px]" href="#">
              <HiGif />
            </a>
            <div className="text-edit bg-[#F0F2F5] rounded-full p-2 w-full flex justify-between items-center">
              <input
                className="outline-none border-none w-full bg-transparent text-gray-800"
                type="text"
                placeholder="Aa"
                required
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
              <a className="text-[#0084FF] text-xl" href="#">
                <BsFillEmojiSmileFill />
              </a>
            </div>
            <a
              className="text-[#0084FF]  flex items-center justify-center  text-[21px]"
              href="#"
            >
              {/* <BiSolidLike /> */}
              <button
                onClick={addActivity}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <RiSendPlane2Fill />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          showInformation
            ? "hideInformation"
            : "information h-screen min-w-[360px] overflow-y-scroll border-l-2"
        }
      >
        <div className="w-[360px">
          <div className="profile-name py-4 flex flex-col justify-center items-center">
            <img
              className="w-[72px] h-[72px] rounded-full mb-2"
              src={pp}
              alt=""
            />
            <a href="#" className="text-base font-semibold hover:underline">
              Abdullah Al Mamun
            </a>
            <p className="text-gray-500 text-sm">Active 1h ago </p>
          </div>
          <div className="profile-icon w-full flex items-center justify-center gap-10 mt-2">
            <div className="flex flex-col items-center justify-self-center">
              <button className="p-2 text-[22px] rounded-full hover:bg-gray-300 bg-gray-200 flex-ite">
                <CgProfile />
              </button>
              <p className="text-sm">Profile</p>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <button className="p-2 text-[22px] rounded-full hover:bg-gray-300 bg-gray-200 flex-ite">
                <IoNotifications />
              </button>
              <p className="text-sm">Mute</p>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <button className="p-2 text-[22px] rounded-full hover:bg-gray-300 bg-gray-200 flex-ite">
                <IoSearchSharp />
              </button>
              <p className="text-sm">Search</p>
            </div>
          </div>
          <div className="options flex flex-col w-full p-2 mt-4 ">
            <a
              href="#"
              className="chat-info flex justify-between items-center p-2 hover:bg-[#F2F2F2] rounded-lg text-base font-semibold"
            >
              <p>Chat info</p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </a>
            <a
              href="#"
              className="customize-chat flex justify-between items-center p-2 hover:bg-[#F2F2F2] rounded-lg text-base font-semibold"
            >
              <p> Customize</p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </a>
            <a
              href="#"
              className="media-file-link flex justify-between items-center p-2 hover:bg-[#F2F2F2] rounded-lg text-base font-semibold"
            >
              <p>Media, files and links</p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </a>
            <a
              href="#"
              className="privacy-support flex justify-between items-center p-2 hover:bg-[#F2F2F2] rounded-lg text-base font-semibold"
            >
              <p>Privacy support</p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
