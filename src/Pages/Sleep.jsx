import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import { quates } from "../assets/Data/quates";
import BackToHomeDownPageBTN from "../assets/Components/BackToHomeDownPageBTN";
import MoreAzkarSleep from "../assets/Components/MoreAzkarSleep";

const Sleep = () => {
  return (
    <>
      <HeaderMoreZekr />
      {/* ========================QUATE============= */}
      <div className="quate moreAzkar">
        <h5>{quates.sleep.title}</h5>
        <h4 className={`quate ${quates.sleep.isQuran ? "Quran" : ""}`}>
          "{quates.sleep.text}"
        </h4>
      </div>
      {/* ========================QUATE============= */}

      <MoreAzkarSleep />

      <div className="textBFooter">
        <h4>اعاننا الله واياكم على ذكره وشكره وحسن عبادته</h4>
      </div>

      <BackToHomeDownPageBTN />
      <FooterMoreZekr />
    </>
  );
};
export default Sleep;
