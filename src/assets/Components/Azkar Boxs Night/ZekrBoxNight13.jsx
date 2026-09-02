import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box">
      <div class="zekr">
        <h2>أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.</h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button class="smlNum">
          <span>0</span>/3
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div class="srcZekr">
        <a href="">
          <RiInformation2Fill />
        </a>

        <h5 class="sourceHidden">
          صحيح مسلم
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
