import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box">
      <div class="zekr">
        <h2>
          اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ، خَلَقْتَنـي وَأَنا
          عَبْـدُك، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت،
          أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ
          عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ
          الذُّنـوبَ إِلاّ أَنْتَ.
        </h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button class="smlNum">
          <span>0</span>/1
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div class="srcZekr">
        <a href="">
          <RiInformation2Fill />
        </a>

        <h5 class="sourceHidden">
          ومن قالَها حينَ يمسي موقنًا بِها فَماتَ من ليلتِهِ دخلَ الجنَّةَ
          <br />
          صحيح البخاري
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
