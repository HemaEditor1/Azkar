import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { linksBtns } from "../Data/linksBtns";

const MoreLinks = ({ isMorning }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsOpen(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="LinksMoreZekr" ref={menuRef}>
      <div
        className={`links ${isMorning ? "" : "night"} ${isOpen ? "open" : "close"}`}
      >
        {linksBtns.map((linkBtn) => (
          <Link key={linkBtn.path} to={`/${linkBtn.path}`}>
            {linkBtn.title}
          </Link>
        ))}
      </div>
      <div onClick={toggleLinks}>
        <RiArrowDownSLine className={`BtnDown ${isOpen ? "rotate" : ""}`} />
      </div>
    </div>
  );
};

export default MoreLinks;
