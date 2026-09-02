import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box">
      <div class="zekr">
        <h2>
          لا إلهَ إلا اللهُ وحدَه لا شريكَ له، له الملكُ، و له الحمدُ يحيي و
          يُميتُ، و هو على كلِّ شيءٍ قديرٌ.
        </h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button class="smlNum">
          <span>0</span>/10
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div class="srcZekr">
        <a href="">
          <RiInformation2Fill />
        </a>

        <h5 class="sourceHidden">
          من قالهُ ، كتب اللهُ له بكل واحدةٍ قالها عشرَ حسناتٍ ، و حَطَّ عنه بها
          عشرَ سيِّئاتٍ ، و رفعَه بها عشرَ درجاتٍ ، و كُنَّ له كعشرِ رِقابٍ ، و
          كُنّ له مَسلَحةً من أولِ النهارِ إلى آخرِه ، و لم يعملْ يومئذٍ عملًا
          يَقهَرْهنَّ
          <br />
          السلسلة الصحيحة
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
