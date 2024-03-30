import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaHistory, FaPlusSquare } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { Divide as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const openMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          color="-webkit-linear-gradient(90deg, #6615c2, #ff5546)"
        />
        <div onClick={() => newChat()} className="new-chat">
          <FaPlusSquare size={20} color="#c4c7c5" />
          {menuOpen ? <p>New Chat</p> : null}
        </div>
        {menuOpen ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts?.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <RxQuestionMarkCircled size={32} color="#c4c7c5" />
          {menuOpen ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FaHistory size={30} color="#c4c7c5" />
          {menuOpen ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <MdOutlineSettings size={34} color="#c4c7c5" />
          {menuOpen ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
