import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import { quates } from "../assets/Data/quates";
import BackToHomeDownPageBTN from "../assets/Components/BackToHomeDownPageBTN";
import MoreAzkarPrayer from "../assets/Components/MoreAzkarPrayer";

const Prayer = () => {
  return (
    <>
      <HeaderMoreZekr />
      {/* ========================QUATE============= */}
      <div className="quate moreAzkar">
        <h5>{quates.prayer.title}</h5>
        <h4 className={`quate ${quates.prayer.isQuran ? "Quran" : ""}`}>
          "{quates.prayer.text}"
        </h4>
      </div>
      {/* ========================QUATE============= */}

      <MoreAzkarPrayer />

      <div className="textBFooter">
        <h4>اعاننا الله واياكم على ذكره وشكره وحسن عبادته</h4>
      </div>

      <BackToHomeDownPageBTN />
      <FooterMoreZekr />
    </>
  );
};
export default Prayer;
