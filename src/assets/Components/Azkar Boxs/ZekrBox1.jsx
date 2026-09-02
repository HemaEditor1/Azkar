import { useState } from "react";
import { RiInformation2Fill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ZekrBox = () => {
  const [isDeactive, setIsDeactive] = useState(false);
  const [counterOpen, setCounterOpen] = useState(true);

  const [counter, setCounter] = useState(0);

  return (
    <div class="box Quran" id="">
      <div class="zekr">
        <h3>بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم</h3>
        <h2>
          قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝١ ٱللَّهُ ٱلصَّمَدُ ۝٢ لَمْ يَلِدْ وَلَمْ
          يُولَدْ ۝٣ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ۝٤
        </h2>
      </div>

      {/* ======================================= Counter */}
      <div>
        <button
          class={`smlNum ${counterOpen ? "" : "deactive"}`}
          onClick={() => {
            if (counter < 3) {
              setCounter(counter + 1);

              if (counter + 1 === 3) {
                setCounterOpen(false);
              }
            }
          }}
        >
          <span className={`${counterOpen ? "" : "deactive"}`}>{counter}</span>
          /3
        </button>
      </div>
      {/* ======================================= Counter */}

      {/* ======================================= Source */}
      <div class="srcZekr">
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
          قل هو الله أحد، والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل
          شيء.
          <br />
          صحيح أبي داود
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

export default ZekrBox;
