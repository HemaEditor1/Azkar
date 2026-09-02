import { useState, useEffect, useRef } from "react";
import { RiInformation2Fill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ZekrBoxNight = ({
  id,
  title,
  text,
  target,
  value,
  source,
  isQuran,
  resetCounters,
}) => {
  const [isDeactive, setIsDeactive] = useState(false);

  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem(`zekrCounter${id}`);

    return savedCounter ? Number(savedCounter) : 0;
  });

  useEffect(() => {
    if (resetCounters === 0) return;

    setCounter(0);

    localStorage.setItem(`zekrCounter${id}`, 0);
  }, [resetCounters]);

  useEffect(() => {
    localStorage.setItem(`zekrCounter${id}`, counter);
  }, [counter, id]);

  const counterOpen = counter < target;

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
    <div className={`boxNight ${isQuran ? "Quran" : ""}`} id={`Zekr-${id}`}>
      <div className="zekr">
        {title && <h3>{title}</h3>}
        <h2>{text}</h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button
          className={`smlNum ${counterOpen ? "" : "deactive"}`}
          onClick={() => {
            if (counter < target) {
              const newCounter = counter + 1;
              setCounter(newCounter);

              if (newCounter === target) {
                const nextBox = document.getElementById(`Zekr-${id + 1}`);
                if (nextBox) {
                  nextBox.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }
            }
          }}
        >
          <span className={`${counterOpen ? "" : "deactive"}`}>{counter}</span>/
          {target}
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div className="srcZekr" ref={sourceRef}>
        <a
          href="#"
          className={`infoBtn ${isDeactive ? "deactive" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setIsDeactive(true);
          }}
        >
          <RiInformation2Fill />
        </a>

        <h5
          className={`sourceHidden ${isDeactive ? "" : "deactive"}`}
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
          className={`doneBtn ${isDeactive ? "" : "deactive"}`}
          onClick={(e) => {
            e.preventDefault();
            setIsDeactive(false);
          }}
        >
          <RiCheckboxCircleFill />
        </a>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBoxNight;
