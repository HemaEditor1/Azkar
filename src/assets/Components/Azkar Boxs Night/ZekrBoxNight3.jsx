import { RiInformation2Fill } from "react-icons/ri";

const ZekrBox = () => {
  return (
    <div class="box" id="Quran">
      <div class="zekr">
        <h3>بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم</h3>
        <h2>
          قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝١ مَلِكِ ٱلنَّاسِ ۝٢ إِلَٰهِ ٱلنَّاسِ
          ۝٣ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝٤ ٱلَّذِى يُوَسْوِسُ فِى
          صُدُورِ ٱلنَّاسِ ۝٥ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ ۝٦
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
