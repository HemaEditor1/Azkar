import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box" id="Quran">
      <div class="zekr">
        <h3>بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم</h3>
        <h2>
          قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝١ مِن شَرِّ مَا خَلَقَ ۝٢ وَمِن شَرِّ
          غَاسِقٍ إِذَا وَقَبَ ۝٣ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ ۝٤
          وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝٥
        </h2>
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
          قل هو الله أحد، والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل
          شيء.
          <br />
          صحيح أبي داود
          <i class="fa-solid fa-circle-check doneBtn deactive"></i>
        </h5>
      </div>
      {/* ======================================= Source */}
    </div>
  );
};

export default ZekrBox;
