import textDay from "../Elements/png/btn1.png";
import textNight from "../Elements/png/btn2.png";

const DayAndNightBtn = ({ isMorning, setIsMorning }) => {
  return (
    <div className="btns">
      <button
        className={`theSwitshBtnDay ${isMorning ? "" : "deactive"}`}
        onClick={() => setIsMorning(true)}
      >
        <img src={textDay} alt="" />
      </button>
      <button
        className={`theSwitshBtnNight ${isMorning ? "deactive" : ""}`}
        onClick={() => {
          setIsMorning(false);
        }}
      >
        <img src={textNight} alt="" />
      </button>
    </div>
  );
};

export default DayAndNightBtn;
