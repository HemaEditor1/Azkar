import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box">
      <div class="zekr">
        <h2>
          اللهمَّ فاطرَ السماواتِ والأرضِ، عالمَ الغيبِ والشهادةِ، ربَّ كلِّ
          شيءٍ ومليكَه، أعوذُ بك من شرِّ نفسي، ومن شرِّ الشيطانِ وشِركِه، و أن
          أقترفَ على نفسي سوءًا، أو أَجُرَّه إلى مسلمٍ.
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
          اخرجه البخاري في صحيح الأدب المفرد
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
