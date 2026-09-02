import { useEffect, useRef, useState } from "react";
import { RiInformation2Fill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const MoreZekrBox = ({ id, title, text, value, source, isQuran }) => {
  const [isDeactive, setIsDeactive] = useState(false);
  const sourceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isDeactive &&
        sourceRef.current &&
        !sourceRef.current.contains(e.target)
      ) {
        setIsDeactive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDeactive]);

  return (
    <div className={`box ${isQuran ? "Quran" : ""}`} id={`Zekr-${id}`}>
      <div className="moreZekr">
        <h3>{title}</h3>
        <h2>{text}</h2>
      </div>

      {/* --------------------------Source */}

      <div className="srcZekr" ref={sourceRef}>
        <a
          href="#"
          className={`infoBtn ${isDeactive ? "deactive" : "MoreZekr"}`}
          onClick={(e) => {
            e.preventDefault();
            setIsDeactive(true);
          }}
        >
          <RiInformation2Fill />
        </a>

        <h5
          className={`sourceHidden ${isDeactive ? "MoreZekr" : "deactive"}`}
          onClick={(e) => {
            e.preventDefault();
            setIsDeactive(false);
          }}
        >
          {value && (
            <>
              {value}

              <br />
            </>
          )}
          {source}
        </h5>
        <a
          href="#"
          className={`doneBtn ${isDeactive ? "MoreZekr" : "deactive"}`}
          onClick={(e) => {
            e.preventDefault();
            setIsDeactive(false);
          }}
        >
          <RiCheckboxCircleFill />
        </a>
      </div>
    </div>
  );
};

export default MoreZekrBox;
