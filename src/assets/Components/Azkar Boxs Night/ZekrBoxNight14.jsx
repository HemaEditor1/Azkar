import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box">
      <div class="zekr">
        <h2>سُبْحـانَ اللهِ وَبِحَمْـدِهِ.</h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button class="smlNum">
          <span>0</span>/100
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div class="srcZekr">
        <a href="">
          <RiInformation2Fill />
        </a>

        <h5 class="sourceHidden">
          من قالهُ مِائةَ مَرَّةٍ ، لمْ يأتِ أحدٌ يومَ القِيامةِ بأفْضلَ مِمَّا
          جاء به ، إلَّا أحَدٌ قال مِثلَ ذلِكَ ، و زادَ عليْهِ
          <br />
          صحيح الجامع
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
